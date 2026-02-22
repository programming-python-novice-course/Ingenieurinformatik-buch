(() => {
  const STORAGE_KEY = "ii-user-settings-v1";
  const DEFAULT_SETTINGS = {
    launchProvider: "datahub", // "binder" | "datahub"
    liveCodeMode: "manual", // "manual" | "auto"
  };

  const SELECTORS = {
    binderAnchors: 'a[href*="mybinder.org"]',
    datahubAnchors: 'a[href*="/hub/user-redirect/git-pull"]',
    launchDropdownCandidates: [
      ".menu-dropdown.launch-buttons",
      ".dropdown.launch-buttons",
      ".launch-buttons__dropdown",
      "#dropdown-buttons-trigger",
      '[data-bs-toggle="dropdown"][aria-label*="Launch"]',
      '[data-bs-toggle="dropdown"][title*="Launch"]',
    ],
    thebeLaunchCandidates: [
      ".thebe-launch-button",
      ".btn-launch-thebe-button",
      "#launch-thebe",
      '[data-event="thebe-launch"]',
      'button[title*="Live Code"]',
      'button[aria-label*="Live Code"]',
    ],
  };

  const STATE = {
    settings: null,
    launchHrefByProvider: {
      binder: null,
      datahub: null,
    },
  };

  function safeParse(json, fallback) {
    try {
      return JSON.parse(json);
    } catch {
      return fallback;
    }
  }

  function readSettings() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_SETTINGS };
      const parsed = safeParse(raw, {});
      return {
        launchProvider: parsed.launchProvider === "binder" ? "binder" : DEFAULT_SETTINGS.launchProvider,
        liveCodeMode: parsed.liveCodeMode === "auto" ? "auto" : DEFAULT_SETTINGS.liveCodeMode,
      };
    } catch {
      return { ...DEFAULT_SETTINGS };
    }
  }

  function writeSettings(settings) {
    STATE.settings = settings;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // localStorage can be blocked in hardened browser/privacy settings.
    }
  }

  function findFirstValidHref(selector) {
    const anchors = document.querySelectorAll(selector);
    for (const node of anchors) {
      if (!(node instanceof HTMLAnchorElement)) continue;
      const href = node.getAttribute("href");
      if (!href) continue;
      if (href.startsWith("#")) continue;
      return new URL(href, window.location.href).toString();
    }
    return null;
  }

  function refreshLaunchTargets() {
    STATE.launchHrefByProvider.binder = findFirstValidHref(SELECTORS.binderAnchors);
    STATE.launchHrefByProvider.datahub = findFirstValidHref(SELECTORS.datahubAnchors);
  }

  function getPreferredLaunchHref() {
    const preferred = STATE.settings.launchProvider;
    const preferredHref = STATE.launchHrefByProvider[preferred];
    if (preferredHref) return preferredHref;
    return STATE.launchHrefByProvider.datahub || STATE.launchHrefByProvider.binder || null;
  }

  function normalizeLaunchDropdownCandidates() {
    const seen = new Set();
    const result = [];
    for (const selector of SELECTORS.launchDropdownCandidates) {
      document.querySelectorAll(selector).forEach((node) => {
        if (!(node instanceof HTMLElement)) return;
        if (seen.has(node)) return;
        seen.add(node);
        result.push(node);
      });
    }
    return result;
  }

  function hideDefaultLaunchUi() {
    for (const el of normalizeLaunchDropdownCandidates()) {
      const dropdownContainer =
        el.closest(".menu-dropdown") ||
        el.closest(".dropdown") ||
        el.closest(".navbar-btn") ||
        el.closest(".header-article-item") ||
        el;
      if (dropdownContainer instanceof HTMLElement) {
        dropdownContainer.classList.add("ii-hidden-launch-ui");
      }
    }
  }

  function findThebeLaunchButton() {
    for (const selector of SELECTORS.thebeLaunchCandidates) {
      const btn = document.querySelector(selector);
      if (btn instanceof HTMLElement) return btn;
    }
    // Last resort: text-based lookup, because theme markup differs by version.
    const candidates = document.querySelectorAll("button, a");
    for (const node of candidates) {
      if (!(node instanceof HTMLElement)) continue;
      const txt = (node.textContent || "").trim().toLowerCase();
      if (txt === "live code" || txt === "activate live code") return node;
    }
    return null;
  }

  function triggerLiveCode() {
    const launch = findThebeLaunchButton();
    if (!(launch instanceof HTMLElement)) return false;
    launch.click();
    return true;
  }

  function autoStartLiveCodeIfEnabled() {
    if (STATE.settings.liveCodeMode !== "auto") return;
    if (window.__iiThebeAutoBootDone) return;

    let attempts = 0;
    const maxAttempts = 20;
    const stepMs = 400;

    const tryStart = () => {
      attempts += 1;
      const started = triggerLiveCode();
      if (started) {
        window.__iiThebeAutoBootDone = true;
        return;
      }
      if (attempts < maxAttempts) {
        window.setTimeout(tryStart, stepMs);
      }
    };

    window.setTimeout(tryStart, 250);
  }

  function createControlBar() {
    const root = document.createElement("div");
    root.className = "ii-user-controls";

    const launchBtn = document.createElement("button");
    launchBtn.type = "button";
    launchBtn.className = "ii-btn ii-btn-primary ii-btn-launch-icon";
    launchBtn.setAttribute("aria-label", "Launch Jupyter Notebook");
    launchBtn.title = "Launch Jupyter Notebook";
    launchBtn.textContent = "📓";

    const liveBtn = document.createElement("button");
    liveBtn.type = "button";
    liveBtn.className = "ii-btn ii-btn-secondary ii-btn-live-icon";
    liveBtn.setAttribute("aria-label", "Starte Live Code auf dieser Seite");
    liveBtn.title = "Starte Live Code auf dieser Seite";
    liveBtn.textContent = "▶";

    const settingsBtn = document.createElement("button");
    settingsBtn.type = "button";
    settingsBtn.className = "ii-btn ii-btn-ghost ii-btn-gear";
    settingsBtn.setAttribute("aria-label", "Settings");
    settingsBtn.title = "Settings";
    settingsBtn.textContent = "⚙";

    const panel = document.createElement("div");
    panel.className = "ii-settings-panel";
    panel.setAttribute("aria-hidden", "true");

    panel.innerHTML = `
      <div class="ii-settings-title">Einstellungen</div>
      <label class="ii-settings-row">
        <span>JupyterHub</span>
        <select id="ii-launch-provider">
          <option value="datahub">Datahub HM</option>
          <option value="binder">Binder</option>
        </select>
      </label>
      <label class="ii-settings-row">
        <span>Live Code aktivieren</span>
        <select id="ii-live-mode">
          <option value="manual">Manuell (Klick auf Live Code)</option>
          <option value="auto">Automatisch</option>
        </select>
      </label>
      <p class="ii-settings-note">Einstellungen werden im Browser gespeichert.</p>
    `;

    root.appendChild(launchBtn);
    root.appendChild(liveBtn);
    root.appendChild(settingsBtn);
    root.appendChild(panel);

    const launchProviderSelect = panel.querySelector("#ii-launch-provider");
    const liveModeSelect = panel.querySelector("#ii-live-mode");

    if (launchProviderSelect instanceof HTMLSelectElement) {
      launchProviderSelect.value = STATE.settings.launchProvider;
      launchProviderSelect.addEventListener("change", () => {
        STATE.settings = {
          ...STATE.settings,
          launchProvider: launchProviderSelect.value === "binder" ? "binder" : "datahub",
        };
        writeSettings(STATE.settings);
        refreshUiState(root);
      });
    }

    if (liveModeSelect instanceof HTMLSelectElement) {
      liveModeSelect.value = STATE.settings.liveCodeMode;
      liveModeSelect.addEventListener("change", () => {
        STATE.settings = {
          ...STATE.settings,
          liveCodeMode: liveModeSelect.value === "auto" ? "auto" : "manual",
        };
        writeSettings(STATE.settings);
        refreshUiState(root);
        autoStartLiveCodeIfEnabled();
      });
    }

    settingsBtn.addEventListener("click", () => {
      const open = root.classList.toggle("ii-settings-open");
      panel.setAttribute("aria-hidden", open ? "false" : "true");
    });

    launchBtn.addEventListener("click", () => {
      refreshLaunchTargets();
      const href = getPreferredLaunchHref();
      if (!href) return;
      window.location.assign(href);
    });

    liveBtn.addEventListener("click", () => {
      triggerLiveCode();
    });

    document.body.appendChild(root);
    refreshUiState(root);
  }

  function refreshUiState(root) {
    const launchBtn = root.querySelector(".ii-btn-launch-icon");
    const liveBtn = root.querySelector(".ii-btn-live-icon");

    if (launchBtn instanceof HTMLButtonElement) {
      refreshLaunchTargets();
      const hasTarget = !!getPreferredLaunchHref();
      launchBtn.style.display = hasTarget ? "" : "none";
      launchBtn.disabled = !hasTarget;
      launchBtn.title = hasTarget ? "Launch Jupyter Notebook" : "Kein Launch-Link auf dieser Seite gefunden";
    }

    if (liveBtn instanceof HTMLButtonElement) {
      const manual = STATE.settings.liveCodeMode === "manual";
      const hasLiveCode = !!findThebeLaunchButton();
      liveBtn.style.display = manual && hasLiveCode ? "" : "none";
      liveBtn.disabled = !hasLiveCode;
      liveBtn.title = hasLiveCode ? "Starte Live Code auf dieser Seite" : "Kein Live Code auf dieser Seite";
    }
  }

  function observeDomChanges(root) {
    const obs = new MutationObserver(() => {
      hideDefaultLaunchUi();
      refreshUiState(root);
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }

  function init() {
    if (window.__iiUserSettingsLoaded) return;
    window.__iiUserSettingsLoaded = true;

    STATE.settings = readSettings();
    hideDefaultLaunchUi();
    createControlBar();
    const root = document.querySelector(".ii-user-controls");
    if (root instanceof HTMLElement) {
      observeDomChanges(root);
    }
    autoStartLiveCodeIfEnabled();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

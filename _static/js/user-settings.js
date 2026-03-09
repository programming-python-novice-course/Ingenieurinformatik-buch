(() => {
  const STORAGE_KEY = "ii-user-settings-v1";
  const DEFAULT_SETTINGS = {
    launchProvider: "datahub", // "binder" | "datahub"
    liveCodeProvider: "binder", // "binder" | "nfdi"
    liveCodeMode: "manual", // "manual" | "auto"
  };

  // Central registry for Live Code backends (BinderHub-compatible).
  // Keep this as the single source of truth so adding more providers stays local to this file.
  const LIVE_CODE_PROVIDERS = {
    binder: {
      id: "binder",
      label: "Binder",
      binderUrl: "https://mybinder.org",
    },
    nfdi: {
      id: "nfdi",
      label: "NFDI",
      // Important: this is the BinderHub base path used for background builds/launches:
      // https://hub.nfdi-jupyter.de/services/binder/build/<provider>/<spec>
      binderUrl: "https://hub.nfdi-jupyter.de/services/binder",
    },
  };

  const NFDI_DEBUG = {
    enabled: false,
    step: {
      eventSourceOpened: false,
      eventSourceErrored: false,
      sawBuilding: false,
      sawBuilt: false,
      sawLaunching: false,
      sawReady: false,
      sawFailed: false,
      sawPossibleServerUrl: false,
    },
    sse: {
      // Ring buffer of recent raw SSE messages to make post-mortem analysis easy.
      max: 50,
      items: [],
      launchRetryCount: 0,
      lastPhase: null,
      lastReadyPayload: null,
      lastFailedPayload: null,
    },
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
      '[onclick*="initThebeSBT"]',
      '[data-bs-toggle="button"][id*="thebe"]',
      'button[title*="Live Code"]',
      'button[aria-label*="Live Code"]',
    ],
    executableCellCandidates: [
      ".cell.tag_thebe",
      ".cell.thebe",
      ".cell[data-executable='true']",
      ".thebe-source",
      ".thebe-input",
      ".thebe",
      ".thebelab-cell",
      '[data-executable="true"]',
      ".jp-Cell",
    ],
    bootstrappedLiveCodeCandidates: [
      ".thebelab-cell",
      ".cell .CodeMirror",
      ".jp-InputArea .CodeMirror",
      ".jp-OutputArea",
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

  function logNfdiDebug(message, ...args) {
    // Keep logs recognizable and filterable in the console.
    // Only enabled when the user selects the NFDI provider.
    if (!NFDI_DEBUG.enabled) return;
    try {
      console.log(`[ii-nfdi-debug] ${message}`, ...args);
    } catch {
      // Never throw because of logging.
    }
  }

  function rememberNfdiSseEvent(entry) {
    try {
      const buf = NFDI_DEBUG.sse.items;
      buf.push(entry);
      if (buf.length > NFDI_DEBUG.sse.max) buf.splice(0, buf.length - NFDI_DEBUG.sse.max);
    } catch {
      // ignore
    }
  }

  function readSettings() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_SETTINGS };
      const parsed = safeParse(raw, {});
      return {
        launchProvider: parsed.launchProvider === "binder" ? "binder" : DEFAULT_SETTINGS.launchProvider,
        liveCodeProvider: parsed.liveCodeProvider === "nfdi" ? "nfdi" : DEFAULT_SETTINGS.liveCodeProvider,
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
      const candidates = document.querySelectorAll(selector);
      for (const btn of candidates) {
        if (!(btn instanceof HTMLElement)) continue;
        // Never return our own control buttons.
        if (btn.closest(".ii-user-controls")) continue;
        return btn;
      }
    }
    // Last resort: text-based lookup, because theme markup differs by version.
    const candidates = document.querySelectorAll("button, a");
    for (const node of candidates) {
      if (!(node instanceof HTMLElement)) continue;
      if (node.closest(".ii-user-controls")) continue;
      const txt = (node.textContent || "").trim().toLowerCase().replace(/\s+/g, " ");
      if (txt.includes("live code") || txt.includes("live-code") || txt.includes("activate live code")) return node;
    }
    return null;
  }

  function triggerThebeViaApi() {
    try {
      if (typeof window.initThebeSBT === "function") {
        window.initThebeSBT();
        return true;
      }
    } catch {
      // Fallback to button click below.
    }
    return false;
  }

  function hasExecutableCodeCells() {
    for (const selector of SELECTORS.executableCellCandidates) {
      if (document.querySelector(selector)) return true;
    }
    return false;
  }

  function normalizeBaseUrl(url) {
    return (url || "").replace(/\/+$/, "");
  }

  function normalizeHttpUrlMaybe(url) {
    if (!url || typeof url !== "string") return null;
    const trimmed = url.trim();
    if (!trimmed) return null;
    try {
      const u = new URL(trimmed, window.location.href);
      if (u.protocol !== "http:" && u.protocol !== "https:") return null;
      return u.toString();
    } catch {
      return null;
    }
  }

  function getSelectedLiveCodeProvider() {
    const id = STATE.settings?.liveCodeProvider;
    return LIVE_CODE_PROVIDERS[id] || LIVE_CODE_PROVIDERS.binder;
  }

  function classifyUrlForJupyterTraffic(urlString) {
    try {
      const u = new URL(urlString, window.location.href);
      const p = u.pathname || "";
      // Typical post-launch traffic patterns (Jupyter Server / JupyterLab).
      if (p.includes("/api/sessions")) return "api/sessions";
      if (p.includes("/api/kernels")) return "api/kernels";
      if (p.includes("/api/contents")) return "api/contents";
      if (p.includes("/api/status")) return "api/status";
      if (p.includes("/channels")) return "ws/channels";
      if (p.includes("/user/")) return "user/*";
      return null;
    } catch {
      return null;
    }
  }

  function summarizeBinderSsePayload(dataText) {
    const s = (dataText || "").trim();
    if (!s) return { kind: "empty" };
    const json = safeParse(s, null);
    if (!json || typeof json !== "object") return { kind: "text", text: s.slice(0, 300) };

    const phase = typeof json.phase === "string" ? json.phase : null;
    const message = typeof json.message === "string" ? json.message : null;
    const url = normalizeHttpUrlMaybe(json.url) || normalizeHttpUrlMaybe(json.serverUrl) || normalizeHttpUrlMaybe(json.origin);
    const imageName = typeof json.imageName === "string" ? json.imageName : null;
    return { kind: "json", phase, message, url, imageName, raw: json };
  }

  function enableNfdiDebugLoggingIfNeeded() {
    if (NFDI_DEBUG.enabled) return;
    // Allow forcing debug even if settings aren't persisted (privacy modes).
    const force =
      (() => {
        try {
          const q = new URLSearchParams(window.location.search);
          if (q.get("ii-nfdi-debug") === "1") return true;
        } catch {
          // ignore
        }
        try {
          return window.localStorage.getItem("ii-nfdi-debug") === "1";
        } catch {
          return false;
        }
      })() || false;

    if (STATE.settings?.liveCodeProvider !== "nfdi" && !force) return;

    NFDI_DEBUG.enabled = true;
    // Use a direct console call so we still see this even if logNfdiDebug is misconfigured.
    try {
      console.warn("[ii-nfdi-debug] enabled", {
        provider: STATE.settings?.liveCodeProvider,
        forced: force,
      });
      window.__iiNfdiDebug = NFDI_DEBUG;
    } catch {
      // ignore
    }

    function isNfdiBuildUrl(urlStr) {
      const s = String(urlStr || "");
      return s.includes("hub.nfdi-jupyter.de") && s.includes("/services/binder/") && s.includes("/build/");
    }

    function attachEventSourceLogging(es) {
      if (!es || es.__iiNfdiLogged) return;
      let esUrl = null;
      try {
        // EventSource.url is standard; some browsers may not expose it.
        esUrl = es.url || null;
      } catch {
        // ignore
      }
      if (!esUrl || !isNfdiBuildUrl(esUrl)) return;

      es.__iiNfdiLogged = true;
      logNfdiDebug("EventSource detected", { url: esUrl });

      const logSseEvent = (ev) => {
        const dataText = typeof ev.data === "string" ? ev.data : String(ev.data ?? "");
        const summary = summarizeBinderSsePayload(dataText);

        if (summary.kind === "json") {
          if (summary.phase) {
            NFDI_DEBUG.sse.lastPhase = summary.phase;
          }
          if (summary.phase === "building") NFDI_DEBUG.step.sawBuilding = true;
          if (summary.phase === "built") NFDI_DEBUG.step.sawBuilt = true;
          if (summary.phase === "launching") NFDI_DEBUG.step.sawLaunching = true;
          if (summary.phase === "ready") {
            NFDI_DEBUG.step.sawReady = true;
            NFDI_DEBUG.sse.lastReadyPayload = summary.raw;
          }
          if (summary.phase === "failed") {
            NFDI_DEBUG.step.sawFailed = true;
            NFDI_DEBUG.sse.lastFailedPayload = summary.raw;
          }
          if (summary.url) NFDI_DEBUG.step.sawPossibleServerUrl = true;
        }

        // Detect explicit retry messages during launching.
        try {
          const msgText = summary.kind === "json" && typeof summary.message === "string" ? summary.message : null;
          if (msgText && /launch attempt\s+\d+\s+failed/i.test(msgText)) {
            NFDI_DEBUG.sse.launchRetryCount += 1;
            console.error("[ii-nfdi-debug] binder launch retry detected", {
              url: esUrl,
              message: msgText.trim(),
              launchRetryCount: NFDI_DEBUG.sse.launchRetryCount,
              hint: "BinderHub could not start the user server yet (not a client-side parsing issue).",
            });
          }
        } catch {
          // ignore
        }

        rememberNfdiSseEvent({
          t: Date.now(),
          esUrl,
          type: ev.type,
          lastEventId: ev.lastEventId || null,
          origin: ev.origin || null,
          data: dataText,
          parsed: summary.kind === "json" ? { phase: summary.phase, message: summary.message, url: summary.url } : { kind: summary.kind },
        });

        logNfdiDebug("SSE event", {
          url: esUrl,
          type: ev.type,
          lastEventId: ev.lastEventId || null,
          origin: ev.origin || null,
          data: dataText,
          parsed: summary,
          step: { ...NFDI_DEBUG.step },
        });
      };

      es.addEventListener("open", () => {
        NFDI_DEBUG.step.eventSourceOpened = true;
        logNfdiDebug("EventSource open", { url: esUrl, readyState: es.readyState });
      });
      es.addEventListener("error", () => {
        NFDI_DEBUG.step.eventSourceErrored = true;
        logNfdiDebug("EventSource error", { url: esUrl, readyState: es.readyState });
      });

      // Log explicit close calls (Thebe closes on ready/failed).
      try {
        if (!es.__iiNfdiCloseWrapped && typeof es.close === "function") {
          es.__iiNfdiCloseWrapped = true;
          const nativeClose = es.close.bind(es);
          es.close = function () {
            logNfdiDebug("EventSource close() called", { url: esUrl, readyState: es.readyState, step: { ...NFDI_DEBUG.step } });
            return nativeClose();
          };
        }
      } catch {
        // ignore
      }

      // Log both generic and named events to detect format differences.
      ["message", "building", "built", "launching", "ready", "failed"].forEach((t) => {
        es.addEventListener(t, logSseEvent);
      });

      // Watchdog: if we see launching but no ready, surface a clear error.
      try {
        if (!NFDI_DEBUG.__watchdogStarted) {
          NFDI_DEBUG.__watchdogStarted = true;
          window.setTimeout(() => {
            if (!NFDI_DEBUG.enabled) return;
            if (NFDI_DEBUG.step.sawLaunching && !NFDI_DEBUG.step.sawReady && !NFDI_DEBUG.step.sawFailed) {
              console.error("[ii-nfdi-debug] timeout: launching without ready", {
                url: esUrl,
                step: { ...NFDI_DEBUG.step },
                lastPhase: NFDI_DEBUG.sse.lastPhase,
                launchRetryCount: NFDI_DEBUG.sse.launchRetryCount,
                lastEvents: [...NFDI_DEBUG.sse.items].slice(-10),
                hint: "BinderHub is not emitting (or not reaching) a `ready` event with `url`+`token`. This points to server spawn issues rather than client parsing.",
              });
            }
          }, 60000);
        }
      } catch {
        // ignore
      }
    }

    // --- Instrument EventSource robustly (prototype hook; works even if window.EventSource is non-writable) ---
    if (!window.__iiNfdiEventSourceProtoWrapped && typeof window.EventSource === "function") {
      window.__iiNfdiEventSourceProtoWrapped = true;

      const proto = window.EventSource.prototype;
      const onmessageDesc = Object.getOwnPropertyDescriptor(proto, "onmessage");
      const onerrorDesc = Object.getOwnPropertyDescriptor(proto, "onerror");

      if (onmessageDesc && typeof onmessageDesc.set === "function" && typeof onmessageDesc.get === "function") {
        Object.defineProperty(proto, "onmessage", {
          get: function () {
            return onmessageDesc.get.call(this);
          },
          set: function (handler) {
            try {
              attachEventSourceLogging(this);
            } catch {
              // ignore
            }
            const wrapped =
              typeof handler === "function"
                ? (ev) => {
                    try {
                      attachEventSourceLogging(this);
                    } catch {
                      // ignore
                    }
                    return handler.call(this, ev);
                  }
                : handler;
            return onmessageDesc.set.call(this, wrapped);
          },
          configurable: true,
          enumerable: onmessageDesc.enumerable,
        });
      }

      if (onerrorDesc && typeof onerrorDesc.set === "function" && typeof onerrorDesc.get === "function") {
        Object.defineProperty(proto, "onerror", {
          get: function () {
            return onerrorDesc.get.call(this);
          },
          set: function (handler) {
            try {
              attachEventSourceLogging(this);
            } catch {
              // ignore
            }
            const wrapped =
              typeof handler === "function"
                ? (ev) => {
                    try {
                      attachEventSourceLogging(this);
                    } catch {
                      // ignore
                    }
                    logNfdiDebug("EventSource onerror (assigned handler)", { readyState: this.readyState });
                    return handler.call(this, ev);
                  }
                : handler;
            return onerrorDesc.set.call(this, wrapped);
          },
          configurable: true,
          enumerable: onerrorDesc.enumerable,
        });
      }

      // If a browser exposes EventSource constructor as writable, keep the extra "created" log.
      try {
        if (!window.__iiNfdiEventSourceCtorWrapped) {
          const desc = Object.getOwnPropertyDescriptor(window, "EventSource");
          if (!desc || desc.writable) {
            window.__iiNfdiEventSourceCtorWrapped = true;
            const NativeEventSource = window.EventSource;
            window.EventSource = function (...args) {
              const es = new NativeEventSource(...args);
              try {
                const urlStr = String(args?.[0] || "");
                if (isNfdiBuildUrl(urlStr)) logNfdiDebug("EventSource created", { url: urlStr });
              } catch {
                // ignore
              }
              try {
                attachEventSourceLogging(es);
              } catch {
                // ignore
              }
              return es;
            };
          }
        }
      } catch {
        // ignore
      }
    }

    // --- Instrument fetch ---
    if (!window.__iiNfdiFetchWrapped && typeof window.fetch === "function") {
      window.__iiNfdiFetchWrapped = true;
      const nativeFetch = window.fetch.bind(window);
      window.fetch = async (input, init) => {
        const url = typeof input === "string" ? input : input?.url;
        const urlStr = url ? String(url) : "";
        const klass = classifyUrlForJupyterTraffic(urlStr);
        if (klass) {
          logNfdiDebug("fetch ->", { url: urlStr, klass, method: init?.method || "GET" });
        }
        try {
          const res = await nativeFetch(input, init);
          if (klass) {
            logNfdiDebug("fetch <-", { url: urlStr, klass, status: res.status, ok: res.ok });
          }
          return res;
        } catch (err) {
          if (klass) {
            logNfdiDebug("fetch !! error", { url: urlStr, klass, error: String(err) });
          }
          throw err;
        }
      };
    }

    // --- Instrument XMLHttpRequest (some Jupyter clients still use XHR) ---
    if (!window.__iiNfdiXhrWrapped && typeof window.XMLHttpRequest === "function") {
      window.__iiNfdiXhrWrapped = true;
      const NativeXHR = window.XMLHttpRequest;
      window.XMLHttpRequest = function () {
        const xhr = new NativeXHR();
        let trackedUrl = null;
        let trackedMethod = null;

        const nativeOpen = xhr.open;
        xhr.open = function (method, url, ...rest) {
          trackedMethod = method;
          trackedUrl = typeof url === "string" ? url : String(url);
          const klass = classifyUrlForJupyterTraffic(trackedUrl);
          if (klass) {
            logNfdiDebug("xhr open ->", { url: trackedUrl, klass, method: trackedMethod });
          }
          return nativeOpen.call(xhr, method, url, ...rest);
        };

        xhr.addEventListener("loadend", () => {
          const klass = trackedUrl ? classifyUrlForJupyterTraffic(trackedUrl) : null;
          if (klass) {
            logNfdiDebug("xhr loadend <-", { url: trackedUrl, klass, status: xhr.status });
          }
        });

        xhr.addEventListener("error", () => {
          const klass = trackedUrl ? classifyUrlForJupyterTraffic(trackedUrl) : null;
          if (klass) {
            logNfdiDebug("xhr error !!", { url: trackedUrl, klass, status: xhr.status });
          }
        });

        return xhr;
      };
    }

    // --- Instrument WebSocket (kernel channels) ---
    if (!window.__iiNfdiWebSocketWrapped && typeof window.WebSocket === "function") {
      window.__iiNfdiWebSocketWrapped = true;
      const NativeWS = window.WebSocket;
      window.WebSocket = function (url, protocols) {
        const urlStr = typeof url === "string" ? url : String(url);
        const klass = classifyUrlForJupyterTraffic(urlStr);
        if (klass) {
          logNfdiDebug("ws new ->", { url: urlStr, klass, protocols: protocols || null });
        }
        const ws = protocols ? new NativeWS(url, protocols) : new NativeWS(url);
        if (!klass) return ws;

        ws.addEventListener("open", () => logNfdiDebug("ws open <-", { url: urlStr, klass }));
        ws.addEventListener("close", (ev) =>
          logNfdiDebug("ws close <-", { url: urlStr, klass, code: ev.code, reason: ev.reason })
        );
        ws.addEventListener("error", () => logNfdiDebug("ws error !!", { url: urlStr, klass }));
        // Messages can be very noisy; still log type/size.
        ws.addEventListener("message", (ev) => {
          const size = typeof ev.data === "string" ? ev.data.length : ev.data?.byteLength;
          logNfdiDebug("ws message", { url: urlStr, klass, dataType: typeof ev.data, size: size ?? null });
        });

        return ws;
      };
    }

    // Surface config state to debug mismatches without digging into minified libs.
    try {
      logNfdiDebug("thebe_config snapshot", window.thebe_config);
      const scripts = [...document.querySelectorAll('script[type="text/x-thebe-config"]')].map((s) => (s.textContent || "").trim());
      logNfdiDebug("raw thebe config scripts", { count: scripts.length, scripts: scripts.slice(0, 3) });
    } catch {
      // ignore
    }
  }

  function patchThebeConfigScriptText(scriptText, binderUrl) {
    const base = normalizeBaseUrl(binderUrl);
    if (!base) return scriptText;

    const binderBlockRe =
      /((?:^|\r?\n)(?<indent>[ \t]*)binderOptions:\s*\{\r?\n)(?<body>[\s\S]*?)(\r?\n(?<indent2>[ \t]*)\},)/m;
    const match = binderBlockRe.exec(scriptText);
    if (!match || !match.groups) return scriptText;

    const indent = match.groups.indent || "";
    const entryIndent = `${indent}    `;
    const body = match.groups.body || "";

    const kept = [];
    for (const line of body.split(/\r?\n/)) {
      const stripped = line.trim();
      if (stripped.startsWith("binderUrl:")) continue;
      kept.push(line);
    }
    const newBody = [`${entryIndent}binderUrl: "${base}",`, ...kept].join("\n");

    const start = match.index + match[1].length;
    const end = start + body.length;
    return scriptText.slice(0, start) + newBody + scriptText.slice(end);
  }

  function applyLiveCodeProviderConfig() {
    const provider = getSelectedLiveCodeProvider();
    const binderUrl = normalizeBaseUrl(provider.binderUrl);
    if (!binderUrl) return;

    enableNfdiDebugLoggingIfNeeded();
    logNfdiDebug("Applying live code provider config", { binderUrl, providerId: provider.id });

    // 1) Patch already-parsed config (preferred when available).
    try {
      const cfg = window.thebe_config;
      if (cfg && typeof cfg === "object") {
        if (!cfg.binderOptions || typeof cfg.binderOptions !== "object") {
          cfg.binderOptions = {};
        }
        cfg.binderOptions.binderUrl = binderUrl;
      }
    } catch {
      // Fail-safe: do not break the page.
    }

    // 2) Patch raw config block so future initializations pick up the selected provider too.
    document.querySelectorAll('script[type="text/x-thebe-config"]').forEach((node) => {
      if (!(node instanceof HTMLScriptElement)) return;
      const original = node.textContent || "";
      const patched = patchThebeConfigScriptText(original, binderUrl);
      if (patched !== original) node.textContent = patched;
    });
  }

  function isLiveCodeBootstrapped() {
    for (const selector of SELECTORS.bootstrappedLiveCodeCandidates) {
      if (document.querySelector(selector)) return true;
    }
    return false;
  }

  function triggerLiveCode() {
    applyLiveCodeProviderConfig();
    // Try API first, but do not treat invocation itself as success.
    triggerThebeViaApi();
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
      if (isLiveCodeBootstrapped()) {
        window.__iiThebeAutoBootDone = true;
        return;
      }

      // Avoid bootstrapping on pages without notebook launch targets.
      refreshLaunchTargets();
      const hasLaunchTarget = !!getPreferredLaunchHref();

      attempts += 1;
      if (!hasLaunchTarget) {
        if (attempts < maxAttempts) {
          window.setTimeout(tryStart, stepMs);
        }
        return;
      }

      const started = triggerLiveCode();
      if (started || isLiveCodeBootstrapped()) {
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
        <span>Jupyter-Notebook Ausführungsumgebung</span>
        <select id="ii-launch-provider">
          <option value="datahub">Datahub HM</option>
          <option value="binder">Binder</option>
        </select>
      </label>
      <label class="ii-settings-row">
        <span>Live Code Provider</span>
        <select id="ii-live-provider">
          <option value="binder">Binder</option>
          <option value="nfdi">NFDI</option>
        </select>
      </label>
      <label class="ii-settings-row">
        <span>Live Code Aktivierung</span>
        <select id="ii-live-mode">
          <option value="manual">Manuell (Klick auf Live Code)</option>
          <option value="auto">Automatisch (experimentelle Test-Version)</option>
        </select>
      </label>
      <p class="ii-settings-note">Einstellungen werden im Browser gespeichert.</p>
    `;

    root.appendChild(launchBtn);
    root.appendChild(liveBtn);
    root.appendChild(settingsBtn);
    root.appendChild(panel);

    const launchProviderSelect = panel.querySelector("#ii-launch-provider");
    const liveProviderSelect = panel.querySelector("#ii-live-provider");
    const liveModeSelect = panel.querySelector("#ii-live-mode");

    if (launchProviderSelect instanceof HTMLSelectElement) {
      launchProviderSelect.value = STATE.settings.launchProvider;
      launchProviderSelect.addEventListener("change", () => {
        const nextProvider = launchProviderSelect.value === "binder" ? "binder" : "datahub";
        STATE.settings = {
          ...STATE.settings,
          launchProvider: nextProvider,
        };
        writeSettings(STATE.settings);
        // Hub selection must not interrupt a running Live Code session.
        refreshUiState(root);
        // Run delayed refreshes because launch links can be rewritten asynchronously.
        window.setTimeout(() => refreshUiState(root), 50);
        window.setTimeout(() => refreshUiState(root), 250);
      });
    }

    if (liveProviderSelect instanceof HTMLSelectElement) {
      liveProviderSelect.value = STATE.settings.liveCodeProvider;
      liveProviderSelect.addEventListener("change", () => {
        const nextProvider = liveProviderSelect.value === "nfdi" ? "nfdi" : "binder";
        STATE.settings = {
          ...STATE.settings,
          liveCodeProvider: nextProvider,
        };
        writeSettings(STATE.settings);
        applyLiveCodeProviderConfig();
        // Do not interrupt running sessions; selection applies to the next Live Code start.
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
        applyLiveCodeProviderConfig();
        refreshUiState(root);
        autoStartLiveCodeIfEnabled();
      });
    }

    settingsBtn.addEventListener("click", () => {
      const open = root.classList.toggle("ii-settings-open");
      panel.setAttribute("aria-hidden", open ? "false" : "true");
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!root.classList.contains("ii-settings-open")) return;
      if (root.contains(target)) return;
      root.classList.remove("ii-settings-open");
      panel.setAttribute("aria-hidden", "true");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      if (!root.classList.contains("ii-settings-open")) return;
      root.classList.remove("ii-settings-open");
      panel.setAttribute("aria-hidden", "true");
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
    refreshLaunchTargets();
    const hasLaunchTarget = !!getPreferredLaunchHref();

    if (launchBtn instanceof HTMLButtonElement) {
      launchBtn.style.display = "";
      launchBtn.disabled = !hasLaunchTarget;
      launchBtn.title = hasLaunchTarget ? "Launch Jupyter Notebook" : "Kein Launch-Link auf dieser Seite gefunden";
    }

    if (liveBtn instanceof HTMLButtonElement) {
      const manual = STATE.settings.liveCodeMode === "manual";
      const hasExecutableCells = hasExecutableCodeCells();
      const enabled = manual && hasLaunchTarget;
      liveBtn.style.display = "";
      liveBtn.disabled = !enabled;
      const showAutoBadge = !manual && hasExecutableCells;
      liveBtn.textContent = showAutoBadge ? "A" : "▶";
      liveBtn.setAttribute(
        "aria-label",
        showAutoBadge ? "Live Code wird auf dieser Seite automatisch aktiviert" : "Starte Live Code auf dieser Seite"
      );
      if (enabled) {
        liveBtn.title = "Starte Live Code auf dieser Seite";
      } else if (showAutoBadge) {
        liveBtn.title = "Live Code wird automatisch aktiviert";
      } else if (!manual) {
        liveBtn.title = "Live Code wird automatisch gestartet";
      } else {
        liveBtn.title = "Kein Live Code auf dieser Seite";
      }
    }
  }

  function observeDomChanges(root) {
    let refreshScheduled = false;

    function shouldHandleMutations(mutations) {
      for (const mutation of mutations) {
        const target = mutation.target;
        const targetIsInsideControls = target instanceof Node && root.contains(target);

        if (mutation.type === "attributes") {
          // React to async link rewrites (e.g. href mutations) so buttons don't stay disabled.
          if (!targetIsInsideControls) return true;
          continue;
        }

        if (mutation.type === "childList") {
          const changedNodes = [...mutation.addedNodes, ...mutation.removedNodes];
          if (changedNodes.length === 0) {
            if (!targetIsInsideControls) return true;
            continue;
          }

          for (const node of changedNodes) {
            if (!(node instanceof Node)) return true;
            if (!root.contains(node)) return true;
          }
          continue;
        }

        if (!targetIsInsideControls) return true;
      }
      return false;
    }

    function scheduleRefresh() {
      if (refreshScheduled) return;
      refreshScheduled = true;
      window.requestAnimationFrame(() => {
        refreshScheduled = false;
        hideDefaultLaunchUi();
        refreshUiState(root);
      });
    }

    const obs = new MutationObserver((mutations) => {
      if (!shouldHandleMutations(mutations)) return;
      scheduleRefresh();
    });
    obs.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href"],
    });
  }

  function init() {
    if (window.__iiUserSettingsLoaded) return;
    window.__iiUserSettingsLoaded = true;

    STATE.settings = readSettings();
    enableNfdiDebugLoggingIfNeeded();
    applyLiveCodeProviderConfig();
    hideDefaultLaunchUi();
    createControlBar();
    const root = document.querySelector(".ii-user-controls");
    if (root instanceof HTMLElement) {
      observeDomChanges(root);
      // Also refresh shortly after load because some themes rewrite launch hrefs without
      // changing the DOM tree (only attributes).
      window.setTimeout(() => refreshUiState(root), 150);
      window.setTimeout(() => refreshUiState(root), 600);
    }
    autoStartLiveCodeIfEnabled();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

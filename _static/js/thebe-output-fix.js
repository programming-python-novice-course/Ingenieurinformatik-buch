(() => {
  // Guard in case the script is included multiple times.
  if (window.__iiThebeOutputFixLoaded) return;
  window.__iiThebeOutputFixLoaded = true;

  function isDarkMode() {
    const root = document.documentElement;
    return root?.dataset?.theme === "dark" || root?.dataset?.mode === "dark";
  }

  /** @param {HTMLElement} el */
  function forceDarkOutputStyles(el) {
    if (!(el instanceof HTMLElement)) return;
    if (!isDarkMode()) return;

    // Containers
    if (el.matches(".jp-OutputArea-output, .jp-RenderedText.jp-OutputArea-output")) {
      el.style.setProperty("color", "#f8f8f2", "important");
    }

    // Printed stdout/stderr content
    if (el.matches(".jp-OutputArea-output pre, .jp-RenderedText.jp-OutputArea-output > pre")) {
      el.style.setProperty("color", "#f8f8f2", "important");
      el.style.setProperty("background", "#272822", "important");
      el.style.setProperty("padding", "0.4rem 0.6rem", "important");
      el.style.setProperty("border-radius", "4px", "important");
      el.style.setProperty(
        "font-family",
        '"Fira Code","JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono",monospace',
        "important"
      );
      el.style.setProperty("opacity", "1", "important");
    }
  }

  function applyFixes() {
    if (!isDarkMode()) return;

    document
      .querySelectorAll(".jp-OutputArea-output, .jp-RenderedText.jp-OutputArea-output")
      .forEach((node) => forceDarkOutputStyles(/** @type {HTMLElement} */ (node)));

    document
      .querySelectorAll(
        [
          ".jp-RenderedText.jp-OutputArea-output[data-mime-type='application/vnd.jupyter.stdout'] > pre",
          ".jp-RenderedText.jp-OutputArea-output[data-mime-type='application/vnd.jupyter.stderr'] > pre",
          ".jp-OutputArea-output pre",
        ].join(",")
      )
      .forEach((node) => forceDarkOutputStyles(/** @type {HTMLElement} */ (node)));
  }

  function observeOutput() {
    const target = document.body;
    if (!target) return;

    const obs = new MutationObserver((mutations) => {
      if (!isDarkMode()) return;

      for (const m of mutations) {
        for (const n of m.addedNodes) {
          if (!(n instanceof HTMLElement)) continue;

          forceDarkOutputStyles(n);
          n.querySelectorAll?.(".jp-OutputArea-output, .jp-RenderedText.jp-OutputArea-output, pre").forEach((child) =>
            forceDarkOutputStyles(/** @type {HTMLElement} */ (child))
          );
        }
      }
    });

    obs.observe(target, { childList: true, subtree: true });

    // Re-apply when theme switches (data-theme / data-mode changes).
    const rootObs = new MutationObserver(() => applyFixes());
    rootObs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "data-mode"] });
  }

  function init() {
    applyFixes();
    observeOutput();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


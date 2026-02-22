(function () {
  "use strict";

  // ---- Configuration ----
  // Ignore swipes that start too close to the left/right edge to avoid collisions
  // with browser back/forward gestures (set to 0 to disable).
  var EDGE_GUARD_PX = 15;

  var MIN_SWIPE_X_PX = 70;
  var MAX_SWIPE_Y_PX = 50;
  var MAX_SWIPE_MS = 700;

  // ---- Helpers ----
  function asElement(node) {
    if (!node) return null;
    // Event targets can be Text nodes
    if (node.nodeType === 1) return node;
    return node.parentElement || null;
  }

  function isTypingContext(element) {
    var el = asElement(element);
    if (!el) return false;

    // Native form controls
    var tag = el.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;

    // Contenteditable
    if (el.isContentEditable) return true;

    // Thebe / CodeMirror / Jupyter-ish areas (and descendants)
    // Use closest() as required.
    try {
      return !!el.closest(
        "input, textarea, select, [contenteditable=''], [contenteditable='true'], " +
          ".thebe, .cell, .cm-editor, .CodeMirror, .jp-InputArea"
      );
    } catch (e) {
      // If closest() fails for any reason, be safe: treat as typing.
      return true;
    }
  }

  function isInteractiveTarget(element) {
    var el = asElement(element);
    if (!el) return false;

    // Ignore obvious interactive targets and anything inside them.
    try {
      if (el.closest("a, button, input, textarea, select")) return true;
      if (el.closest("[role='button'], [role='link']")) return true;
    } catch (e) {
      return true;
    }

    return false;
  }

  function getPrevNextHref(direction) {
    // Primary: footer prev/next links
    // prev: footer.prev-next-footer a.left-prev
    // next: footer.prev-next-footer a.right-next
    var selector =
      direction === "prev"
        ? "footer.prev-next-footer a.left-prev"
        : "footer.prev-next-footer a.right-next";

    var a = document.querySelector(selector);
    if (a) {
      var hrefA = a.getAttribute("href");
      if (hrefA) return hrefA;
    }

    // Fallback: head link[rel="prev|next"]
    var rel = direction === "prev" ? "prev" : "next";
    var linkEl = document.querySelector('link[rel="' + rel + '"]');
    if (linkEl) {
      var hrefL = linkEl.getAttribute("href");
      if (hrefL) return hrefL;
      if (linkEl.href) return linkEl.href;
    }

    return null;
  }

  function goPrevNext(direction) {
    var href = getPrevNextHref(direction);
    if (!href) return false;
    window.location.href = href;
    return true;
  }

  function effectiveTarget(e) {
    return asElement((e && e.target) || null) || document.activeElement || null;
  }

  // ---- Desktop: Alt + Arrow navigation ----
  function onKeyDown(e) {
    if (!e || e.defaultPrevented) return;

    // Only Alt+ArrowLeft / Alt+ArrowRight
    if (!e.altKey) return;
    if (e.ctrlKey || e.metaKey || e.shiftKey) return;

    var key = e.key;
    if (key !== "ArrowLeft" && key !== "ArrowRight") return;

    // Safety: never navigate while typing/editing or on interactive targets
    var target = effectiveTarget(e);
    if (isTypingContext(target)) return;
    if (isInteractiveTarget(target)) return;

    var dir = key === "ArrowLeft" ? "prev" : "next";

    // Only prevent default if we can actually navigate
    var ok = goPrevNext(dir);
    if (ok) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  // ---- Mobile: Swipe navigation ----
  var swipeState = {
    active: false,
    startX: 0,
    startY: 0,
    startT: 0,
    startedInMain: false,
    startedOnInteractive: false,
    startedInTyping: false,
  };

  function touchPointFromEvent(e) {
    if (!e) return null;
    if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0];
    if (e.touches && e.touches.length) return e.touches[0];
    return null;
  }

  function startedInMainContent(element) {
    var el = asElement(element);
    if (!el) return false;
    try {
      return !!el.closest("main.bd-main");
    } catch (e) {
      return false;
    }
  }

  function isEdgeGuarded(startClientX) {
    if (!EDGE_GUARD_PX || EDGE_GUARD_PX <= 0) return false;
    var w = window.innerWidth || 0;
    if (!w) return false;
    return startClientX <= EDGE_GUARD_PX || startClientX >= w - EDGE_GUARD_PX;
  }

  function onTouchStart(e) {
    var pt = touchPointFromEvent(e);
    if (!pt) return;

    // Only single-finger swipe
    if (e.touches && e.touches.length > 1) {
      swipeState.active = false;
      return;
    }

    var target = asElement(e.target);

    swipeState.active = true;
    swipeState.startX = pt.clientX;
    swipeState.startY = pt.clientY;
    swipeState.startT = Date.now();
    swipeState.startedInMain = startedInMainContent(target);
    swipeState.startedOnInteractive = isInteractiveTarget(target);
    swipeState.startedInTyping = isTypingContext(target);
  }

  function onTouchEnd(e) {
    if (!swipeState.active) return;
    swipeState.active = false;

    // Must start in main content
    if (!swipeState.startedInMain) return;

    // Must not start on interactive targets / typing contexts
    if (swipeState.startedOnInteractive) return;
    if (swipeState.startedInTyping) return;

    // Edge guard to avoid browser back/forward gestures
    if (isEdgeGuarded(swipeState.startX)) return;

    var pt = touchPointFromEvent(e);
    if (!pt) return;

    var dt = Date.now() - swipeState.startT;
    if (dt > MAX_SWIPE_MS) return;

    var dx = pt.clientX - swipeState.startX;
    var dy = pt.clientY - swipeState.startY;

    var adx = Math.abs(dx);
    var ady = Math.abs(dy);

    // Only clearly horizontal swipes
    if (adx < MIN_SWIPE_X_PX) return;
    if (ady > MAX_SWIPE_Y_PX) return;
    if (adx <= ady) return;

    if (dx > 0) {
      // Swipe right -> previous page
      goPrevNext("prev");
    } else {
      // Swipe left -> next page
      goPrevNext("next");
    }
  }

  // ---- Attach listeners ----
  // Keydown should not be passive; touch listeners should be passive to avoid scroll jank.
  document.addEventListener("keydown", onKeyDown, { capture: true });
  document.addEventListener("touchstart", onTouchStart, { passive: true, capture: true });
  document.addEventListener("touchend", onTouchEnd, { passive: true, capture: true });
})();

/**
 * Patches the Thebe config so GitLab repositories work with Binder.
 *
 * Thebe expects repoProvider: "git" (not repositoryProvider) to build the
 * correct /build/git/ENCODED_URL/ref URL. Without it, it uses /build/gh/.
 */
(function () {
  function rewriteBinderUrl(url) {
    try {
      var u = typeof url === "string" ? url : (url && url.url) || "";
      if (u.indexOf("mybinder.org") === -1) return null;
      var match = u.match(/(mybinder\.org)(\/build)?\/gh\/(https?:\/\/[^\s"']+\.git)\/([^/?#\s"']+)([?#][^"']*)?/);
      if (!match) return null;
      var host = match[1];
      var buildPart = match[2] || "";
      var repoUrl = match[3];
      var ref = match[4];
      var rest = match[5] || "";
      var encoded = encodeURIComponent(repoUrl);
      var idx = u.indexOf(host);
      var prefix = u.substring(0, idx + host.length);
      return prefix + buildPart + "/git/" + encoded + "/" + ref + rest;
    } catch (e) {
      return null;
    }
  }

  function installFetchInterceptor() {
    if (window._thebeGitlabFetchPatched) return;
    window._thebeGitlabFetchPatched = true;

    var origFetch = window.fetch;
    window.fetch = function (input, init) {
      var urlStr = typeof input === "string" ? input : (input && input.url ? input.url : (input instanceof Request ? input.url : ""));
      var fixed = rewriteBinderUrl(urlStr);
      if (fixed) {
        console.log("[thebe-gitlab-fix]: Rewriting Binder URL to git provider");
        if (typeof input === "string") return origFetch.call(this, fixed, init);
        if (typeof Request !== "undefined" && input instanceof Request) return origFetch.call(this, new Request(fixed, input));
      }
      return origFetch.apply(this, arguments);
    };

    var OrigXHR = window.XMLHttpRequest;
    if (OrigXHR) {
      window.XMLHttpRequest = function () {
        var xhr = new OrigXHR();
        var origOpen = xhr.open;
        xhr.open = function (method, url, async, user, password) {
          var fixed = rewriteBinderUrl(url);
          if (fixed) {
            console.log("[thebe-gitlab-fix]: Rewriting Binder XHR URL to git provider");
            url = fixed;
          }
          return origOpen.call(this, method, url, async !== false, user, password);
        };
        return xhr;
      };
    }
  }

  function patchThebeConfig() {
    var script = document.querySelector('script[type="text/x-thebe-config"]');
    if (!script || !script.textContent) return;
    var text = script.textContent.trim();
    if (text.indexOf("None/None") === -1 && text.indexOf('"None"') === -1) return;

    var GITLAB_REPO = "https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch.git";
    var DEFAULT_BRANCH = "master";
    var a = document.querySelector('a[href*="mybinder.org"][href*="/git/"]');
    var repoUrl = GITLAB_REPO;
    var ref = DEFAULT_BRANCH;
    if (a && a.href) {
      try {
        var m = a.href.match(/\/git\/(.+?)\/([^/?#]+)/);
        if (m) { repoUrl = decodeURIComponent(m[1]); ref = m[2]; }
      } catch (e) {}
    }

    var repoEscaped = repoUrl.replace(/\//g, "\\/");
    var fixed = text
      .replace(/"None\/None"/g, '"' + repoEscaped + '"')
      .replace(/repo:\s*"None\/None"/g, 'repo: "' + repoEscaped + '"');
    if (fixed.indexOf('repoProvider') === -1) {
      fixed = fixed.replace(/binderOptions:\s*\{/, 'binderOptions: { repoProvider: "git", ');
    }
    if (fixed !== text) {
      script.textContent = fixed;
      console.log("[thebe-gitlab-fix]: Patched Thebe config (repoProvider: git)");
    }
  }

  function run() {
    installFetchInterceptor();
    patchThebeConfig();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
  setTimeout(run, 100);
})();

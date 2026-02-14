/**
 * Patches the Thebe config so GitLab repositories work with Binder.
 *
 * Jupyter Book / sphinx-thebe only parse GitHub URLs and output repo: "None/None"
 * for GitLab. This script replaces that with the correct format for the git provider.
 *
 * BinderHub supports: /v2/git/ENCODED_URL/ref for arbitrary git repos.
 * We inject repositoryProvider: "git" and the full repo URL.
 */
(function () {
  var GITLAB_REPO = "https://gitlab.lrz.de/fk03ingenieurinformatik/Ingenieurinformatik-buch.git";
  var DEFAULT_BRANCH = "master";

  function extractFromBinderLink() {
    var a = document.querySelector('a[href*="mybinder.org"][href*="/git/"]');
    if (!a || !a.href) return null;
    try {
      var url = new URL(a.href);
      var match = url.pathname.match(/\/v2\/git\/(.+?)\/([^/]+)$/);
      if (match) {
        return {
          repoEncoded: decodeURIComponent(match[1]),
          ref: match[2]
        };
      }
    } catch (e) {}
    return null;
  }

  function patchThebeConfig() {
    var script = document.querySelector('script[type="text/x-thebe-config"]');
    if (!script || !script.textContent) return;

    var text = script.textContent.trim();
    if (text.indexOf("None/None") === -1 && text.indexOf('"None"') === -1) return;

    var binderInfo = extractFromBinderLink();
    var repoUrl = binderInfo ? binderInfo.repoEncoded : GITLAB_REPO;
    var ref = binderInfo ? binderInfo.ref : DEFAULT_BRANCH;

    var fixed = text
      .replace(/"None\/None"/g, '"' + repoUrl + '"')
      .replace(/repo:\s*"None\/None"/g, 'repo: "' + repoUrl + '"');

    if (fixed.indexOf('repositoryProvider') === -1) {
      fixed = fixed.replace(/binderOptions:\s*\{/, 'binderOptions: { repositoryProvider: "git", ');
    }

    if (fixed !== text) {
      script.textContent = fixed;
      console.log("[thebe-gitlab-fix]: Patched Thebe config for GitLab (repositoryProvider: git)");
    }
  }

  function run() {
    patchThebeConfig();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
  setTimeout(run, 100);
  setTimeout(run, 500);
})();

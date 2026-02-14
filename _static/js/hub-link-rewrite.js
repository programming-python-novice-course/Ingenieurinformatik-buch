(() => {
  const TARGET = {
    // Repository used for JupyterHub git-pull links (`repo=` query parameter).
    // Keep as full git URL.
    hubRepoUrl: "https://github.com/fk03ingenieursinformatik/ingenieurinformatik-buch-deploy.git",
    // Repository used for Binder v2/gh links (`/v2/gh/<owner>/<repo>/<branch>`).
    // Use "<owner>/<repo>" without branch. Example: "org/my-repo".
    // Set to null to keep whatever Jupyter Book generated.
    binderGhSlug: null,
    // Branch is intentionally hardcoded as requested.
    branch: "master",
  };

  /*
    Background / rationale
    ----------------------
    Jupyter Book generates a git-pull link for the JupyterHub launch button whose `urlpath`
    often points to the current book source page (e.g. `.../chapters/.../page.md`).

    Problem:
    - When opening the content in JupyterHub/JupyterLab, JupyterHub then attempts to open that
      Markdown file. In most cases, this `.md` file is *not executable* (it is not a notebook),
      which is confusing and forces users to manually locate the corresponding `.ipynb`.

    Solution:
    - This script rewrites the `urlpath` client-side (no server redirects), and only for
      `/hub/user-redirect/git-pull` links:
        `/chapters/.../*.md` -> `/deployed_notebooks/.../*.ipynb`
      The notebooks are stored in the repository under `deployed_notebooks/` and mirror the
      chapter structure.

    Binder:
    - Jupyter Book uses repository.branch (binder-minimal) for Binder links. This script
      overwrites Binder URLs (mybinder.org) so the branch in the path becomes "master".
    - Optional: you can set `TARGET.binderGhSlug` / `TARGET.hubRepoUrl` above to force the
      repository as well (instead of keeping Jupyter Book defaults).
    - Only links whose urlpath ends with .md are rewritten (restrictive, fail-safe).
    - urlpath: /chapters/.../*.md -> /deployed_notebooks/.../*.ipynb (same as JupyterHub).
  */

  /** @param {string | null} urlpath */
  function toNotebookUrlpath(urlpath) {
    if (!urlpath || !urlpath.endsWith(".md")) return null;
    return urlpath
      .replace("/chapters/", "/deployed_notebooks/")
      .replace(/\.md$/, ".ipynb");
  }

  /** @param {string} selector @param {(a: HTMLAnchorElement) => void} fn */
  function safeRewriteAnchors(selector, fn) {
    document.querySelectorAll(selector).forEach((a) => {
      try {
        fn(a);
      } catch {
        // Fail-safe: leave link unchanged on any parsing/processing errors.
      }
    });
  }

  function rewriteBinderLinks() {
    safeRewriteAnchors('a[href*="mybinder.org"]', (a) => {
      const rawHref = a.getAttribute("href");
      if (!rawHref) return;

      const url = new URL(rawHref, window.location.href);
      if (!url.hostname.includes("mybinder.org")) return;
      const ghMatch = url.pathname.match(/^\/v2\/gh\/([^/]+)\/([^/]+)\/([^/]+)$/);
      if (!ghMatch) return;

      const urlpath = url.searchParams.get("urlpath");
      const newUrlpath = toNotebookUrlpath(urlpath);
      if (!newUrlpath) return;

      if (TARGET.binderGhSlug && TARGET.binderGhSlug.includes("/")) {
        url.pathname = `/v2/gh/${TARGET.binderGhSlug}/${TARGET.branch}`;
      } else {
        url.pathname = url.pathname.replace(/\/[^/]+$/, `/${TARGET.branch}`);
      }
      url.searchParams.set("urlpath", newUrlpath);
      a.title = "Öffnet das zugehörige Notebook (.ipynb) in Binder";
      a.href = url.toString();
    });
  }

  function rewriteHubGitPullLinks() {
    safeRewriteAnchors('a[href*="/hub/user-redirect/git-pull"]', (a) => {
      const rawHref = a.getAttribute("href");
      if (!rawHref) return;

      const url = new URL(rawHref, window.location.href);
      if (!url.pathname.includes("/hub/user-redirect/git-pull")) return;

      url.searchParams.set("branch", TARGET.branch);
      if (TARGET.hubRepoUrl) {
        url.searchParams.set("repo", TARGET.hubRepoUrl);
      }

      const urlpath = url.searchParams.get("urlpath");
      if (urlpath?.includes("/chapters/")) {
        const newUrlpath = toNotebookUrlpath(urlpath);
        if (newUrlpath) {
          url.searchParams.set("urlpath", newUrlpath);
          a.title = "Öffnet das zugehörige Notebook (.ipynb) im JupyterHub der Hochschule München";
        }
      }
      a.href = url.toString();
    });
  }

  function runRewrites() {
    rewriteBinderLinks();
    rewriteHubGitPullLinks();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runRewrites);
  } else {
    runRewrites();
  }
})();

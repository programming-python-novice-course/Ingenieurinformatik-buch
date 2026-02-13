(() => {
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
  */

  function rewriteHubGitPullLinks() {
    /** @type {NodeListOf<HTMLAnchorElement>} */
    const anchors = document.querySelectorAll('a[href*="/hub/user-redirect/git-pull"]');

    anchors.forEach((a) => {
      try {
        const rawHref = a.getAttribute("href");
        if (!rawHref) return;

        const url = new URL(rawHref, window.location.href);

        // Only act on the intended JupyterHub git-pull redirect links.
        if (!url.pathname.includes("/hub/user-redirect/git-pull")) return;

        // Force JupyterHub to always pull branch "master" (independent of repository.branch in _config.yml).
        url.searchParams.set("branch", "master");

        if (url.searchParams.has("urlpath")) {
          const urlpath = url.searchParams.get("urlpath");
          if (urlpath && urlpath.includes("/chapters/") && urlpath.endsWith(".md")) {
            const newUrlpath = urlpath
              .replace("/chapters/", "/deployed_notebooks/") // first occurrence only
              .replace(/\.md$/, ".ipynb");
            url.searchParams.set("urlpath", newUrlpath);
            a.title = "Öffnet das zugehörige Notebook (.ipynb) im JupyterHub";
          }
        }
        a.href = url.toString();

      } catch {
        // Fail-safe: leave link unchanged on any parsing/processing errors.
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", rewriteHubGitPullLinks);
  } else {
    rewriteHubGitPullLinks();
  }
})();

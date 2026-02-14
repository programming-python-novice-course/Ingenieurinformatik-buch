(() => {
  const TARGET = {
    // Repository used for JupyterHub git-pull links (`repo=` query parameter).
    // Keep as full git URL.
    hubRepoUrl: "https://github.com/fk03ingenieursinformatik/ingenieurinformatik-buch-deploy.git",
    // Repository used for Binder v2/gh links (`/v2/gh/<owner>/<repo>/<branch>`).
    // Use "<owner>/<repo>" without branch. Example: "org/my-repo".
    // Set to null to keep whatever Jupyter Book generated.
    binderGhSlug: null,
    // Repository used for Binder v2/git links (`/v2/git/<encoded_repo>/<branch>`).
    // Keep null to preserve the repo from the generated URL.
    // Use full git URL if you want to force a repository.
    binderGitRepoUrl: null,
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
    const chaptersIdx = urlpath.indexOf("/chapters/");
    if (chaptersIdx === -1) return null;

    const rel = urlpath.slice(chaptersIdx + "/chapters/".length).replace(/\.md$/, ".ipynb");

    // Keep the lab/tree prefix, but always drop any repository folder segment
    // (with or without `.git`) before `deployed_notebooks/...`.
    const labTreePrefix = urlpath.match(/^(.*?lab\/tree\/)/);
    if (labTreePrefix) {
      return `${labTreePrefix[1]}deployed_notebooks/${rel}`;
    }
    return `/deployed_notebooks/${rel}`;
  }

  /** @param {string | null} repoUrl */
  function repoDirFromUrl(repoUrl) {
    if (!repoUrl) return null;
    try {
      const u = new URL(repoUrl);
      const parts = u.pathname.split("/").filter(Boolean);
      if (parts.length === 0) return null;
      // Keep `.git` suffix because JupyterHub git-pull commonly uses that folder name.
      return parts[parts.length - 1];
    } catch {
      return null;
    }
  }

  /** Ensure JupyterHub urlpath is `lab/tree/<repo>/deployed_notebooks/...` */
  function toHubNotebookUrlpath(urlpath) {
    const base = toNotebookUrlpath(urlpath);
    if (!base) return null;

    const repoDir = repoDirFromUrl(TARGET.hubRepoUrl);
    if (!repoDir) return base;

    const m = base.match(/^(.*?lab\/tree\/)(.*)$/);
    if (!m) return base;

    const prefix = m[1];
    let rest = m[2];

    if (rest.startsWith(`${repoDir}/`)) return base;

    // Normalize variants like `<other-repo>/deployed_notebooks/...` or `deployed_notebooks/...`
    rest = rest.replace(/^[^/]+\/deployed_notebooks\//, "deployed_notebooks/");
    if (!rest.startsWith("deployed_notebooks/")) return base;

    return `${prefix}${repoDir}/${rest}`;
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

  function rewriteBinderAnchor(a) {
    const rawHref = a.getAttribute("href");
    if (!rawHref) return;

    const url = new URL(rawHref, window.location.href);
    if (!url.hostname.includes("mybinder.org")) return;
    const ghMatch = url.pathname.match(/^\/v2\/gh\/([^/]+)\/([^/]+)\/([^/]+)$/);
    const gitMatch = url.pathname.match(/^\/v2\/git\/([^/]+)\/([^/]+)$/);
    if (!ghMatch && !gitMatch) return;

    const urlpath = url.searchParams.get("urlpath");
    const newUrlpath = toNotebookUrlpath(urlpath);
    if (!newUrlpath) return;

    if (ghMatch) {
      if (TARGET.binderGhSlug && TARGET.binderGhSlug.includes("/")) {
        url.pathname = `/v2/gh/${TARGET.binderGhSlug}/${TARGET.branch}`;
      } else {
        url.pathname = url.pathname.replace(/\/[^/]+$/, `/${TARGET.branch}`);
      }
    } else {
      const encodedRepo =
        TARGET.binderGitRepoUrl && TARGET.binderGitRepoUrl.trim()
          ? encodeURIComponent(TARGET.binderGitRepoUrl.trim())
          : gitMatch[1];
      url.pathname = `/v2/git/${encodedRepo}/${TARGET.branch}`;
    }
    url.searchParams.set("urlpath", newUrlpath);
    a.title = "Öffnet das zugehörige Notebook (.ipynb) in Binder";
    a.href = url.toString();
  }

  function rewriteBinderLinks() {
    safeRewriteAnchors('a[href*="mybinder.org"]', rewriteBinderAnchor);
  }

  function rewriteHubGitPullAnchor(a) {
    const rawHref = a.getAttribute("href");
    if (!rawHref) return;

    const url = new URL(rawHref, window.location.href);
    if (!url.pathname.includes("/hub/user-redirect/git-pull")) return;

    url.searchParams.set("branch", TARGET.branch);
    if (TARGET.hubRepoUrl) {
      url.searchParams.set("repo", TARGET.hubRepoUrl);
    }

    const urlpath = url.searchParams.get("urlpath");
    const newUrlpath = toHubNotebookUrlpath(urlpath);
    if (newUrlpath) {
      url.searchParams.set("urlpath", newUrlpath);
      a.title = "Öffnet das zugehörige Notebook (.ipynb) im JupyterHub der Hochschule München";
    }
    a.href = url.toString();
  }

  function rewriteHubGitPullLinks() {
    safeRewriteAnchors('a[href*="/hub/user-redirect/git-pull"]', rewriteHubGitPullAnchor);
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
  // Run again shortly after load in case theme scripts alter launch links.
  setTimeout(runRewrites, 100);

  // Ensure links are rewritten even if theme code mutates them later.
  document.addEventListener(
    "click",
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      try {
        rewriteBinderAnchor(anchor);
        rewriteHubGitPullAnchor(anchor);
      } catch {
        // Fail-safe: never block navigation because of rewrite errors.
      }
    },
    true
  );
})();

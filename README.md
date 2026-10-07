# The Dreamers Talent website — simple guide

This is the website for The Dreamers Talent. It has two versions that use the
same project:

- **Full site** — the normal website with Companies, Pricing and Candidates
  pages. Use this for the real, public website.
- **Coming soon** — one simple holding page with a contact link. Use this
  before the full website is ready, or when the full site should temporarily be
  hidden.

You do not need to be a developer to make wording changes or publish either
version. The steps below are deliberately written for a first-time user.

## Recommended tools

Use these three free apps for this project:

1. [Visual Studio Code](https://code.visualstudio.com/) — the app where you
   open and view the project files.
2. The **Codex** extension in Visual Studio Code — follow the [official Codex
   IDE setup guide](https://learn.chatgpt.com/docs/codex/ide) to install it and
   sign in. It appears as the Codex icon in the side bar.
3. [GitHub Desktop](https://desktop.github.com/) — the app used to save
   (commit) and send (push) your changes to GitHub.

Open this project in Visual Studio Code, then open the Codex side bar and start
a chat. Ask it to read this guide before doing work, for example:

```text
Read README.md first. Then help me change [describe the change]. Explain what
you will change, make the change, and show me what changed when you are done.
```

Codex can read the project, explain the files, make focused changes, and help
with most technical requests. Always review the changed files before accepting
them, then commit and push them with GitHub Desktop.

## The easiest way to change text

For a small change, use GitHub in your browser:

1. Open this repository on GitHub and make sure you are looking at the `main`
   branch.
2. Open the file you want to change (the file map below helps).
3. Click the pencil icon (**Edit this file**), change only the text you need,
   then click **Commit changes**. Do this after **every** change: a change that
   is not committed cannot be published.
4. If GitHub offers a choice, commit directly to `main` only when you have
   permission to publish website changes. Otherwise create a branch and ask the
   person who manages the site to merge it.
5. Follow [Publish a version](#publish-a-version) below. Saving a change on
   GitHub does **not** publish the website by itself.

### Where things live

| If you want to change… | Edit this file |
| --- | --- |
| Main Companies page | `src/agency/pages/index.astro` |
| Candidates page | `src/agency/pages/candidates.astro` |
| Separate Pricing page | `src/agency/pages/pricing.astro` |
| The holding/coming-soon page | `src/coming-soon/pages/index.astro` |
| Main email address, brand name or description | `site.config.json` |
| Colours, spacing and visual styling | `src/agency/styles/global.css` |
| Images and icons | `public/` |

Files ending in `.astro` contain both the page text and its layout. For a
wording-only change, change the readable text between `>` and `<` characters;
leave the surrounding code alone. Make one small change at a time and check it
before publishing.

Do not change `astro.config.mjs` or `.github/workflows/deploy.yml` unless a
developer has asked you to: these files control which version is built and how
it is published.

## Run the website on your own computer

This lets you look at a change before anyone else sees it online.

### One-time setup

1. Install [Visual Studio Code](https://code.visualstudio.com/) and the Codex
   extension first, using the [official setup guide](https://learn.chatgpt.com/docs/codex/ide).
2. Install [GitHub Desktop](https://desktop.github.com/), open it, and sign in
   with the GitHub account that has access to this repository.
3. Clone the project: choose **File** → **Clone repository**. Find this
   repository in the list (or use the **URL** tab and paste its URL from
   GitHub's **Code** button), choose where to save it, then click **Clone**.
   This makes your own working copy and keeps it connected to GitHub.
4. In GitHub Desktop, choose **Repository** → **Open in Visual Studio Code**.
   The project folder opens in Visual Studio Code. Keep using this app to view
   and change the files.
5. Install **Node.js 24** from [nodejs.org](https://nodejs.org/). The website's
   publisher also uses version 24, so this avoids surprises.
6. In Visual Studio Code, choose **Terminal** → **New Terminal**. This opens a
   small built-in Terminal at the bottom of the project window. Copy and run
   this once:

   ```sh
   npm ci
   ```

   It downloads the website's tools. It can take a minute the first time.

### Save every local change to GitHub

After checking a change locally, return to GitHub Desktop. In the **Changes**
tab, review the files listed, write a short summary (for example, “Update
contact email”), click **Commit to main**, then click **Push origin**.

Do this for **every set of changes**. The publishing workflow can only publish
changes that have been committed and pushed to GitHub. If you do not have
permission to commit to `main`, create a branch in GitHub Desktop and ask the
site manager to merge it before publishing.

### See the full site locally

In the built-in Terminal at the bottom of Visual Studio Code, run:

```sh
DEPLOY_TARGET=customDomain SITE_VERSION=fullSite npm run dev
```

Open the address it prints, normally `http://localhost:4321`. Leave the
built-in Terminal open while you work. Most edits refresh in the browser
automatically. To stop it, click the Terminal and press `Ctrl` + `C`.

### See the coming-soon page locally

Stop the previous preview with `Ctrl` + `C`, then run:

```sh
DEPLOY_TARGET=customDomain SITE_VERSION=comingSoon npm run dev
```

Open the local address again. This page is separate from the full site, so edit
`src/coming-soon/pages/index.astro` if you want to change it.

## Publish a version

Publishing is done manually in GitHub. Nothing is published automatically when
a file changes; this is useful because it gives you a final choice of which
version people will see.

1. Confirm every change is committed and pushed to the `main` branch on GitHub
   (see [Save every local change to GitHub](#save-every-local-change-to-github)).
2. In the repository, click the **Actions** tab.
3. In the left-hand list, choose **Deploy to GitHub Pages**.
4. Click **Run workflow**.
5. Choose the two options:

   | What you want | **URL profile** (`deploy_target`) | **Version to deploy** (`site_version`) |
   | --- | --- | --- |
   | Real website at `thedreamerstalent.com` | `customDomain` | `fullSite` |
   | Coming-soon page at `thedreamerstalent.com` | `customDomain` | `comingSoon` |
   | Test/staging copy at `YakushenkoM.github.io/agency` | `githubPages` | `fullSite` or `comingSoon` |

6. Click the green **Run workflow** button and wait for both `build` and
   `deploy` to show a green tick.
7. Open the link shown by the completed workflow and check the site on both a
   computer and a phone if possible.

### Switch the real website on or off

To put the real, multi-page website live, run the workflow with:

```text
URL profile: customDomain
Version to deploy: fullSite
```

To replace it with the holding page, run exactly the same workflow but choose:

```text
URL profile: customDomain
Version to deploy: comingSoon
```

This switch does not delete the other version or its content. You can switch
back at any time by running the workflow again. `customDomain` is important for
the live domain: it builds links for the root of `thedreamerstalent.com`.
`githubPages` is for the repository preview address, where the site lives under
`/agency`.

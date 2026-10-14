# Mightora Code Diff

Buildless static code comparison and web project playground for GitHub Pages. Open `index.html` or serve the folder with `python -m http.server 8080`. No backend, credentials or build dependencies.

## Features

- Paste or import two snippets, choose file extension, side-by-side/unified views, word changes, swap and patch download.
- Compare two multi-file HTML/CSS/JavaScript experiments, match viewports, inspect separate consoles, download a ZIP workspace.
- Local preview uses `srcdoc`, a sandbox without same-origin permissions, and a restrictive resource CSP. JavaScript is off initially and requires explicit execution.
- VS Code web handoff and installed desktop folder URI; snippets are transferred through downloaded files, not a cross-origin session.
- Responsive accessible layout, Mightora shared branding, crawlable guide/FAQ, WebApplication and FAQPage schema, canonical URL, sitemap and llms.txt.

## GitHub Pages

The workflow deploys static runtime files from main. In repository Settings → Pages choose GitHub Actions if not already configured. The expected project URL is https://mightora.github.io/code-diff/. A private repository may require a plan supporting Pages. Keep canonical, sitemap, robots and llms URLs aligned if adding a custom domain.

## Preview boundaries

Browser code only, not Node.js or backend code. Use index.html as the entry. Local stylesheet and classic script references are inlined. Module imports, package builds, remote requests, iframes, embedded objects and external libraries are unsupported. Other text files can be compared/exported but do not form a complete asset-serving runtime. No automatic pixel diff. Arbitrary JavaScript can consume browser resources: run only code you trust. Stop clears frames but cannot reliably interrupt a tight loop blocking the tab.

No snippet uploads, analytics or automatic persistence. External shared branding/CDN services receive normal asset requests. Shift+Tab leaves editors; Tab inserts spaces. Comparison sizes are limited to 200 KB per file and computation has a time budget.

## VS Code and licences

See [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md). VS Code is linked, not bundled. Code–OSS is MIT; Microsoft's product has its own licence. Opening vscode.dev does not automatically transfer local unsaved data. Extract the ZIP and open its folder or `.code-workspace` file. Browser local-folder support varies.

## Verification

`node --check app.js`; DOM integration checks use jsdom when available and ZIP archives are independently checked with Python zipfile. Browser layout/actual script execution requires a manual browser smoke test.

## Mightora brand guidelines

Brand source: https://raw.githubusercontent.com/mightora/radar.mightora.io/refs/heads/main/design-system.instructions.md

`design-system.instructions.md` is an exact copy of that source at the time of this update. The shared UI CDN controls header, author, footer and theme styling. `styles.css` complements shared tokens and scopes app controls to `main`, preserving the shared component styles. The static author fallback uses the prescribed images and class structure and appears immediately above the footer. The original footer YAML fetch patch and js-yaml-before-components execution order are retained. The shared header provides the only theme toggle. Quick navigation offsets include the header and the actual navigation height.

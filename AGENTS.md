# Repository Guidelines

## Project Structure & Module Organization

This repository is a small static frontend for the NovaLedger landing page. Root files are:

- `index.html` defines the page structure, navigation, content sections, and form markup.
- `styles.css` contains global tokens, layout rules, responsive styles, and component classes.
- `script.js` handles navigation toggling, pricing state, policy toggles, metric animation, and form submission feedback.

Keep new static assets in a dedicated `assets/` directory if added, and reference them with relative paths such as `assets/logo.svg`.

## Build, Test, and Development Commands

There is no package manager or build step. Useful local commands:

- `python3 -m http.server 8000` starts a local static server from the repository root.
- `open http://localhost:8000` opens the site in a browser on macOS.
- `npx serve .` serves the same files if Node tooling is available.

## Coding Style & Naming Conventions

Use 2-space indentation in HTML, CSS, and JavaScript. Keep HTML semantic and accessible: preserve ARIA labels, button types, form labels, and the section-anchor pattern. CSS uses custom properties in `:root`, kebab-case class names, and component selectors such as `.nav-toggle`, `.feature-card`, and `.pricing-card`. JavaScript uses `const`/`let`, query selectors, and straightforward event listeners.

## Testing Guidelines

No automated test framework is configured. Before submitting changes, manually verify:

- The page loads through a local server without console errors.
- Mobile navigation opens, closes, and updates `aria-expanded`.
- Pricing buttons update displayed prices.
- Toggle buttons update visual state and ARIA labels.
- The contact form displays the entered email and resets.

If automated tests are added later, place them under `tests/` and document the command here.

## Commit & Pull Request Guidelines

This directory is not currently a Git repository, so no local commit history is available to infer conventions. Use concise imperative commit messages, for example `Update pricing section layout` or `Fix mobile navigation state`.

Pull requests should include a short summary, screenshots for visual changes, manual test notes, and any accessibility considerations. Link related issues when applicable.

## Agent-Specific Instructions

Keep changes scoped to the static files unless requested otherwise. Do not introduce dependencies, generated assets, or framework scaffolding without a clear reason. When editing visuals, check both desktop and mobile widths before handing off.

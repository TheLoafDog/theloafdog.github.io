# Log

Newest at the bottom. 3–5 lines per session.

## 2026-11-09 — setup
- Repo is the HTML5 UP "Aerial" template: one splash screen (name, tagline, GitHub + LinkedIn icons), no other content.
- Added CLAUDE.md (rules for agents), ROADMAP.md (phased plan), LOG.md, and a real README.
- Next: Phase 1 item 2 (remove unused template files).

## 2026-11-09 — remove unused template files
- Deleted `README.txt` (template readme) and `assets/css/images/ie/` (old IE footer images, referenced nowhere).
- Kept all webfonts (all are referenced by `fontawesome-all.min.css`), `assets/sass/`, and `LICENSE.txt`; moved the template/photo/icon credits into README.md.
- Next: Phase 1 item 3 (fix mobile scrolling).

## 2026-11-09 — fix mobile scrolling
- Removed the `window.ontouchmove = return false` handler from `index.html`, so touch scrolling is no longer blocked by JS.
- Still blocking: `body { overflow: hidden; }` in `main.css` (the splash is one screen, so it's harmless today). Change it when Phase 2 item 1 adds the sections below the hero.
- Next: Phase 1 item 4 (meta description, OG/Twitter tags, `lang="en"`, favicon).

## 2026-11-09 — meta tags and favicon
- Added `lang="en"`, a meta description, canonical URL, Open Graph and Twitter card tags (image: `bg.jpg`), and an SVG "BN" favicon (`favicon.svg`).
- Also dropped `/>` on void tags so `html-validate` passes with no errors. Description reuses the existing tagline only.
- Merged by Claude: small and low-risk, no new facts about Brandon.
- Next: Phase 1 item 5 (GitHub Actions HTML validation + link check).

## 2026-11-09 — CI: HTML validation + link check
- Added `.github/workflows/check.yml` (runs on PRs, pushes to `main`, and manually): `html-validate` on all HTML, then `.github/scripts/check_links.py`.
- The link checker (stdlib Python, no deps) checks local `href`/`src`/CSS `url()` targets and in-page `#anchors`; external URLs are skipped to keep CI fast and non-flaky.
- Merged by Claude: tooling only, no content about Brandon.
- Next: Phase 2 item 1 (scrolling one-page structure) — will be left open for review.

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

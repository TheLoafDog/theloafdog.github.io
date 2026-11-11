# Roadmap

Work top to bottom. One item per session. `[needs Brandon]` = skip in autonomous runs.

## Phase 1 — Foundations
- [x] Add CLAUDE.md, ROADMAP.md, LOG.md; replace the two-line README with a proper one
- [x] Remove unused template files (README.txt, unused images/fonts) after confirming nothing references them; keep LICENSE/attribution
- [x] Fix mobile scrolling: remove `window.ontouchmove = return false` (it blocks scrolling once there's more content)
- [x] Add `<meta name="description">`, Open Graph/Twitter card tags, `lang="en"`, and a simple favicon
- [x] Add a GitHub Actions workflow that validates HTML and checks links on every pull request

## Phase 2 — Real portfolio structure
- [x] Turn the single splash screen into a scrolling one-page site: Hero → About → Projects → Skills → Contact (keep the hero look, add sections below)
- [x] Projects section driven by a `projects.json` file + small JS renderer (with a no-JS fallback list)
- [x] Skills section (languages, frameworks, tools) as tidy tags — placeholders only
- [x] Contact section: GitHub, LinkedIn, and a "Download CV" button pointing at `cv.pdf` placeholder
- [x] Sticky nav with smooth-scroll links and active-section highlighting

## Phase 3 — Polish
- [ ] Dark/light mode toggle respecting `prefers-color-scheme`
- [ ] Accessibility pass: contrast, alt text, focus styles, skip link, semantic landmarks
- [ ] Performance pass: self-host or drop the Google Fonts import, compress bg.jpg, aim for Lighthouse 95+
- [ ] Replace the remaining template CSS with a lean custom stylesheet (then the HTML5 UP credit can go)

## Content — [needs Brandon]
- [x] [needs Brandon] Short bio (2–3 sentences): what you're interested in, what you're looking for (e.g. summer 2027 SWE internship)
- [x] [needs Brandon] Project list: name, one-line description, tech, link (public repos only; private ones = description + screenshots, no link)
- [x] [needs Brandon] Skills list
- [ ] [needs Brandon] CV as `cv.pdf` (check it has no phone number/home address before committing)
- [ ] [needs Brandon] Custom domain? (optional)

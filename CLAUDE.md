# CLAUDE.md — theloafdog.github.io

Personal portfolio site for Brandon Nunez (CS MEng, University of Warwick). Audience: recruiters and
engineers screening for internships. It should look clean, load fast, and make it obvious within
10 seconds who Brandon is, what he has built, and how to contact him.

## Stack
- Plain static HTML/CSS/JS, served by GitHub Pages from `main` (root). No build step, no frameworks,
  no npm dependencies at runtime. Keep it that way unless ROADMAP says otherwise.
- Current design is the HTML5 UP "Aerial" template (CCA 3.0 — attribution required while any of it is
  used; keep the footer credit until the template is fully replaced).
- `assets/sass/` is the template's source; `assets/css/main.css` is what's actually served.
  Edit the CSS directly; don't introduce a Sass build.

## How to check your work
- Open `index.html` locally (or `python3 -m http.server`) and check desktop + 375px mobile width.
- Validate HTML (`npx html-validate index.html` if available) and check that all links resolve.
- No console errors. Page should still be usable with JS disabled.

## Rules for every session (autonomous runs especially)
1. Read `LOG.md` (latest entry) and `ROADMAP.md` first. Do NOT re-explore the whole repo if the log
   already explains the state.
2. Do exactly ONE unchecked roadmap item per session. Small, reviewable diffs.
3. Work on a new branch `claude/<short-task-name>`, never commit to `main`. Open a pull request
   describing what changed and how to check it.
4. Never invent facts about Brandon (grades, jobs, projects, dates, skills). Where content is needed,
   insert a clearly marked placeholder `<!-- TODO(Brandon): ... -->` and list it in the PR description.
5. Never add personal data beyond what's already public on the site (no phone number, address, email
   unless Brandon adds it himself).
6. Items tagged `[needs Brandon]` in ROADMAP are skipped by autonomous runs.
7. At the end, tick the item in ROADMAP.md and append a 3–5 line entry to LOG.md (date, what was done,
   anything left for next time). Keep LOG.md short: when it passes ~40 entries, summarise the oldest.

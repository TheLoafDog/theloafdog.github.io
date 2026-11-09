#!/usr/bin/env python3
"""Check that every local link/asset referenced from the site's HTML and CSS exists.

External links (http/https, mailto, tel, data:, protocol-relative) are skipped so CI
stays fast and isn't flaky. Usage: python3 .github/scripts/check_links.py [root]
"""
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(sys.argv[1] if len(sys.argv) > 1 else ".").resolve()
SKIP_DIRS = {".git", "node_modules", "assets/sass"}
ATTRS = {"href", "src", "srcset", "poster", "data-src"}
CSS_URL = re.compile(r"url\(\s*['\"]?([^'\")]+)['\"]?\s*\)")


def is_external(url):
    return (
        not url
        or url.startswith(("#", "//", "data:", "mailto:", "tel:", "javascript:"))
        or urlsplit(url).scheme in ("http", "https")
    )


class Collector(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []
        self.ids = set()

    def handle_starttag(self, tag, attrs):
        for name, value in attrs:
            if value is None:
                continue
            if name == "id":
                self.ids.add(value)
            elif name in ATTRS:
                if name == "srcset":
                    self.urls += [p.strip().split()[0] for p in value.split(",") if p.strip()]
                else:
                    self.urls.append(value.strip())
            elif name == "style":
                self.urls += CSS_URL.findall(value)


def skipped(path):
    rel = path.relative_to(ROOT).as_posix()
    return any(rel == d or rel.startswith(d + "/") for d in SKIP_DIRS)


def resolve(base_file, url):
    path = unquote(urlsplit(url).path)
    if not path:
        return None
    target = (ROOT / path.lstrip("/")) if path.startswith("/") else (base_file.parent / path)
    if path.endswith("/") or target.is_dir():
        target = target / "index.html"
    return target


errors = []
for f in sorted(ROOT.rglob("*.html")):
    if skipped(f):
        continue
    c = Collector()
    c.feed(f.read_text(encoding="utf-8"))
    for url in c.urls:
        if url.startswith("#") and len(url) > 1 and url[1:] not in c.ids:
            errors.append(f"{f.relative_to(ROOT)}: missing anchor {url}")
        if is_external(url):
            continue
        target = resolve(f, url)
        if target and not target.exists():
            errors.append(f"{f.relative_to(ROOT)}: broken link {url}")

for f in sorted(ROOT.rglob("*.css")):
    if skipped(f):
        continue
    for url in CSS_URL.findall(f.read_text(encoding="utf-8", errors="replace")):
        url = url.strip()
        if is_external(url):
            continue
        target = resolve(f, url)
        if target and not target.exists():
            errors.append(f"{f.relative_to(ROOT)}: broken link {url}")

if errors:
    print("\n".join(errors))
    print(f"\n{len(errors)} broken local link(s).")
    sys.exit(1)
print("All local links resolve.")

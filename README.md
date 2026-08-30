Peter Dickinson Website
=======================

Source code for <https://www.peterdickinson.com>.

A static site built with [Hugo](https://gohugo.io/) (**extended** edition — the
CSS is compiled from Sass by Hugo Pipes, which needs the extended binary).

Requirements
------------

- Hugo extended ≥ 0.127 (`brew install hugo`)

No Node.js / npm / gulp toolchain is required any more.

Local development
----------------

```sh
hugo server        # live-reload dev server at http://localhost:1313
hugo --gc --minify # production build into ./public
```

Deployment
----------

Netlify builds and deploys automatically on push to `master`. Build settings live
in `netlify.toml` (`HUGO_VERSION` is pinned there — bump it to upgrade Hugo).

Layout
------

- `content/`  – Markdown content (books, news, about, essays)
- `layouts/`  – Hugo templates
- `assets/scss/` – Sass sources, compiled by Hugo Pipes
- `static/`   – images and other files copied verbatim
- `archetypes/` – `hugo new` front-matter templates
- `covers.yaml` / `new-covers.bat` – config for the separate `cover-generator`
  tool that produces the book-cover thumbnails in `static/images/covers/`

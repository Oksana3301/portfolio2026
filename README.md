# Portfolio 2026 — Atika Dewi Suryani

Personal portfolio — *Product & Sustainability Builder.* A warm,
"scrapbook-meets-editorial" site: hero, **What I Build** pillars, a **Featured
Work** grid (App / Non-App), an **My Approach** band with a cassette mixtape +
quote, and a contact footer. Each project card opens a full case study
(Problem → Discovery → Evaluation → Solution → Outcome).

Static — HTML + CSS + a little vanilla JS. No framework, no build step.

**Live:** enable GitHub Pages → Settings → Pages → branch `main`, folder `/root`.
URL: `https://oksana3301.github.io/portfolio2026/`

## Structure

```
index.html   # homepage markup (hero, pillars, featured work, approach, footer)
app.js       # 9 projects as data + case-study renderer + in-page routing
styles.css   # resets, motion keyframes, helpers, hover behaviors
.nojekyll    # serve files as-is on GitHub Pages
```

## Design system

- **Direction:** warm paper "scrapbook-meets-editorial" — polaroid, washi tape,
  cassette, doodles. One accent per surface.
- **Type:** Playfair Display (display) · Mulish (body) · Caveat (handwriting) ·
  Space Mono (labels). Google Fonts.
- **Palette:** paper `#F3EAD8`, ink `#2B2419`; accents maroon `#A8402E`,
  forest `#2E6B4C`, ochre `#C68A2E`, olive `#6E7B45` + per-project colors.
- **Motion:** subtle ambient bob/twinkle + scroll reveal; respects
  `prefers-reduced-motion`. The cassette play button toggles the reels.

## Edit content

All 9 case studies live in `app.js` → `PROJECTS`. Each has `name`, `role`,
`accent`, `tagline`, and `problem / framing / evaluation / solution / outcome`.
Edit there; the homepage cards are in `index.html`.

Placeholders (striped boxes labeled "drop mockup here") mark where real
screenshots and the profile photo go.

## Run locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

---

Ported from the "Homepage v2" Claude Design handoff — recreated as plain,
deployable static code (the proprietary design runtime was removed).

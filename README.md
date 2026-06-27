# Portfolio 2026 — Atika Dewi Suryani

Portofolio personal: builder & founder. Statis, tanpa framework — cukup HTML + CSS.

**Live:** aktifkan GitHub Pages (Settings → Pages → branch `main`, folder `/root`).

## Struktur

```
index.html    # halaman tunggal: hero, karya, tentang, kontak
styles.css    # design tokens + layout (Swiss/editorial minimalis)
.nojekyll     # supaya GitHub Pages serve file apa adanya
```

## Desain

- **Arah:** Swiss / editorial minimalis — netral, typografis, mudah dibaca.
- **Tipografi:** Inter (teks) + Newsreader italic (aksen).
- **Warna:** near-monochrome di atas paper hangat. Sengaja un-themed.
- **Motion:** reveal-on-scroll yang ringan, menghormati `prefers-reduced-motion`.

## Edit konten

Semua isi ada di `index.html`. Tiap proyek = satu `<article class="project">`
dengan tiga baris spec: **Fungsi · Bahasa & Teknologi · Struktur**.

## Jalankan lokal

```bash
python3 -m http.server 8000
# buka http://localhost:8000
```

# 🥐 Maison Elle — Minimalist Patisserie

A high-end patisserie landing page built as a design showcase, exploring **Minimalism** — restraint as the design statement, using negative space, a near-monochrome palette, and quiet typography instead of color or decoration to signal quality.

**[Live Demo](#)** · **[Repo](https://github.com/Fatimshaikh/minimal-patisserie)**

---

## ✨ Features

- **No accent color** — the entire palette is ink, soft ink, background, and a single hairline divider tone; restraint carries the design instead of color
- **Separated hero elements** — text and product photo sit in their own space rather than overlapping, avoiding the "text-on-image" pattern used in every other project in this series
- **Typographic menu list** — deliberately not a card grid; just clean rows with name, description, and price divided by hairlines
- **Inverted hover state** on menu items (text lightens rather than darkens) — a quiet micro-interaction instead of a flashy one
- **Minimal navbar and footer** with no CTA buttons, no social icon rows, no scroll-triggered color change — orientation only, no selling
- **Generous whitespace** throughout, used intentionally as a design element rather than empty leftover space

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Fonts | Cormorant (headings) · Inter (body) — via `next/font` |

## 📁 Project Structure

src/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ └── globals.css
├── components/
│ ├── Navbar.tsx
│ ├── Hero.tsx
│ ├── Menu.tsx
│ └── Footer.tsx
└── data/
└── menu.ts


## 🚀 Getting Started

```bash
git clone https://github.com/Fatimshaikh/minimal-patisserie.git
cd minimal-patisserie
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🎯 Purpose

Part of a series of design-style showcase projects demonstrating the same core stack (Next.js, TypeScript, Tailwind, Framer Motion) applied to distinct visual identities — this one aimed at premium food/luxury brands where confident restraint, not visual density, signals quality and justifies a higher price point.

## 📄 License

MIT — free to use as a learning reference.
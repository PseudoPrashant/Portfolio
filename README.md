# Portfolio Website — Prashant Kumar Sharma

A modern, responsive personal portfolio website built with **HTML, CSS, and vanilla JavaScript**, focused on **Firmware & IoT Development**.

This project highlights professional experience, skills, projects, education, certifications, and contact information in an interactive UI with smooth animations and micro-interactions.

## ✨ Features

- **Single-page portfolio layout** with section-based navigation
- **Responsive design** for desktop, tablet, and mobile breakpoints
- **Dark/Light theme toggle** with `localStorage` persistence
- **Custom animated cursor** (auto-disabled on non-hover/touch devices)
- **Hero particle canvas animation** (pauses when off-screen via `IntersectionObserver`)
- **3D tilt profile card** effect
- **Project flip cards** for front/back project summaries
- **Typing animation** for rotating role titles
- **Scroll reveal animations** and active nav highlighting
- **Scroll progress indicator** and back-to-top button
- **Skill bars** animated with `IntersectionObserver`
- **Mobile hamburger menu** with auto-close behavior
- **SEO-ready** with meta description and Open Graph tags
- **Accessible** with `aria-label` attributes on icon-only controls

## 🧱 Tech Stack

- **HTML5** — Semantic markup with SEO and Open Graph meta tags
- **CSS3** — Custom properties, responsive media queries, transitions/animations
- **JavaScript (ES6+)** — `IntersectionObserver`, passive event listeners, `requestAnimationFrame`
- **External CDNs**
  - Google Fonts (`DM Sans`, `Syne`)
  - Font Awesome 6 icons

## 📁 Project Structure

```text
Portfolio/
├── index.html              # HTML structure and content
├── assets/
│   ├── css/
│   │   └── style.css       # All styles (dark/light themes, responsive breakpoints)
│   └── js/
│       └── script.js       # All interactivity (canvas, cursor, scroll, typing)
└── README.md
```

## 🚀 Run Locally

Because this is a static site, you can run it in multiple ways.

### Option 1: Open directly

1. Clone/download this repository.
2. Open `index.html` in your browser.

### Option 2: Serve with a local HTTP server (recommended)

Using Python:

```bash
python3 -m http.server 8080
```

Then open: `http://localhost:8080`

## 🌐 Deployment

This portfolio is deployed on **GitHub Pages**. It can also be hosted on:

- Netlify
- Vercel (static)
- Cloudflare Pages

GitHub Pages serves `index.html` from the repository root by default — no build step or configuration is needed.

## 🎨 Customization Guide

To personalize for your own profile:

- **Name/Headline**: update hero section text in `index.html`
- **Social links**: update anchor URLs in hero + contact sections
- **Resume links**: replace Google Drive URL where used
- **Projects**: edit project cards in the `#projects` section
- **Experience/Education/Certifications**: update section content
- **Color palette**: modify CSS variables in `:root` and `body.light` inside `assets/css/style.css`
- **Typing roles**: edit the `words` array in `assets/js/script.js`

## ⚙️ External Dependencies

This project relies on externally hosted assets:

- Google Fonts CDN
- Font Awesome CDN

If you need full offline support, replace these with local assets.

## 📧 Contact

- **Email:** `pseudoprashant@gmail.com`
- **LinkedIn:** [linkedin.com/in/pseudoprashant](https://linkedin.com/in/pseudoprashant/)
- **GitHub:** [github.com/PseudoPrashant](https://github.com/PseudoPrashant)

## 📄 License

No license file is currently included in this repository.

If you plan to open-source this publicly, consider adding a license (e.g., MIT) in a `LICENSE` file.

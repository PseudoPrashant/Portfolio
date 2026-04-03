# Portfolio Website — Prashant Kumar Sharma

A modern, responsive, single-file personal portfolio website built with **HTML, CSS, and vanilla JavaScript**.

This project highlights professional experience, skills, projects, education, certifications, and contact information in an interactive UI with smooth animations and micro-interactions.

## ✨ Features

- **Single-page portfolio layout** with section-based navigation
- **Responsive design** for desktop, tablet, and mobile breakpoints
- **Dark/Light theme toggle** with `localStorage` persistence
- **Custom animated cursor** (auto-disabled on non-hover/touch devices)
- **Hero particle canvas animation**
- **3D tilt profile card** effect
- **Project flip cards** for front/back project summaries
- **Typing animation** for rotating role titles
- **Scroll reveal animations** and active nav highlighting
- **Scroll progress indicator** and back-to-top button
- **Skill bars** animated with `IntersectionObserver`
- **Mobile hamburger menu** with auto-close behavior

## 🧱 Tech Stack

- **HTML5**
- **CSS3** (custom properties, responsive media queries, transitions/animations)
- **JavaScript (ES6+)**
- **External assets/CDNs**
  - Google Fonts (`DM Sans`, `Syne`)
  - Font Awesome icons

## 📁 Project Structure

```text
.
├── index.html   # Complete app (markup, styles, scripts)
└── README.md
```

> Note: This project is intentionally packaged as a single-file site for easy hosting and portability.

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

You can deploy this portfolio on any static hosting platform:

- GitHub Pages
- Netlify
- Vercel (static)
- Cloudflare Pages

Since everything is in `index.html`, deployment is straightforward.

## 🎨 Customization Guide

To personalize for your own profile:

- **Name/Headline**: update hero section text
- **Social links**: update anchor URLs in hero + contact sections
- **Resume links**: replace Google Drive URL where used
- **Projects**: edit project cards in the `#projects` section
- **Experience/Education/Certifications**: update section content
- **Color palette**: modify CSS variables in `:root` and `body.light`
- **Typing roles**: edit the `words` array in script

## ⚙️ External Dependencies

This project relies on externally hosted assets:

- Google Fonts CDN
- Font Awesome CDN

If you need full offline support, replace these with local assets.

## 📧 Contact

- **Email:** `pseudoprashant@gmail.com`
- **LinkedIn:** `https://linkedin.com/in/pseudoprashant/`
- **GitHub:** `https://github.com/PseudoPrashant`

## 📄 License

No license file is currently included in this repository.

If you plan to open-source this publicly, consider adding a license (e.g., MIT) in a `LICENSE` file.

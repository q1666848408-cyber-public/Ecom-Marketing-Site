<div align="center">

# 🛍️ Ecom Marketing Site

[![HTML5](https://img.shields.io/badge/HTML5-semantic-E34F26?style=flat-square&logo=html5&logoColor=white)](.)
[![CSS3](https://img.shields.io/badge/CSS3-animations-1572B6?style=flat-square&logo=css3&logoColor=white)](.)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](.)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-6-528DD7?style=flat-square&logo=fontawesome&logoColor=white)](https://fontawesome.com)

**3-page static marketing site for an AI e-commerce video ads platform — vanilla HTML / CSS / JS, no build step**

> ⚠️ **Showcase Only** — ~15% skeleton. Product images and video assets not included.

</div>

---

## ✨ Overview

A front-end marketing website built from scratch to study how SaaS products structure their conversion funnel: landing page → sign-up → dashboard. No frameworks, no bundler — pure HTML5 / CSS3 / ES6+.

**Three pages:**

| Page | File | Purpose |
|---|---|---|
| Homepage | `index.html` | Hero + auto-scroll social proof + feature grid |
| Sign-up | `signup.html` | Registration form with client-side validation |
| Dashboard | `dashboard.html` | Post-login stats overview + sidebar nav |

---

## 🏗️ Architecture

```
  ┌─────────────┐    ┌──────────────┐    ┌───────────────┐
  │  index.html │───►│ signup.html  │───►│dashboard.html │
  │  (landing)  │    │  (register)  │    │  (app shell)  │
  └──────┬──────┘    └──────────────┘    └───────────────┘
         │
  style.css          dashboard.css        script.js
  (global)           (sidebar + cards)    (scroll fx + nav)
```

Key CSS techniques:

```css
/* Auto-scrolling social proof strip */
.scroll-track {
  display: flex;
  animation: scroll-left 20s linear infinite;
}

/* Scroll-triggered fade-in */
/* IntersectionObserver → opacity 0 → 1 + translateY */

/* Navbar blur on scroll */
/* window scroll event → backdropFilter: blur(10px) */
```

---

## 📁 Structure

```
Ecom-Marketing-Site/
├── index.html        # homepage
├── signup.html       # sign-up / login
├── dashboard.html    # user dashboard
├── style.css         # global styles
├── dashboard.css     # dashboard-specific styles
├── script.js         # scroll animations, navbar
└── images/           # product screenshots (not included)
```

---

## 🔧 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 — custom properties, Flexbox, Grid, keyframes |
| Scripting | Vanilla JavaScript ES6+ |
| Icons | Font Awesome 6 |
| Build | None — open directly in browser |

---

<div align="center">
<sub>Showcase version · Product assets not included · For portfolio reference only</sub>
</div>

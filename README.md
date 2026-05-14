# Ecom-Marketing-Site

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)

> **Showcase** — ~15% skeleton. Core implementation not included.

Three-page static marketing site for a TikTok e-commerce SaaS product. Built as a study of SaaS marketing site structure and conversion patterns.

## Stack

- Vanilla HTML5, CSS3, JavaScript
- Font Awesome (icons)

## Pages

| Page | Path | Description |
|------|------|-------------|
| Homepage | `index.html` | Hero, auto-scroll social proof strip, feature grid |
| Sign-up | `signup.html` | Email/password form with plan selector |
| Dashboard | `dashboard.html` | Logged-in user view with usage stats |

## Usage

No build step required. Open directly in a browser or serve with any static file server:

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .

# Or just open index.html in a browser
```

## Structure

```
Ecom-Marketing-Site/
├── index.html
├── signup.html
├── dashboard.html
├── css/
│   ├── main.css
│   ├── components.css
│   └── dashboard.css
├── js/
│   ├── main.js
│   └── social-proof-strip.js   # auto-scroll ticker
└── assets/
    ├── images/
    └── icons/
```

## Design Notes

The social proof strip on the homepage auto-scrolls a list of recent "conversions" to simulate activity. The feature grid uses a CSS grid layout that collapses to a single column on mobile. No frameworks, no build tooling.

# Ecom-Marketing-Site

> ⚠️ Showcase Only — Core implementation not included.

A three-page static marketing website for an AI-powered e-commerce video ads platform. Built as a learning exercise to study the structure, layout patterns, and interaction design common to modern SaaS marketing sites.

---

## Pages

| Route | Purpose |
|---|---|
| `/` | Homepage — hero section, social proof strip, feature grid |
| `/signup` | Registration / onboarding entry point |
| `/dashboard` | User dashboard preview |

## Stack

No build tools, no framework — intentionally minimal to keep the focus on fundamentals.

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic elements) |
| Styling | CSS3 — custom properties, Grid, Flexbox, keyframe animations |
| Scripting | Vanilla JavaScript ES6+ |
| Icons | Font Awesome 6 |

## Notable Implementation Details

### Auto-Scrolling Social Proof Strip
The homepage includes a continuous horizontal ticker of logos/testimonials implemented purely in CSS:

```css
@keyframes scroll-left {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.ticker-track {
  display: flex;
  animation: scroll-left 30s linear infinite;
}
```

Content is duplicated inside the track so the loop is seamless with no JavaScript.

### Scroll-Triggered Fade-In
Section reveals use the `IntersectionObserver` API — no scroll event listeners, no layout thrash:

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
```

### Navbar Blur on Scroll
The navigation bar transitions from transparent to a frosted-glass background once the user scrolls past the hero:

```js
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 60);
});
```

```css
nav.scrolled {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
```

## Layout Architecture

```
┌─────────────────────────────────┐
│  Navbar (sticky, blur-on-scroll)│
├─────────────────────────────────┤
│  Hero                           │
│    headline + CTA + product img │
├─────────────────────────────────┤
│  Social Proof Strip (auto-scroll│
├─────────────────────────────────┤
│  Feature Grid (3-col CSS Grid)  │
├─────────────────────────────────┤
│  Footer                         │
└─────────────────────────────────┘
```

## Learning Objectives

This project was built to internalize:

- How SaaS marketing sites guide visitors from awareness to sign-up
- CSS custom properties as a design token system (`--color-primary`, `--spacing-*`, etc.)
- Performance-conscious animation (GPU-composited `transform`/`opacity` only)
- Progressive enhancement — the page is fully readable with JavaScript disabled

## Status

Static files only; no backend, no build pipeline. Suitable as a starting template for lightweight marketing pages.

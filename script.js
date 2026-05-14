// script.js — Showcase skeleton

// Navbar scroll behavior
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar-container')
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10,10,10,0.95)'
        navbar.style.backdropFilter = 'blur(10px)'
        navbar.style.borderBottom = '1px solid #222'
    } else {
        navbar.style.background = 'transparent'
        navbar.style.backdropFilter = 'none'
        navbar.style.borderBottom = 'none'
    }
})

// Scroll-triggered animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
        }
    })
}, { threshold: 0.1 })

document.querySelectorAll('.feature-card').forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    observer.observe(el)
})

// Core interactive logic not included in showcase

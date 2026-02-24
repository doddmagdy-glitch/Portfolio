/* ============================================================
   KHALED MAGDY — Portfolio Scripts
   ============================================================ */

// --- Custom Cursor ---
const cursor     = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');

if (cursor && cursorRing) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        cursor.style.left = mx + 'px';
        cursor.style.top  = my + 'px';
    });
    // ring lags slightly behind
    const trackRing = () => {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        cursorRing.style.left = rx + 'px';
        cursorRing.style.top  = ry + 'px';
        requestAnimationFrame(trackRing);
    };
    trackRing();
}

// --- Scroll-Reveal (data-reveal) ---
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// --- Legacy observer: .portfolio-item, .skill-card, .stat-item ---
const legacyObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fade-in');

        if (entry.target.classList.contains('stat-item')) {
            const numEl = entry.target.querySelector('.stat-number');
            if (numEl) animateCounter(numEl);
        }
        legacyObserver.unobserve(entry.target);
    });
}, { threshold: 0.2 });

document.querySelectorAll('.portfolio-item, .skill-card, .stat-item')
    .forEach(el => legacyObserver.observe(el));

// --- Counter Animation ---
function animateCounter(el) {
    const raw    = el.innerText.trim();
    const target = parseInt(raw);
    const hasPls = raw.includes('+');
    if (isNaN(target)) return;

    const duration = 1400;
    let start = null;
    const step = ts => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased    = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
        el.textContent = Math.floor(eased * target) + (hasPls ? '+' : '');
        if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
}

// --- Navbar Scroll State ---
const nav = document.querySelector('nav');
if (nav) {
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
}

// --- Mobile Menu Toggle ---
const toggleMenu = () => {
    const links = document.querySelector('.nav-links');
    if (!links) return;
    links.classList.toggle('active');
};
window.toggleMenu = toggleMenu; // expose globally

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
        document.querySelector('.nav-links')?.classList.remove('active');
    });
});

// --- Parallax on hero bg (subtle) ---
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        hero.style.setProperty('--parallax', `${y * 0.3}px`);
    }, { passive: true });
}

// --- Form Handler ---
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('.submit-button');
        if (!btn) return;
        btn.textContent = 'Sent ✓';
        btn.style.background = '#1a6e3f';
        setTimeout(() => {
            btn.textContent = 'Send Message';
            btn.style.background = '';
            form.reset();
        }, 3000);
    });
}

// --- Add cursor DOM elements if not present ---
if (!document.querySelector('.cursor')) {
    const c  = document.createElement('div'); c.className  = 'cursor';
    const cr = document.createElement('div'); cr.className = 'cursor-ring';
    document.body.appendChild(c);
    document.body.appendChild(cr);
}
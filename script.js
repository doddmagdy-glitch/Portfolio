// Unified Intersection Observer for Animations & Numbers
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Trigger Stat Counter if this is a stat item
            if (entry.target.classList.contains('stat-item')) {
                const numEl = entry.target.querySelector('.stat-number');
                animateValue(numEl);
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Counter Function
function animateValue(obj) {
    const target = parseInt(obj.innerText);
    let start = 0;
    const duration = 1500;
    const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        obj.innerHTML = Math.floor(progress * target) + (obj.innerText.includes('+') ? '+' : '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Initialize Observers
document.querySelectorAll('.portfolio-item, .skill-card, .stat-item').forEach(el => {
    observer.observe(el);
});

// Mobile Menu Toggle Fix
const toggleMenu = () => {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
    // Toggle icon animation
    document.querySelectorAll('.menu-toggle span').forEach((span, i) => {
        span.style.transform = nav.classList.contains('active') 
            ? (i===0?'rotate(45deg) translate(5px, 5px)':i===1?'opacity:0':'rotate(-45deg) translate(7px, -7px)') 
            : 'none';
    });
};

// Smooth Parallax
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroBg = document.querySelector('.hero::before');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
    }
    document.querySelector('nav').classList.toggle('scrolled', scrolled > 50);
});
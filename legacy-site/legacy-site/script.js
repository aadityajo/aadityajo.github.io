// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple animation or class toggle for hamburger itself could go here
    });
}

// Add styles for mobile menu active state via JS if not in CSS (or ensure CSS handles .active)
// Let's inject a small style rule for the mobile menu specifically since I might have missed the .active class in the main CSS
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@media (max-width: 768px) {
    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background: white;
        padding: 20px;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        z-index: 999;
    }
}
`;
document.head.appendChild(styleSheet);

// Intersection Observer for scroll animations (fade-in on scroll)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Target elements to animate
document.querySelectorAll('.section-title, .project-card, .timeline-item, .skill-category').forEach(el => {
    el.style.opacity = '0'; // Initial state
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Add the class 'fade-in' logic dynamically
const animationStyle = document.createElement("style");
animationStyle.innerText = `
.fade-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
}
`;
document.head.appendChild(animationStyle);

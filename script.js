// Intersection Observer for reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "-20px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    // Add subtle hover tilt effect for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) translateY(0) rotateX(0) rotateY(0)`;
        });
    });
});

// Smooth Header effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = "0.8rem 1.5rem";
        nav.style.background = "rgba(15, 23, 42, 0.8)";
        nav.style.boxShadow = "0 10px 30px -10px rgba(0,0,0,0.5)";
    } else {
        nav.style.padding = "0.5rem 1rem";
        nav.style.background = "rgba(255, 255, 255, 0.03)";
        nav.style.boxShadow = "none";
    }
});

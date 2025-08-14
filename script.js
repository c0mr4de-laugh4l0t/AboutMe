document.addEventListener("DOMContentLoaded", () => {
    const fadeIns = document.querySelectorAll('.fade-in');

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    fadeIns.forEach(section => {
        appearOnScroll.observe(section);
    });
});
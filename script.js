// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Zeyra site loaded.");

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Fade-in animation when elements are visible
    const fadeElements = document.querySelectorAll(".fade-in");
    const fadeInOnScroll = () => {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    };
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run on load

    // Background slow zoom
    const bg = document.querySelector(".background");
    if (bg) {
        let scale = 1;
        setInterval(() => {
            scale += 0.0005; // Slow zoom rate
            bg.style.transform = `scale(${scale})`;
        }, 16); // ~60fps
    }

    // GitHub button hover animation
    const githubBtn = document.querySelector(".github-btn");
    if (githubBtn) {
        githubBtn.addEventListener("mouseenter", () => {
            githubBtn.style.transform = "scale(1.1)";
            githubBtn.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
        });
        githubBtn.addEventListener("mouseleave", () => {
            githubBtn.style.transform = "scale(1)";
            githubBtn.style.boxShadow = "none";
        });
    }
});
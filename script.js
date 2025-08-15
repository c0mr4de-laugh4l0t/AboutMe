// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
    console.log("Zeyra site loaded.");

    /**
     * Smooth scroll for anchor links
     * Navigates smoothly to sections when an anchor link is clicked.
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute("href"));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    /**
     * Fade-in animation using Intersection Observer
     * More performant than using a scroll event listener.
     */
    const fadeElements = document.querySelectorAll(".fade-in");
    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting the viewport, add the 'visible' class
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe each element with the .fade-in class
    fadeElements.forEach(el => fadeInObserver.observe(el));

    /**
     * Background slow zoom animation
     * Uses requestAnimationFrame for better performance and smoothness.
     */
    const bg = document.querySelector(".background");
    if (bg) {
        let scale = 1;
        const zoomRate = 0.0002; // Slower rate for a more subtle effect

        function animateZoom() {
            scale += zoomRate;
            bg.style.transform = `scale(${scale})`;
            // Continue the animation on the next frame
            requestAnimationFrame(animateZoom);
        }
        // Start the animation
        requestAnimationFrame(animateZoom);
    }

    /**
     * GitHub button hover animation
     */
    const githubBtn = document.querySelector(".github-btn");
    if (githubBtn) {
        githubBtn.addEventListener("mouseenter", () => {
            githubBtn.style.transform = "scale(1.1)";
            githubBtn.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
        });
        githubBtn.addEventListener("mouseleave", () => {
            githubBtn.style.transform = "scale(1)";
            githubBtn.style.boxShadow = "none";
        });
    }
});

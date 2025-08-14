document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.querySelector(".scroll-btn");

    scrollBtn.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#about").scrollIntoView({
            behavior: "smooth"
        });
    });
});
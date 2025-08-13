// Scroll animation for sections
const sections = document.querySelectorAll('section');
const githubButton = document.querySelector('.github');

// Intersection Observer for fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
            if(entry.target.querySelector('.github')) {
                githubButton.classList.add('visible');
            }
        }
    });
}, {
    threshold: 0.3
});

sections.forEach(section => {
    observer.observe(section);
});

// Placeholder for hero background animation
const canvas = document.getElementById('hero-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Basic animation loop (you can replace with Three.js or custom animations)
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Example: simple moving dots
    for(let i = 0; i < 50; i++) {
        ctx.fillStyle = 'rgba(0,255,213,0.5)';
        ctx.beginPath();
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    requestAnimationFrame(animate);
}
animate();
// 1. Dark Mode (Lab 3)
const btn = document.getElementById('dark-mode-toggle');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-layout');
});

// 2. Scroll Reveal (Lab 3)
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "1s ease-out";
        }
    });
});

// 3. Custom Cursor (Lab 3)
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
// 5. Dark Mode Toggle [cite: 22, 56]
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Sử dụng classList.toggle [cite: 27]
});

// 5. Custom Cursor [cite: 23, 57]
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 3. Scroll Reveal & 1. Scroll Spy [cite: 7, 14, 28, 44, 49]
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');
const revealElements = document.querySelectorAll('.scroll-reveal');

window.addEventListener('scroll', () => {
    let current = "";
    
    // Scroll Reveal logic
    revealElements.forEach(el => {
        const speed = 100;
        const rect = el.getBoundingClientRect().top; // Sử dụng getBoundingClientRect [cite: 28]
        if (rect < window.innerHeight - speed) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });

    // Scroll Spy logic
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }
    });
});
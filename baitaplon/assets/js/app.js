// 5. Dark Mode [cite: 56]
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// 5. Custom Cursor [cite: 57]
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 3. Scroll Reveal & Scroll Spy [cite: 44, 49]
const reveals = document.querySelectorAll('.reveal');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // Hiệu ứng hiện phim khi cuộn
    reveals.forEach(el => {
        let rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "1.5s ease";
        }
    });

    // Scroll Spy: Sáng mục menu tương ứng
    let current = "";
    sections.forEach(section => {
        if (pageYOffset >= section.offsetTop - 150) {
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
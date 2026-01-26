document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle (Bài 1)
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle'); // Thêm class để transform icon burger
        });
    }

    // 2. Scroll Animation (AOS - Bài 3)
    // Thay vì AOS library, chúng ta tự tạo hiệu ứng scroll reveal đơn giản
    const scrollReveal = () => {
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

            if (rect.top <= viewportHeight - 150) { // Khi element cách viewport 150px
                el.classList.add('aos-animate');
            } else {
                el.classList.remove('aos-animate'); // Xóa class nếu cuộn lên lại
            }
        });
    };

    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); // Chạy lần đầu khi load trang

    // 3. Form Submit và Toast Message (Bài 4)
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    if (contactForm && toast) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Ngăn chặn reload trang

            // Lấy giá trị input (có thể thêm validation ở đây)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            // Lưu vào localStorage (Bài 4)
            localStorage.setItem('lastContactName', name);
            localStorage.setItem('lastContactEmail', email);
            localStorage.setItem('lastContactDate', new Date().toLocaleString());

            // Hiển thị Toast Message
            toast.textContent = 'Gửi tin nhắn thành công!';
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000); // Ẩn sau 3 giây

            contactForm.reset(); // Reset form
        });
    }

    // 4. Smooth Scroll (cho One-page scroll nếu có - Bài 5)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
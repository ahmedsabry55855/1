document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.overlay');

    // فتح/إغلاق القائمة
    menuBtn.addEventListener('click', function() {
        toggleMenu();
    });

    // إغلاق القائمة عند النقر على الروابط
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // إغلاق القائمة عند النقر على الـ overlay
    overlay.addEventListener('click', () => {
        closeMenu();
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
            closeMenu();
        }
    });

    // دالة فتح/إغلاق القائمة
    function toggleMenu() {
        menuBtn.classList.toggle('active');
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    // دالة إغلاق القائمة
    function closeMenu() {
        menuBtn.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
    }

    // تغيير شكل الهيدر عند السكرول
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            document.querySelector('header').classList.add('scrolled');
        } else {
            document.querySelector('header').classList.remove('scrolled');
        }
    });
});

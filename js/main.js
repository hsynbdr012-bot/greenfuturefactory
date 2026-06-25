window.addEventListener('load', function() {
    // 1. إخفاء الـ Loader
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';

    // 2. القائمة الجوال
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => navMenu.classList.toggle('active'));
    }

    // 3. التتبع
    const btn = document.getElementById('btnSearchOrder');
    if (btn) {
        btn.addEventListener('click', () => {
            const container = document.getElementById('trackingResultContainer');
            if (container) container.classList.remove('hidden');
            const progress = document.getElementById('progressLineFill');
            if (progress) progress.style.width = '50%';
        });
    }
});

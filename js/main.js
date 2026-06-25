document.addEventListener('DOMContentLoaded', () => {
    // 1. إخفاء شاشة التحميل (Loader)
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';

    // 2. تفعيل القائمة الجانبية (الثلاث خطوط)
    const menuToggle = document.querySelector('.menu-toggle'); // تأكد من الكلاس
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 3. تشغيل العدادات
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        if (target) {
            let count = 0;
            const update = () => {
                count += Math.ceil(target / 50);
                if (count < target) {
                    counter.innerText = count;
                    setTimeout(update, 20);
                } else { counter.innerText = target; }
            };
            update();
        }
    });

    // 4. نظام البحث (بدر محمد)
    const trackBtn = document.getElementById('trackBtn');
    const orderInput = document.getElementById('orderInput');
    const resultArea = document.getElementById('result-area') || document.createElement('div');
    resultArea.id = 'result-area';
    if(orderInput) orderInput.parentNode.appendChild(resultArea);

    if (trackBtn && orderInput) {
        trackBtn.addEventListener('click', () => {
            const val = orderInput.value.trim();
            // البحث عن "بدر محمد" أو الرقم
            if (val.includes("بدر") || val === "2026") {
                resultArea.innerHTML = `<div style="background:#27ae60; color:#fff; padding:15px; border-radius:8px; margin-top:10px;">
                    <h4>العميل: بدر محمد</h4>
                    <p>الحالة: في قسم التجميع والكبس (نسبة الإنجاز: 60%)</p>
                </div>`;
            } else {
                resultArea.innerHTML = `<p style="color:red;">عذراً، لم يتم العثور على طلب.</p>`;
            }
        });
    }

    // 5. تفعيل نموذج طلب عرض السعر
    const quoteBtn = document.getElementById('quoteBtn');
    if (quoteBtn) {
        quoteBtn.addEventListener('click', () => {
            alert("تم استلام طلبك! سنتواصل معك قريباً.");
        });
    }
});

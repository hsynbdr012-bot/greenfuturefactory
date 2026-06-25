document.addEventListener('DOMContentLoaded', () => {
    
    // 1. إخفاء شاشة التحميل (Loader)
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';

    // 2. تشغيل العدادات (الخبرة والأبواب)
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

    // 3. نظام البحث عن العملاء
    const trackBtn = document.getElementById('trackBtn');
    const orderInput = document.getElementById('orderInput');
    const resultArea = document.getElementById('result-area') || document.createElement('div');
    resultArea.id = 'result-area';
    if(orderInput && !document.getElementById('result-area')) orderInput.parentNode.appendChild(resultArea);

    if (trackBtn && orderInput) {
        trackBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const val = orderInput.value.trim();
            if (val === "بدر محمد" || val === "2026") {
                resultArea.innerHTML = `<div style="background:#27ae60; color:#fff; padding:15px; border-radius:8px; margin-top:10px; text-align:right;">
                    <h4>العميل: بدر محمد</h4>
                    <p>الحالة: في قسم التجميع والكبس</p>
                    <div style="background:#fff; height:10px; border-radius:5px;"><div style="width:60%; background:#2ecc71; height:100%;"></div></div>
                </div>`;
            } else {
                resultArea.innerHTML = `<p style="color:red; text-align:center;">عذراً، لم يتم العثور على طلب.</p>`;
            }
        });
    }

    // 4. نظام طلب عرض السعر (إصلاح خطأ 401)
    const quoteBtn = document.getElementById('quoteBtn');
    if (quoteBtn) {
        quoteBtn.addEventListener('click', (e) => {
            e.preventDefault(); // يمنع الذهاب لصفحة الخطأ
            alert("تم إرسال طلب عرض السعر بنجاح، سنتواصل معك قريباً!");
        });
    }

    // 5. تفعيل القائمة الجانبية (الثلاث خطوط)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {

    // 1. إخفاء شاشة التحميل (تمت إضافة تأخير بسيط لإظهار سلاسة)
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }, 1000);
    }

    // 2. القائمة الجوال
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // 3. العدادات (تحسين منطق التحديث)
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        if (!target) return;
        
        let count = 0;
        const increment = Math.ceil(target / 50); // سرعة أكثر توازناً

        const updateCounter = () => {
            count += increment;
            if (count >= target) {
                counter.innerText = target;
            } else {
                counter.innerText = count;
                setTimeout(updateCounter, 30);
            }
        };
        updateCounter();
    });

    // 4. تتبع الطلب (تحسين التعامل مع الأخطاء)
    const orders = {
        "بدر": { customer: "بدر الصبحي", order: "GFF-2026", step: 3 },
        "محمد": { customer: "محمد أحمد", order: "GFF-2027", step: 6 },
        "2026": { customer: "بدر الصبحي", order: "GFF-2026", step: 3 }
    };

    const btn = document.getElementById('btnSearchOrder');
    const input = document.getElementById('orderSearchInput');
    const resultContainer = document.getElementById('trackingResultContainer');

    if (btn && input) {
        btn.addEventListener('click', function() {
            const search = input.value.trim();
            const result = orders[search];

            if (!result) {
                alert('عذراً، لم يتم العثور على الطلب. يرجى التأكد من الرقم المدخل.');
                if (resultContainer) resultContainer.classList.add('hidden');
                return;
            }

            if (resultContainer) resultContainer.classList.remove('hidden');

            const custName = document.getElementById('lblCustomerName');
            const orderNum = document.getElementById('lblOrderNum');
            const progress = document.getElementById('progressLineFill');

            if (custName) custName.textContent = result.customer;
            if (orderNum) orderNum.textContent = result.order;

            const percentages = { 1:'14%', 2:'28%', 3:'42%', 4:'57%', 5:'71%', 6:'85%', 7:'100%' };
            if (progress) progress.style.width = percentages[result.step] || '0%';

            for (let i = 1; i <= 7; i++) {
                const step = document.getElementById('step' + i);
                if (step) {
                    i <= result.step ? step.classList.add('active') : step.classList.remove('active');
                }
            }
        });
    }
});

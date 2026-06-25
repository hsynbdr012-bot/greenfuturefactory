// كود شامل: يشغل الموقع ويضيف البحث دون تداخل
window.addEventListener('load', () => {
    // 1. إخفاء شاشة التحميل الأصلية (تأكد أن ID الخاص بها هو 'loader')
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => { loader.style.display = 'none'; }, 500);
    }
});

document.addEventListener('DOMContentLoaded', () => {
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
                } else {
                    counter.innerText = target;
                }
            };
            update();
        }
    });

    // 3. نظام البحث المدمج
    const trackBtn = document.getElementById('trackBtn'); // تأكد من اسم ID في HTML
    const orderInput = document.getElementById('orderInput'); // تأكد من اسم ID في HTML
    
    if (trackBtn && orderInput) {
        trackBtn.addEventListener('click', () => {
            const query = orderInput.value.trim();
            const orders = { "2026": { name: "بدر محمد", status: "في قسم التجميع والكبس", progress: "60%", color: "#27ae60" } };
            
            let resultDiv = document.getElementById('result-area');
            if (!resultDiv) {
                resultDiv = document.createElement('div');
                resultDiv.id = 'result-area';
                orderInput.parentNode.appendChild(resultDiv);
            }

            const data = orders[query] || (query === "بدر محمد" ? orders["2026"] : null);
            if (data) {
                resultDiv.innerHTML = `<div style="background:#fff; padding:15px; margin-top:10px; border-right:5px solid ${data.color};">
                    <h4>العميل: ${data.name}</h4>
                    <p>الحالة: ${data.status}</p>
                    <div style="background:#eee; height:10px;"><div style="width:${data.progress}; background:${data.color}; height:100%;"></div></div>
                </div>`;
            } else {
                resultDiv.innerHTML = `<p style="color:red;">غير موجود</p>`;
            }
        });
    }
});

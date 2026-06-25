document.addEventListener('DOMContentLoaded', () => {
    // 1. تشغيل عدادات الأرقام (الخبرة والأبواب)
    const stats = document.querySelectorAll('.stat-number');
    const speed = 200;
    stats.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    // 2. نظام التتبع الذكي (يعمل بدون ما يلمس العدادات)
    const trackBtn = document.querySelector('button'); 
    const orderInput = document.querySelector('input'); 
    
    // إنشاء حاوية للنتيجة إذا لم تكن موجودة
    let resultDiv = document.getElementById('tracking-result');
    if (!resultDiv) {
        resultDiv = document.createElement('div');
        resultDiv.id = 'tracking-result';
        resultDiv.style.marginTop = "20px";
        if (orderInput) orderInput.parentNode.appendChild(resultDiv);
    }
    
    if (trackBtn && orderInput) {
        trackBtn.addEventListener('click', (e) => {
            e.preventDefault(); // يمنع إعادة تحميل الصفحة
            const query = orderInput.value.trim();
            const orders = {
                "2026": { name: "بدر محمد", status: "في قسم التجميع والكبس", progress: "60%", color: "#27ae60" }
            };

            const data = orders[query] || (query === "بدر محمد" ? orders["2026"] : null);

            if (data) {
                resultDiv.innerHTML = `
                    <div style="background: #fff; padding: 20px; border-radius: 10px; border-right: 5px solid ${data.color}; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: right; direction: rtl;">
                        <h4 style="margin: 0 0 10px 0; color: #333;">طلب العميل: ${data.name}</h4>
                        <p style="margin: 5px 0; color: #666;">الحالة: <strong>${data.status}</strong></p>
                        <div style="background: #eee; height: 12px; border-radius: 6px; margin-top: 10px; overflow: hidden;">
                            <div style="width: ${data.progress}; background: ${data.color}; height: 100%;"></div>
                        </div>
                        <p style="margin-top: 5px; font-size: 12px; color: #888;">نسبة الإنجاز: ${data.progress}</p>
                    </div>
                `;
            } else {
                resultDiv.innerHTML = `<p style="color: #e74c3c; text-align: center; margin-top: 10px;">❌ عذراً، لم يتم العثور على طلب بهذا الاسم أو الرقم.</p>`;
            }
        });
    }
});


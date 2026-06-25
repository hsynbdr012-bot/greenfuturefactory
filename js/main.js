document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. تشغيل العدادات (الخبرة والأبواب) ---
    // هذا الكود يبحث فقط عن الأرقام ويشغلها دون التدخل في أي شيء آخر
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        if (target) {
            let count = 0;
            const update = () => {
                count += Math.ceil(target / 50); // سرعة العداد
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

    // --- 2. نظام البحث عن العملاء ---
    // نربط الزر بـ "أول زر يواجهه" و "أول خانة إدخال" لضمان العمل
    const trackBtn = document.querySelector('button'); 
    const orderInput = document.querySelector('input'); 
    
    if (trackBtn && orderInput) {
        trackBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            const query = orderInput.value.trim();
            
            // قاعدة بيانات العميل
            const orders = {
                "2026": { name: "بدر محمد", status: "في قسم التجميع والكبس", progress: "60%", color: "#27ae60" }
            };

            const data = orders[query] || (query === "بدر محمد" ? orders["2026"] : null);

            let resultDiv = document.getElementById('search-result-box');
            if (!resultDiv) {
                resultDiv = document.createElement('div');
                resultDiv.id = 'search-result-box';
                resultDiv.style.marginTop = "20px";
                orderInput.parentNode.appendChild(resultDiv);
            }

            if (data) {
                resultDiv.innerHTML = `
                    <div style="background:#fff; padding:20px; border-radius:12px; border-right:6px solid ${data.color}; box-shadow:0 4px 10px rgba(0,0,0,0.1); text-align:right; direction:rtl;">
                        <h4 style="margin:0 0 10px; color:#333;">العميل: ${data.name}</h4>
                        <p style="margin:5px 0;">الحالة الحالية: <strong>${data.status}</strong></p>
                        <div style="background:#eee; height:12px; border-radius:6px; margin-top:10px; overflow:hidden;">
                            <div style="width:${data.progress}; background:${data.color}; height:100%;"></div>
                        </div>
                        <p style="margin-top:8px; font-size:13px; color:#666;">نسبة الإنجاز: ${data.progress}</p>
                    </div>`;
            } else {
                resultDiv.innerHTML = `<p style="color:#d35400; text-align:center; font-weight:bold;">عذراً، لم يتم العثور على طلب بهذا الاسم أو الرقم.</p>`;
            }
        });
    }
});

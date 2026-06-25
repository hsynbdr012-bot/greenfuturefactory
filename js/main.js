document.addEventListener('DOMContentLoaded', () => {
    
    // 1. إلغاء الـ Loader فوراً وإجبار الموقع على الظهور
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
        loader.classList.remove('hidden');
    }

    // 2. تشغيل العدادات (الأرقام)
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

    // 3. نظام البحث المطور
    const trackBtn = document.querySelector('button'); 
    const orderInput = document.querySelector('input'); 
    
    if (trackBtn && orderInput) {
        trackBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const query = orderInput.value.trim();
            const orders = { "2026": { name: "بدر محمد", status: "في قسم التجميع والكبس", progress: "60%", color: "#27ae60" } };
            const data = orders[query] || (query === "بدر محمد" ? orders["2026"] : null);

            let resultDiv = document.getElementById('res-box');
            if (!resultDiv) {
                resultDiv = document.createElement('div');
                resultDiv.id = 'res-box';
                resultDiv.style.marginTop = "20px";
                orderInput.parentNode.appendChild(resultDiv);
            }

            if (data) {
                resultDiv.innerHTML = `<div style="background:#fff; padding:15px; border-radius:8px; border-right:5px solid ${data.color}; box-shadow:0 2px 5px rgba(0,0,0,0.1); text-align:right;">
                    <h4 style="margin:0;">العميل: ${data.name}</h4>
                    <p style="margin:5px 0;">الحالة: ${data.status}</p>
                    <div style="background:#eee; height:10px; border-radius:5px;"><div style="width:${data.progress}; background:${data.color}; height:100%;"></div></div>
                </div>`;
            } else {
                resultDiv.innerHTML = `<p style="color:red; text-align:center;">لم يتم العثور على طلب</p>`;
            }
        });
    }
});

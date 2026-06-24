document.addEventListener('DOMContentLoaded', () => {
    // محاولة إيجاد عناصر البحث بأي اسم معرف (trackBtn, trackbtn, إلخ)
    const trackBtn = document.querySelector('[id*="track"]');
    const orderInput = document.querySelector('[id*="order"]');
    const trackingResult = document.querySelector('[id*="result"]');

    if (trackBtn && orderInput && trackingResult) {
        trackBtn.addEventListener('click', () => {
            const val = orderInput.value.trim().toLowerCase();
            
            // بيانات تجريبية
            const db = {
                "badr": { name: "بدر محمد", status: "في قسم التجميع والكبس", progress: "60%", color: "#3498db" },
                "1010": { name: "عميل تجريبي", status: "مكتمل", progress: "100%", color: "#2ecc71" }
            };

            if (db[val] || (val.includes("بدر") && db["badr"])) {
                const data = db[val] || db["badr"];
                trackingResult.innerHTML = `<div style="padding:20px; background:#333; color:#fff; border-right:5px solid ${data.color}; border-radius:10px;">
                    <p>العميل: ${data.name}</p>
                    <p>الحالة: ${data.status}</p>
                    <div style="background:#555; height:10px; border-radius:5px;"><div style="width:${data.progress}; background:${data.color}; height:100%;"></div></div>
                </div>`;
            } else {
                trackingResult.innerHTML = `<p style="color:red;">لم يتم العثور على طلب باسم: ${val}</p>`;
            }
        });
    }
});

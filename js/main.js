document.addEventListener('DOMContentLoaded', () => {
    // إخفاء شاشة التحميل فوراً لضمان عمل الموقع
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }

    // نظام البحث البسيط
    const trackBtn = document.querySelector('button'); 
    const orderInput = document.querySelector('input'); 
    
    if (trackBtn && orderInput) {
        trackBtn.addEventListener('click', () => {
            const query = orderInput.value.trim();
            if (query === "بدر محمد" || query === "2026") {
                alert("✅ العميل: بدر محمد | الحالة: في قسم التجميع والكبس | الإنجاز: 60%");
            } else {
                alert("❌ لم يتم العثور على طلب بهذا الاسم أو الرقم.");
            }
        });
    }
});

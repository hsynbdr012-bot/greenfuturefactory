document.addEventListener('DOMContentLoaded', () => {
    // نستخدم محددات عامة للتأكد من التقاط العناصر
    const trackBtn = document.querySelector('button'); // يلتقط أول زر في الصفحة
    const orderInput = document.querySelector('input'); // يلتقط أول خانة إدخال
    
    if (trackBtn && orderInput) {
        trackBtn.addEventListener('click', (e) => {
            e.preventDefault(); // منع الصفحة من إعادة التحميل
            const query = orderInput.value.trim();
            
            console.log("تم الضغط، القيمة المدخلة هي: " + query); // للمراقبة

            if (query === "بدر محمد" || query === "2026") {
                alert("✅ تم العثور على طلب العميل: بدر محمد\nالحالة: في قسم التجميع والكبس\nنسبة الإنجاز: 60%");
            } else {
                alert("❌ عذراً، لم يتم العثور على طلب بهذا الاسم أو الرقم.");
            }
        });
    }
});

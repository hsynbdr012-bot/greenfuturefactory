document.addEventListener("DOMContentLoaded", function () {

const btn = document.getElementById("trackBtn");
const input = document.getElementById("orderInput");
const result = document.getElementById("trackingResult");

if (!btn || !input || !result) {
    console.log("عناصر التتبع غير موجودة");
    return;
}

btn.addEventListener("click", function () {

    const search = input.value.trim();

    if (search === "بدر") {

        result.innerHTML = `
        <div style="background:#1f2937;padding:20px;border-radius:10px;color:white;">
            <h3>📦 تتبع الطلب</h3>
            <p>العميل: بدر محمد</p>
            <p>رقم الطلب: GF001</p>
            <p>الحالة: جاري التصنيع</p>
            <p>الموقع الحالي: قسم التجميع والكبس</p>

            <div style="background:#444;height:20px;border-radius:10px;overflow:hidden;">
                <div style="background:#22c55e;height:100%;width:60%;"></div>
            </div>

            <p style="margin-top:10px;">نسبة الإنجاز 60%</p>
        </div>
        `;

    } else {

        result.innerHTML = `
        <div style="color:red;padding:15px;">
            لا يوجد طلب بهذا الاسم
        </div>
        `;

    }

});

});

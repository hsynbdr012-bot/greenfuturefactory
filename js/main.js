document.addEventListener('DOMContentLoaded', function () {

    // إخفاء شاشة التحميل
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }

    // حركة الأرقام
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target')) || 0;
        let count = 0;

        const updateCounter = () => {
            const increment = Math.ceil(target / 100);

            if (count < target) {
                count += increment;
                counter.innerText = count;
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });

    // قاعدة بيانات العملاء
    const orders = {
        "بدر": {
            customer: "بدر الصبحي",
            status: "في قسم التجميع والكبس",
            progress: 60
        },

        "محمد": {
            customer: "محمد أحمد",
            status: "جاهز للتركيب",
            progress: 100
        },

        "2026": {
            customer: "عميل تجريبي",
            status: "جاري التصنيع",
            progress: 35
        }
    };

    // البحث
    const trackBtn = document.getElementById('trackBtn');
    const orderInput = document.getElementById('orderInput');
    const resultArea = document.getElementById('result-area');

    if (trackBtn && orderInput && resultArea) {

        trackBtn.addEventListener('click', function (e) {

            e.preventDefault();

            const value = orderInput.value.trim();

            if (orders[value]) {

                const order = orders[value];

                resultArea.innerHTML = `
                <div style="background:#ffffff;padding:20px;border-radius:12px;margin-top:15px;box-shadow:0 0 10px rgba(0,0,0,.1);text-align:right;">
                    <h3>${order.customer}</h3>

                    <p><strong>الحالة:</strong> ${order.status}</p>

                    <div style="background:#ddd;height:20px;border-radius:50px;overflow:hidden;">
                        <div style="width:${order.progress}%;height:100%;background:#0f5132;"></div>
                    </div>

                    <p style="margin-top:10px;">
                        نسبة الإنجاز ${order.progress}%
                    </p>
                </div>
                `;

            } else {

                resultArea.innerHTML = `
                <div style="color:red;margin-top:15px;text-align:center;">
                    لم يتم العثور على الطلب
                </div>
                `;
            }

        });
    }

    // القائمة الجانبية
    const menuBtn = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }

});
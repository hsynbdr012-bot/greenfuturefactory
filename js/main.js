document.addEventListener('DOMContentLoaded', () => {
    // 1. شاشة التحميل (Loader)
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.classList.add('hidden'), 500);
        }, 1000);
    }

    // 2. قائمة الجوال التفاعلية (Mobile Menu)
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
        });
    }

    // 3. أنيميشن العدادات الحية (Stats Counter)
    const stats = document.querySelectorAll('.stat-number');
    const speed = 200;

    const startCounters = () => {
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
    };

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                startCounters();
                observer.unobserve(statsSection);
            }
        }, { threshold: 0.5 });
        observer.observe(statsSection);
    }

    // 4. نظام تتبع حالة الطلبات الذكي (Order Tracking System)
    const trackBtn = document.getElementById('trackBtn');
    const orderInput = document.getElementById('orderInput');
    const trackingResult = document.getElementById('trackingResult');

    if (trackBtn && orderInput && trackingResult) {
        const mockOrders = {
            "1010": { status: "في مرحلة التصميم والقص السينمائي (CNC)", progress: "25%", color: "#d4af37" },
            "2020": { status: "في قسم التجميع والكبس الحراري وبناء الهيكل", progress: "50%", color: "#3498db" },
            "3030": { status: "في مرحلة الدهان النهائي وصنفرة الجودة", progress: "75%", color: "#9b59b6" },
            "4040": { status: "الطلب مكتمل وجاهز للتوصيل والتركيب بمدينتكم", progress: "100%", color: "#2ecc71" }
        };

        trackBtn.addEventListener('click', () => {
            const orderId = orderInput.value.trim();
            
            if (orderId === "") {
                trackingResult.innerHTML = `<p style="color: #e74c3c; font-weight: bold;">الرجاء إدخال رقم الطلب أولاً!</p>`;
                trackingResult.classList.remove('hidden');
                return;
            }

            if (mockOrders[orderId]) {
                const order = mockOrders[orderId];
                trackingResult.innerHTML = `
                    <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border-right: 4px solid ${order.color}; direction: rtl; text-align: right;">
                        <p style="margin-bottom: 8px;"><strong>حالة الطلب:</strong> <span style="color: ${order.color};">${order.status}</span></p>
                        <div style="background: #222; border-radius: 10px; height: 10px; width: 100%; overflow: hidden; margin-top: 10px;">
                            <div style="background: ${order.color}; width: ${order.progress}; height: 100%; transition: width 0.5s ease;"></div>
                        </div>
                        <p style="font-size: 12px; color: #777; margin-top: 5px; text-align: left;">نسبة الإنجاز: ${order.progress}</p>
                    </div>
                `;
            } else {
                trackingResult.innerHTML = `
                    <div style="background: rgba(231, 76, 60, 0.1); padding: 15px; border-radius: 8px; border-right: 4px solid #e74c3c; direction: rtl; text-align: right;">
                        <p style="color: #e74c3c; margin: 0;">رقم الطلب غير صحيح أو غير مسجل بالنظام حالياً. (جرب الأرقام التجريبية: 1010، 2020، 3030، 4040)</p>
                    </div>
                `;
            }
            trackingResult.classList.remove('hidden');
        });
    }
});

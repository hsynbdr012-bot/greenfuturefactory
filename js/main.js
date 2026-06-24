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

    // 4. نظام تتبع حالة الطلبات الذكي والمطور (Order Tracking System)
    const trackBtn = document.getElementById('trackBtn');
    const orderInput = document.getElementById('orderInput');
    const trackingResult = document.getElementById('trackingResult');

    if (trackBtn && orderInput && trackingResult) {
        // قاعدة بيانات الطلبات
        const mockOrders = {
            "1010": { name: "عميل تجريبي", status: "في مرحلة التصميم والقص السينمائي (CNC)", progress: "25%", color: "#d4af37", icon: "📐", details: "جاري تجهيز وتدقيق الأبعاد الفنية للمواد" },
            "2020": { name: "عميل تجريبي", status: "في قسم التجميع والكبس الحراري وبناء الهيكل", progress: "50%", color: "#3498db", icon: "🛠️", details: "تحت المكبس الحراري لتثبيت دعامات الـ WPC" },
            "3030": { name: "عميل تجريبي", status: "في مرحلة الدهان النهائي وصنفرة الجودة", progress: "75%", color: "#9b59b6", icon: "✨", details: "مرحلة معالجة الأسطح وتطبيق دهان الأساس المقاوم للرطوبة" },
            "4040": { name: "عميل تجريبي", status: "الطلب مكتمل وجاهز للتوصيل والتركيب بمدينتكم", progress: "100%", color: "#2ecc71", icon: "🚚", details: "تم اجتياز فحص الجودة النهائي والطلب بانتظار الشحن" },
            // طلب العميل بدر محمد
            "2026": { name: "بدر محمد", status: "في قسم التجميع والكبس الحراري وبناء الهيكل", progress: "60%", color: "#3498db", icon: "⚙️", details: "طلب إنتاج لعدد 13 باب WPC عازل تماماً ومقاوم للمياه والرطوبة" }
        };

        trackBtn.addEventListener('click', () => {
            const searchInput = orderInput.value.trim().toLowerCase();
            
            if (searchInput === "") {
                trackingResult.innerHTML = `<p style="color: #e74c3c; font-weight: bold; text-align: right; font-family: sans-serif;">الرجاء إدخال رقم الطلب أو اسم العميل أولاً!</p>`;
                trackingResult.classList.remove('hidden');
                return;
            }

            let foundOrder = null;

            // البحث برقم الطلب
            if (mockOrders[searchInput]) {
                foundOrder = mockOrders[searchInput];
            } else {
                // البحث بالاسم
                for (let key in mockOrders) {
                    if (mockOrders[key].name.toLowerCase().includes(searchInput)) {
                        foundOrder = mockOrders[key];
                        break;
                    }
                }
            }

            if (foundOrder) {
                // تصميم البطاقة المطور والفاخر للعميل
                trackingResult.innerHTML = `
                    <div style="background: rgba(255, 255, 255, 0.08); padding: 25px; border-radius: 12px; border-right: 5px solid ${foundOrder.color}; direction: rtl; text-align: right; color: #fff; box-shadow: 0 4px 15px rgba(0,0,0,0.2); font-family: sans-serif; margin-top: 20px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                            <h3 style="margin: 0; font-size: 20px; color: #fff;">طلب العميل: <span style="color: ${foundOrder.color}; font-weight: bold;">${foundOrder.name}</span></h3>
                            <span style="font-size: 28px;">${foundOrder.icon}</span>
                        </div>
                        
                        <p style="margin: 5px 0 10px 0; font-size: 16px;">
                            <strong>حالة خط الإنتاج الحالية:</strong> <br>
                            <span style="color: ${foundOrder.color}; font-weight: bold; display: inline-block; margin-top: 5px; font-size: 17px;">${foundOrder.status}</span>
                        </p>
                        
                        <p style="font-size: 14px; color: #ccc; margin: 10px 0; line-height: 1.5; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px;">
                            <strong>ملاحظة المصنع:</strong> ${foundOrder.details}
                        </p>
                        
                        <div style="margin-top: 20px;">
                            <div style="display: flex; justify-content: space-between; font-size: 13px; color: #aaa; margin-bottom: 5px;">
                                <span>مرحلة البدء</span>
                                <span style="color: ${foundOrder.color}; font-weight: bold;">نسبة الإنجاز: ${foundOrder.progress}</span>
                                <span>جاهز للتسليم</span>
                            </div>
                            <div style="background: #222; border-radius: 10px; height: 14px; width: 100%; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
                                <div style="background: ${foundOrder.color}; width: ${foundOrder.progress}; height: 100%; border-radius: 10px; transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 0 10px ${foundOrder.color};"></div>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                // رسالة الخطأ إذا لم يعثر على العميل
                trackingResult.innerHTML = `
                    <div style="background: rgba(231, 76, 60, 0.15); padding: 18px; border-radius: 10px; border-right: 5px solid #e74c3c; direction: rtl; text-align: right; font-family: sans-serif; color: #fff; margin-top: 20px;">
                        <p style="color: #e74c3c; font-weight: bold; margin: 0 0 5px 0; font-size: 16px;">⚠️ لم يتم العثور على نتائج بحث</p>
                        <p style="margin: 0; font-size: 14px; color: #ddd;">تأكد من كتابة الاسم بشكل صحيح (مثل: بدر محمد) أو استخدم رقم الطلب المباشر (2026).</p>
                    </div>
                `;
            }
            trackingResult.classList.remove('hidden');
        });
    }
});

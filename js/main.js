document.addEventListener('DOMContentLoaded', function() {

    // إخفاء شاشة التحميل
    const loader = document.getElementById('loader');
    if(loader){
        loader.style.display = 'none';
    }

    // القائمة الجوال
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if(menuBtn && navMenu){
        menuBtn.addEventListener('click', function(){
            navMenu.classList.toggle('active');
        });
    }

    // العدادات
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {

        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;

        const updateCounter = () => {

            const increment = Math.ceil(target / 100);

            if(count < target){

                count += increment;

                if(count > target){
                    count = target;
                }

                counter.innerText = count;

                setTimeout(updateCounter, 20);

            }

        };

        updateCounter();

    });

    // تتبع الطلب
    const orders = {

        "بدر": {
            customer: "بدر الصبحي",
            order: "GFF-2026",
            step: 3
        },

        "محمد": {
            customer: "محمد أحمد",
            order: "GFF-2027",
            step: 6
        },

        "2026": {
            customer: "بدر الصبحي",
            order: "GFF-2026",
            step: 3
        }

    };

    const btn = document.getElementById('btnSearchOrder');
    const input = document.getElementById('orderSearchInput');

    if(btn && input){

        btn.addEventListener('click', function(){

            const search = input.value.trim();

            const result = orders[search];

            if(!result){

                alert('لم يتم العثور على الطلب');
                return;

            }

            document.getElementById('trackingResultContainer').classList.remove('hidden');

            document.getElementById('lblCustomerName').textContent = result.customer;

            document.getElementById('lblOrderNum').textContent = result.order;

            const progress = document.getElementById('progressLineFill');

            const percentages = {
                1:'14%',
                2:'28%',
                3:'42%',
                4:'57%',
                5:'71%',
                6:'85%',
                7:'100%'
            };

            progress.style.width = percentages[result.step];

            for(let i=1;i<=7;i++){

                const step = document.getElementById('step'+i);

                if(step){

                    if(i <= result.step){
                        step.classList.add('active');
                    }else{
                        step.classList.remove('active');
                    }

                }

            }

        });

    }

});
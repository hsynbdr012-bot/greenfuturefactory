window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
    
    // تفعيل العدادات
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const update = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace('%', '');
            const inc = target / 50;
            if(count < target) {
                counter.innerText = Math.ceil(count + inc) + (counter.getAttribute('data-target').includes('%') ? '%' : '');
                setTimeout(update, 40);
            }
        };
        update();
    });
});

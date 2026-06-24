document.addEventListener('DOMContentLoaded', () => {

const trackBtn = document.getElementById('trackBtn');
const orderInput = document.getElementById('orderInput');
const trackingResult = document.getElementById('trackingResult');

const orders = {

"بدر": {
name: "بدر محمد",
order: "GF-2026-001",
status: "جاري التصنيع",
location: "قسم التجميع والكبس",
progress: 60
},

"محمد": {
name: "محمد أحمد",
order: "GF-2026-002",
status: "التغليف",
location: "المستودع",
progress: 80
},

"1010": {
name: "عميل تجريبي",
order: "1010",
status: "تم التسليم",
location: "تم التسليم للعميل",
progress: 100
}

};

trackBtn.addEventListener('click', () => {

const search = orderInput.value.trim();

if (orders[search]) {

const data = orders[search];

trackingResult.innerHTML = `

<div style="
background:#1f2937;
padding:20px;
border-radius:15px;
color:white;
margin-top:20px;
">

<h3>📦 تتبع الطلب</h3>

<p><strong>العميل:</strong> ${data.name}</p>

<p><strong>رقم الطلب:</strong> ${data.order}</p>

<p><strong>الحالة الحالية:</strong> ${data.status}</p>

<p><strong>موقع الأبواب:</strong> ${data.location}</p>

<div style="
width:100%;
height:20px;
background:#444;
border-radius:10px;
overflow:hidden;
margin-top:10px;
">

<div style="
width:${data.progress}%;
height:100%;
background:#22c55e;
"></div>

</div>

<p style="margin-top:10px;">
نسبة الإنجاز ${data.progress}%
</p>

</div>

`;

} else {

trackingResult.innerHTML = `
<div style="
background:#7f1d1d;
padding:15px;
border-radius:10px;
color:white;
margin-top:20px;
">
❌ لا يوجد طلب بهذا الاسم أو الرقم
</div>
`;

}

});

});

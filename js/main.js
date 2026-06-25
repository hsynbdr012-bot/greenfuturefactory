document.addEventListener('DOMContentLoaded', function() {

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

if(!btn || !input) return;

btn.addEventListener('click', function() {

const search = input.value.trim();

const result = orders[search];

if(!result){

alert('لم يتم العثور على الطلب');

return;

}

document.getElementById('trackingResultContainer').classList.remove('hidden');

document.getElementById('lblCustomerName').textContent =
result.customer;

document.getElementById('lblOrderNum').textContent =
result.order;

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

if(i <= result.step){

step.classList.add('active');

}else{

step.classList.remove('active');

}

}

});

});
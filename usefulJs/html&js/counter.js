'use stricts';

const numberBox = document.querySelector('.numberbox');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');


plusBtn.onclick = () => {
    const current = parseInt(numberBox.innerText);
    numberBox.innerText = current + 1;
};

minusBtn.onclick = () => {
    const current = parseInt(numberBox.innerText);
    numberBox.innerText = current - 1;
}

function get() {

    let sell = numberBox.textContent;
    const value = document.querySelector('.value')
    
    if(sell > 0) {
    value.innerText = `'${sell}'개를 주문합니다.`
    } else {
        value.innerText = '1개 이상 주문을 해야합니다.'
    }
}
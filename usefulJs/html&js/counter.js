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
    value.innerText = `${sell}개 주문`
}
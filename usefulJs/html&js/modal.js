const btn = document.getElementById('modal_btn');
const modal = document.querySelector('.modal_background');
const closeBtn = document.getElementById('modal_close');

btn.onclick = () => {
    modal.classList.remove('hide');
}

closeBtn.onclick =() => {
    modal.classList.add('hide');
}
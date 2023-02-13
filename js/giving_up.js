let btn_close = document.getElementById('btn_close');
let login_register = document.getElementById('login_register');

btn_close.addEventListener('click', () => {
    login_register.style.display = 'none';
    cover.style.display = 'none';
    body.style.overflow = 'auto';
});

let agree = document.getElementById('agree');
let cover = document.getElementById('cover');
let body = document.querySelector('body');

agree.addEventListener('click', () => {
    cover.style.display = "block";
    login_register.style.display = "flex";
    body.style.overflow = 'hidden';
});

document.addEventListener('click', e => {
    if(e.target.classList.contains('cover')){
        login_register.style.display = 'none';
        cover.style.display = 'none';
        body.style.overflow = 'auto';
    }
})
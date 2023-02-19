let btn_close = document.getElementById('btn_close');
let login_register = document.getElementById('login_register');

btn_close.addEventListener('click', () => {
    login_register.style.display = 'none';
    cover1.style.display = 'none';
    body.style.overflow = 'auto';
});

let agree = document.getElementById('agree');
let cover1 = document.getElementById('cover1');
let body = document.querySelector('body');

agree.addEventListener('click', () => {
    cover1.style.display = "block";
    login_register.style.display = "flex";
    body.style.overflow = 'hidden';
});

document.addEventListener('click', e => {
    if(e.target.classList.contains('cover1')){
        login_register.style.display = 'none';
        cover1.style.display = 'none';
        body.style.overflow = 'auto';
    }
})
/********************** nav_btn **********************/
let nav_btn = document.getElementById('nav_btn');
let nav_bar = document.getElementById('nav_bar');
let cover = document.getElementById('cover');
nav_btn.addEventListener('click', e => {
    if(nav_bar.style.cssText == ''){
        nav_bar.style.cssText = 'right: 0; transition: all .5s ease;';
        cover.classList.add('cover');
    }else{
        nav_bar.style.cssText = '';
        cover.classList.remove('cover');
    };
});

document.addEventListener('click', e => {
    if(e.target.classList.contains('cover')){
        nav_bar.style.cssText = '';
        cover.classList.remove('cover');
    };
});


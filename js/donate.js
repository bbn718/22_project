

let body = document.querySelector('body');
function removeActive(){
    document.getElementById('container').classList.remove('is-active');
    document.querySelector('.cover1').classList.remove('display_block');
    body.style.overflow = 'auto';
};

function addActive(){
    document.getElementById('container').classList.add('is-active');
    document.querySelector('.cover1').classList.add('display_block');
    body.style.overflow = 'hidden';
};


// window.onclick = function(event){
//     var container = document.getElementById('container');
//     var modal = document.getElementById('cover');
//     if(event.target == modal){
//         modal.styleList.add('display_none');
//         container.styleList.remove('is-active');
//     };
// }


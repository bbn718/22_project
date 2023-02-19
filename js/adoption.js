/****************** search function ******************/
let search_button = document.getElementById('search_button');
let select = document.querySelectorAll('select');

search_button.addEventListener('click', e => {
    for(let i = 0; i < select.length; i++){
        if(select[i].selectedIndex == ''){
            select[i].style.cssText = 'border-color: red;';
        }else{
            select[i].style.borderColor = '';
        };
    };
});


for(let i = 0; i < select.length; i++){
    select[i].addEventListener('change', e => {
        if(select[i] == ''){
            select[i].style.cssText = 'border-color: red;';
        }else{
            select[i].style.borderColor = '';
        };
    });
};


/****************** search filter function ******************/
let all_btn = document.getElementById('all');
let cat_btn = document.getElementById('cat');
let dog_btn = document.getElementById('dog');
let pet_card = document.getElementsByClassName('pet_card');
let cat_card = document.getElementsByClassName('cat_card');
let dog_card = document.getElementsByClassName('dog_card');

all_btn.addEventListener('click', function(){

    for(let i = 0; i < pet_card.length; i++){
        if(all_btn.classList.contains('unfocus')){
            pet_card[i].classList.remove('display_none');
        }else{
            pet_card[i].classList.add('display_none');
        };
    };

    if(all_btn.classList.contains('unfocus')){
        all_btn.classList.remove('unfocus');
    }else{
        all_btn.classList.add('unfocus');
    };

    if(cat_btn.classList.contains('focus')){
        cat_btn.classList.remove('focus');
    };

    if(dog_btn.classList.contains('focus')){
        dog_btn.classList.remove('focus');
    };

});

cat_btn.addEventListener('click', function(){

    for(let i = 0; i < cat_card.length; i++){
        if(cat_btn.classList.contains('focus') == false){
            cat_card[i].classList.remove('display_none');
            for(let j = 0; j < dog_card.length; j++){
                dog_card[j].classList.add('display_none');
            }
        }else{
            cat_card[i].classList.add('display_none');
        };
    };

    if(cat_btn.classList.contains('focus')){
        cat_btn.classList.remove('focus');
    }else{
        cat_btn.classList.add('focus');
    };

    if(all_btn.classList.contains('unfocus')){
        
    }else{
        all_btn.classList.add('unfocus');
    };

    if(dog_btn.classList.contains('focus')){
        dog_btn.classList.remove('focus');
    };

});

dog_btn.addEventListener('click', function(){

    for(let i = 0; i < dog_card.length; i++){
        if(dog_btn.classList.contains('focus') == false){
            dog_card[i].classList.remove('display_none');
            for(let j = 0; j < cat_card.length; j++){
                cat_card[j].classList.add('display_none');
            }
        }else{
            dog_card[i].classList.add('display_none');
        };
    };

    if(dog_btn.classList.contains('focus')){
        dog_btn.classList.remove('focus');
    }else{
        dog_btn.classList.add('focus');
    };

    if(cat_btn.classList.contains('focus')){
        cat_btn.classList.remove('focus');
    };

    if(all_btn.classList.contains('unfocus')){
        
    }else{
        all_btn.classList.add('unfocus');
    };

});


/****************** page_button function ******************/
document.addEventListener('click', e => {
    if(e.target.classList.contains('page') || e.target.classList.contains('arrow')){

        e.preventDefault();
        let page = document.querySelectorAll('.page');
        
        for(let i = 0; i < page.length; i++){
            
            if(page[i].classList.contains('color')){
                page[i].classList.remove('color');
            };
        };

        if(e.target.classList.contains('color') == false){
            e.target.classList.add('color');
        };

    };
});


/********************** go_top **********************/
function scrollFunction(){ 
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        document.getElementById("myBtn").style.display = "block";
    }else{
    document.getElementById("myBtn").style.display = "none";
}};
window.onscroll = scrollFunction;

var toTop = document.getElementById("myBtn");
toTop.addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
})

window.addEventListener('scroll', function(){
    let last = document.body.clientHeight - window.innerHeight - 25;
    if (window.scrollY >= last) {
        let myBtn = document.getElementById('myBtn');
        let arrow = document.getElementById('arrow');
        myBtn.style.backgroundColor = '#fff';
        arrow.style.color = '#9D8E7E';
    }else{
        myBtn.style.backgroundColor = '';
        arrow.style.color = '';
    };
});
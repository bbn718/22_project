/****************** search filter function ******************/
let all_btn = document.getElementById('all');
let cat_btn = document.getElementById('cat');
let dog_btn = document.getElementById('dog');
let pet_card = document.getElementsByClassName('pet_card');
let cat_card = document.getElementsByClassName('cat_card');
let dog_card = document.getElementsByClassName('dog_card');

all_btn.addEventListener('click', function(){

    for(let i = 0; i < pet_card.length; i++){
        if(pet_card[i].classList.contains('display_none')){
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
        if(cat_card[i].classList.contains('display_none')){
            cat_card[i].classList.remove('display_none');
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
        if(dog_card[i].classList.contains('display_none')){
            dog_card[i].classList.remove('display_none');
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

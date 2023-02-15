let all = document.getElementById('all');
let news = document.getElementById('news');
let activity = document.getElementById('activity');
let search = document.getElementById('search');
let all_el = document.querySelectorAll('.all_el')
let news_el = document.querySelectorAll('.news_el');
let activity_el = document.querySelectorAll('.activity_el');
let official_el = document.querySelectorAll('.official_el');

all.addEventListener('click', () => {

    for(let i = 0; i < all_el.length; i++){
        if(all.classList.contains('focus') == false){
            all_el[i].style.display = 'block';
        }else{
            all_el[i].style.display = 'none';
        };
    };

    if(all.classList.contains('focus')){
        all.classList.remove('focus');
    }else{
        all.classList.add('focus');
    };

    if(news.classList.contains('focus')){
        news.classList.remove('focus');
    };

    if(activity.classList.contains('focus')){
        activity.classList.remove('focus')
    };

    if(search.classList.contains('focus')){
        search.classList.remove('focus')
    };

});

news.addEventListener('click', () => {

    for(let i = 0; i < news_el.length; i++){
        if(news.classList.contains('focus') == false){
            news_el[i].style.display = 'block';
            for(let j = 0; j < activity_el.length; j++){
                activity_el[j].style.display = 'none';
            };
            for(let n = 0; n < official_el.length; n++){
                official_el[n].style.display = 'none';
            }
            
        }else{
            news_el[i].style.display = 'none';
        };
    };

    if(news.classList.contains('focus')){
        news.classList.remove('focus');
    }else{
        news.classList.add('focus');
    };

    if(all.classList.contains('focus')){
        all.classList.remove('focus');
    };

    if(activity.classList.contains('focus')){
        activity.classList.remove('focus')
    };

    if(search.classList.contains('focus')){
        search.classList.remove('focus')
    };

});

activity.addEventListener('click', () => {

    for(let i = 0; i < activity_el.length; i++){
        if(activity.classList.contains('focus') == false){
            activity_el[i].style.display = 'block';
            for(let j = 0; j < news_el.length; j++){
                news_el[j].style.display = 'none';
            };
            for(let n = 0; n < official_el.length; n++){
                official_el[n].style.display = 'none';
            }
        }else{
        activity_el[i].style.display = 'none';
        };
    };
    

    if(activity.classList.contains('focus')){
        activity.classList.remove('focus');
    }else{
        activity.classList.add('focus');
    };

    if(all.classList.contains('focus')){
        all.classList.remove('focus');
    };

    if(news.classList.contains('focus')){
        news.classList.remove('focus')
    };

    if(search.classList.contains('focus')){
        search.classList.remove('focus')
    };

});

search.addEventListener('click', () => {

    for(let i = 0; i < official_el.length; i++){
        if(search.classList.contains('focus') == false){
            official_el[i].style.display = 'block';
            for(let j = 0; j < news_el.length; j++){
                news_el[j].style.display = 'none';
            };
            for(let n = 0; n < activity_el.length; n++){
                activity_el[n].style.display = 'none';
            }
        }else{
        official_el[i].style.display = 'none';
        };
    };

    if(search.classList.contains('focus')){
        search.classList.remove('focus');
    }else{
        search.classList.add('focus');
    };

    if(all.classList.contains('focus')){
        all.classList.remove('focus');
    };

    if(news.classList.contains('focus')){
        news.classList.remove('focus')
    };

    if(activity.classList.contains('focus')){
        activity.classList.remove('focus')
    };

});
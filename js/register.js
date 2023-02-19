let count2 = 0;

login_btn.addEventListener('click', e => {
    for(let i = 0; i < input.length; i++){
        if(input[1].value !== input[2].value){
            count2 = 1
        };
    };
    if(count2 == 1){
        alert('密碼與確認密碼不同！');
    };
});
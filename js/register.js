login_btn.addEventListener('click', e => {
    let count2 = 0;
    for(let i = 0; i < input.length; i++){
        if(input[1].value !== input[2].value){
            count2 = 1
        };
    };
    if(count2 == 1){
        alert('密碼與確認密碼不同！');
        let input_password = document.querySelectorAll(`input[type="password"]`)
        for(let i = 0; i < input_password.length; i++){
            input_password[i].style.borderColor = 'red';
        };
    };
});
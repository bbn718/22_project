$(`input[type="email"]`).focus(function(){
    $(this).attr('placeholder', '')
}).blur(function(){
    if($(this).val() == ''){
        $(this).attr('placeholder','請輸入Email')
        $(this).css('border-color', 'red')
    }else{
        $(this).css('border-color','#D9D9D9')
    };
});

$(`input[type="password"]`).focus(function(){
    $(this).attr('placeholder', '')
}).blur(function(){
    if($(this).val() == ''){
        $(this).attr('placeholder','請輸入密碼')
        $(this).css('border-color','red')
    }else{
        $(this).css('border-color','#D9D9D9')
    };
});

$(`login_account`).click(function(){
    if($(`input`).val() == ''){
        $(`input`).css('border-color','red')
    };
});

/*********************** input alert ***********************/
let input = document.querySelectorAll('input');
let login_btn = document.getElementById('login_account')
let count1 = 0;

// for(let i = 0; i < input.length; i++){
//     input[i].addEventListener('click', e => {
//         if(input[i].value == ''){
//             input[i].style.cssText = 'border: 1px solid red;';
//         }else{
//             input[i].style.cssText = '';
//         };
//     });
// };

login_btn.addEventListener('click', e => {
    for(let i = 0; i < input.length; i++){
        if(input[i].value == ''){
            count1++;
        };
    };
    if(count1 > 0){
        alert(`請確認您已輸入帳號及密碼
        共有 ${count1} 筆資料尚未輸入`);
    };
});


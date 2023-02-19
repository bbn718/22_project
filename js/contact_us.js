/************** focus 和 blur 事件 **************/
$(`input[type="text"]`).focus(function(){
    $(this).attr('placeholder', '')
    if($(this).attr('placeholder', '')){
        $(this).css({border: '',});
    };
}).blur(function(){
    if($(this).val() == ''){
        $(this).attr('placeholder','請輸入您的名稱')
        $(this).css({border: '2px solid red',})
    };
})

$(`input[type="email"]`).focus(function(){
    $(this).attr('placeholder', '')
    if($(this).attr('placeholder', '')){
        $(this).css({border: '',});
    };
}).blur(function(){
    if($(this).val() == ''){
        $(this).attr('placeholder','請輸入您的電子郵件')
        $(this).css({border: '2px solid red',});
    };
});

$(`textarea`).focus(function(){
    $(this).attr('placeholder', '')
    if($(this).attr('placeholder', '')){
        $(this).css({border: '',});
    };
}).blur(function(){
    if($(this).val() == ''){
        $(this).attr('placeholder','請輸入詳細內容')
        $(this).css({border: '2px solid red',});
    };
});

/************** 送出 click 事件 **************/
let submit = document.querySelector('button');
let name1 = document.getElementById('name');
let email = document.getElementById('email');
let content = document.getElementById('content');

submit.addEventListener('click', e => {
    if(name1.value == ''){
        name1.style.cssText = 'border: 2px solid red;';
    };
    if(email.value == ''){
        email.style.cssText = 'border: 2px solid red;';
    };
    if(content.value == ''){
        content.style.cssText = 'border: 2px solid red;';
    };
    if(name1.value == 0 || email.value == '' || content.value == ''){
        alert('請勿留空！');
    }else{
        alert('已收到您的消息！感謝回饋^_^')
    };
});
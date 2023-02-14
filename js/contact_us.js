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


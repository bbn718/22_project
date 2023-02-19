/******************** 表單輸入時 placehoder 消失 ********************/
$(`input[type="text"]`).focus(function(){
    $(this).attr('placeholder', '')
    if($(this).css({borderBottom: '2px solid red',})){
        $(this).attr('style', '');
    };
}).blur(function(){
    if($(this).val() == ''){
        $(this).attr('placeholder','請輸入')
        $(this).css({
            borderBottom: '2px solid red',
        });
    }else{
        $(this).attr('style', '');
    };
});

$(`input[type="email"]`).focus(function(){
    $(this).attr('placeholder', '')
}).blur(function(){
    if($(this).val() == ''){
        $(this).attr('placeholder','請輸入')
    };
});

$(`input[type="number"]`).focus(function(){
    $(this).attr('placeholder', '')
    if($(this).css({borderBottom: '2px solid red',})){
        $(this).attr('style', '');
    };
}).blur(function(){
    if($(this).val() == ''){
        $(this).attr('placeholder','請輸入')
        $(this).css({
            borderBottom: '2px solid red',
        });
    }else{
        $(this).attr('style', '');
    };
});

$('select').focus(function(){
    if($(this).css({
        border: '1px solid red',
    })){
        $(this).attr('style', '');
    };
}).blur(function(){
    if($(this).val() == '1'){
        $(this).css({
            border: '1px solid red',
        });
    }else{
        $(this).attr('style', '');
    };
});

$(`textarea`).focus(function(){
    $(this).attr('placeholder', '')
}).blur(function(){
    if($(this).val() == ''){
        $(this).attr('placeholder','請輸入')
    };
});

$('#other').focus().blur(function(){
    if($(this).val().length == 0){
        $('#name_para').html('');
    };
});

$('#adopt').focus().blur(function(){
    if($(this).val().length == 0){
        $('#adopt_para').html('');
    };
});
/******************** textarea 下顯示剩餘可輸入字數 ********************/
$(function(){
    let otherTextMax = $('#other').attr('maxlength');
    let adoptTextMax = $('#adopt').attr('maxlength');
    // $('#name_para').html(`<span style="color: red;">※ 剩餘字數為${textMax}</span>`)

    $('#other').keyup(function(){
        let textLength = $(this).val().length;
        $('#name_para').html(`<span style="color: red; font-size: 12px; line-height: 1px;">※ 還可輸入 ${otherTextMax - textLength} 個字</span>`);
    });

    $('#adopt').keyup(function(){
        let textLength = $(this).val().length;
        $('#adopt_para').html(`<span style="color: red; font-size: 12px;">※ 還可輸入 ${adoptTextMax - textLength} 個字</span>`);
    });
});

// let other = document.getElementById('other');
// let name_para = document.getElementById('name_para')
// let textMax = other.getAttribute('maxlength');
// name_para.innerHTML = `<span style="font-size: 12px; color: red;">※ 剩餘字數為 ${textMax}</span>`


/******************** 表單送出未打勾則跳出彈窗 ********************/
let alert_el = document.getElementById('alert');
let send = document.getElementById('send');
let body = document.querySelector('body');
let check = document.getElementById('checkbox');
let input_val = document.querySelectorAll('input');
let input_text_val = document.querySelectorAll('input[type=text]');
let input_num_val = document.querySelector('input[type=number]');
let textarea_val = document.querySelectorAll('textarea');
let select_val = document.querySelectorAll('select');
let input_file_val = document.querySelector('input[type=file]');

send.addEventListener('click', e => {

    e.preventDefault();

    let isInvalid = false;
    for(let i = 0; i < input_val.length; i++){
        
        if(input_val[i].value == ''){
            isInvalid = true;
            break;
        };
    };

    if((check.checked) && (isInvalid == false)){
        alert_el.style.display = 'inline-block';
        cover.style.display = 'block';
        body.style.overflow = 'hidden';
        setTimeout(function(){
            window.location.assign('../index.html')
        }, 5000);
        
        let countdown_el = document.getElementById('countdown');
        let timeleft = 5;
        let countdown = setInterval(function(){
            timeleft--;
    
            if(timeleft <= 0){
                clearInterval(countdown);
            }
    
            countdown_el.innerHTML = timeleft;
        }, 1000);

    };

    if(isInvalid){
        alert('請將資料填妥！');
        for(let i = 0; i < input_text_val.length; i++){
            if(input_text_val[i].value == ''){
                input_text_val[i].style.cssText = 'border-bottom: 2px solid red;';
            };
        };
        if(input_num_val.value == ''){
            input_num_val.style.cssText = 'border-bottom: 2px solid red;';
        }
        for(let i = 0; i < textarea_val.length; i++){
            if(textarea_val[0].value == ''){
                textarea_val[0].style.cssText = 'border: 1px solid red;';
            };
        };
        for(let i = 0; i < select_val.length; i++){
            if(select_val[i].selectedIndex == ''){
                select_val[i].style.cssText = 'border: 1px solid red;';
            };
        };
        if(input_file_val.files.length == 0){
            input_file_val.style.color = 'red';
        }
    };

    if(check.checked == false){
        alert('請詳閱刊登條款後打勾！');
    };

});



// document.addEventListener('click', e => {
//     if(e.target.classList.contains('cover')){
//         alert_el.style.display = 'none';
//         cover.style.display = 'none';
//         body.style.overflow = 'auto';
//     };
// });


/******************** 表單送出未打勾則跳出彈窗 ********************/

/******************** 表單輸入時 placehoder 消失 ********************/
$(`input[type="text"]`).focus(function(){
    $(this).attr('placeholder', '')
    if($(this).css({borderBottom: '2px solid red',})){
        $(this).attr('style', '');
    }
}).blur(function(){
    if($(this).val() == ''){
        $(this).attr('placeholder','請輸入')
        $(this).css({
            borderBottom: '2px solid red',
        })
    }else{
        $(this).attr('style', '');
    }
})

$(`input[type="email"]`).focus(function(){
    $(this).attr('placeholder', '')
}).blur(function(){
    if($(this).val() == ''){
        $(this).attr('placeholder','請輸入')
    }
})

$(`input[type="number"]`).focus(function(){
    $(this).attr('placeholder', '')
    if($(this).css({borderBottom: '2px solid red',})){
        $(this).attr('style', '');
    }
}).blur(function(){
    if($(this).val() == ''){
        $(this).attr('placeholder','請輸入')
        $(this).css({
            borderBottom: '2px solid red',
        })
    }else{
        $(this).attr('style', '');
    }
})

$(`textarea`).focus(function(){
    $(this).attr('placeholder', '')
}).blur(function(){
    if($(this).val() == ''){
        $(this).attr('placeholder','請輸入')
    }
})

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

send.addEventListener('click', e => {
    e.preventDefault();
    if(check.checked){
        alert_el.style.display = 'inline-block';
        cover.style.display = 'block';
        body.style.overflow = 'hidden';
    }else{
        alert('請詳閱後打勾！');
    };
    

});

document.addEventListener('click', e => {
    if(e.target.classList.contains('cover')){
        alert_el.style.display = 'none';
        cover.style.display = 'none';
        body.style.overflow = 'auto';
        window.location.assign('../index.html')
    };
});


/******************** 表單送出未打勾則跳出彈窗 ********************/

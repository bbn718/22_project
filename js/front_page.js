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
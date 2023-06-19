$(function(){
    var timer=setInterval(()=>{
        $(".tanchuang").show();
    },2000);
    
    $(".xiazai").click(function(){
        $(".tanchuang").hide();
        clearInterval(timer)
    })
    $('.box4_right_mingci').click(function(){
        window.location.href="http://127.0.0.1:5500/html/author.html"
    })
})
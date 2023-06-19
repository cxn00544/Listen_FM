
window.addEventListener('load',function(){
    var yougao_nav_two = document.querySelector('.yougao_nav_two');
    // var newname = document.querySelector('.newname');
    var flag=true;

    yougao_nav_two.onmouseover= function(){
        yougao_nav_two.style.backgroundColor='rgb(255,192,203)'
    }

    yougao_nav_two.onmouseout= function(){
        yougao_nav_two.style.backgroundColor='#fff'
    }
  


    var tanchuang = document.querySelector('.tanchuang')
     var xiazai = document.querySelector('.xiazai')
    var timer=setInterval(()=>{
        tanchuang.style.display='block';
    },2000);
    
    xiazai.onclick=(function(){
        tanchuang.style.display='';
        clearInterval(timer)
    })
})
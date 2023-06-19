window.addEventListener('load',function(){
    var  mySwiper=new Swiper('.swiper',{
        loop:true,
        pagination:{
            el:'.swiper-pagination',
        },
        autoplay:{
            delay:1000,
         
        }
    })
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
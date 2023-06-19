window.addEventListener('load',function(){
var spanma = document.querySelector('.span2');
var erweima = document.querySelector('.author_box1_text_middle_right');
spanma.onmouseover = function(){
    erweima.style.display='block'
}
spanma.onmouseout = function(){
    erweima.style.display=''
};

var text=document.querySelector('textarea');
        var btn=document.getElementById('btn');
        // var ul=document.querySelector('.liuyanqu');
        var btn2=document.querySelector('.btn2');
        var liuyanqu = document.querySelector(".liuyanqu");
        var xiaolain = document.querySelector(".xiaolain");
        var biaoq = document.querySelector(".biaoq");
        var zhuiju_btn= document.querySelector('.zhuiju_btn')
        
        xiaolain.onmouseover = function(){
            biaoq.style.display='block'
        }
        xiaolain.onmouseout = function(){
            biaoq.style.display=''
        };
        //本地存储用户的评价的内容
        btn.onclick = function(){
            text.style.backgroundColor = '#fff';
            text.style.border = '1px solid blue';
            if(text.value == ''){
                alert('内容不能为空');
                return false;
            }else{
                // 发布评论时创建动态节点，div盒子里面包含p和span元素
                var msg_box = document.createElement('div');
                var p = document.createElement('p')
                var span =document.createElement('span')
                // 获取时间
                var date = new Date();
                var month = date.getMonth()+1;
                // 添加节点msg_box到父盒子b_box里
                liuyanqu.insertBefore(msg_box,liuyanqu.children[0]);
                // 给盒子添加样式
                msg_box.className='msg_box';
                // 将文本框的文字内容添加到p元素里，并给p元素增加删除功能
                p.innerHTML = text.value + "<a href='javascript:;'>删除</a>";
                // 将时间添加到span元素里
                span.innerHTML = date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
                // 给msg_box添加p和span元素
                msg_box.appendChild(p);
                msg_box.appendChild(span);
                // 发表成功后，清空文本框内容
                text.value='';
                // 删除元素
                var a = document.querySelectorAll('a');
                for (var i=0;i<a.length;i++){
                    a[i].onclick = function(){
                        liuyanqu.removeChild(this.parentNode.parentNode);
                    }
                }
            }
        }
//点击弹出提示收藏成功
zhuiju_btn.onclick = function(){
    alert('收藏成功，请在我在收藏夹里查看')
}
//弹窗

var tanchuang = document.querySelector('.tanchuang')
var xiazai = document.querySelector('.xiazai')
var timer=setInterval(()=>{
   tanchuang.style.display='block';
},2000);

xiazai.onclick=(function(){
   tanchuang.style.display='';
   clearInterval(timer)
})
//不允许复制
var author_box1 = document.querySelector('.author_box1');
author_box1.addEventListener('contextmenu',function(e){
    e.preventDefault();
})
//禁止复制文字
author_box1.addEventListener('selectstart',function(e){
    e.preventDefault();
})
      
})

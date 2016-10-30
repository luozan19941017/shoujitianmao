$(function() {
    var mySwiper = new Swiper('#one', {
        direction: 'horizontal',
        loop: false,
        // 如果需要分页器
        pagination: '.swiper-pagination',
    });
    var mySwiper = new Swiper('#two', {
        direction: 'vertical',
        loop: false,
        autoplay:1000
    });
    var mySwiper = new Swiper('.three', {
        direction: 'horizontal',
        loop: false
    });
    //$('.header').scrollTop(500);
    window.onscroll=function(){
        var hh=document.body.scrollTop||document.documentElement.scrollTop;
    if(hh>500){
        $('.header').css({  background:'#f32d2d'})
        }
    if(hh<500){
        $('.header').css({ background:'-webkit-linear-gradient(top,rgba(0,0,0,.7),rgba(0,0,0,0))'})
      }
    }
    $('.liebiao').on('click',function(){
        $('.daohang').toggleClass('enter')

    })
    $('.daohang .right').on('click',function(){
        $('.daohang').toggleClass('enter')
    })
    var index;
    var lis=$('.list li');
    var list=$('.list-box li');
    lis[0].style.background='#fff'
   for(var i=0;i<lis.length;i++){
       lis[i].index=i;
       lis[i].onclick=function(){
           for(var j=0;j<lis.length;j++){
               lis[j].style.background='';
               list[j].style.display='none'
           }
           lis[this.index].style.background='#fff';
           list[this.index].style.display='block'

       }
   }

})

$(document).ready(function(){
    $('#fullpage').fullpage({
        autoScrolling:true,
        onLeave:function(index, nextIndex, direction){
            switch(nextIndex){
                case 2:{
                    showPage2();
                }
                break;
                case 3:{
                    showPage3();
                }
                break;
                case 4:{
                    showPage4();
                }
                break;
                case 5:{
                    // if(index==4){
                        showPage5();
                    // }
                    
                }
                break;
                case 6:{
                    showPage6();
                }
                break;
                case 7:{
                    showPage7();
                }
                break;
                case 8:{
                    showPage8();
                }
                break;
                case 9:{
                    showPage9();
                }
                break;
            }
        }
    });
    showPage2();
    // $.fn.fullpage.moveTo(5);
    // showPage5();

    

});
var showPage1=function(){
    $('.page1 .liner2').animate({
        left:'100%',
    },1000,'linear',showPage1Title);
}
var showPage1Title = function(){
        $('.page1 .title-bot').animate({
            height:'6%'
        },500);
        $('.page1 .title-top').animate({
            height:'4%'
        },500);
        $('.page1 .liner1').animate({
            top:'50%'
        },1000,'swing');        
        $('.page1 .intro').animate({
            top:'65%'
        },1000,'swing',function(){
            $('.arrow').show();
        });
    }
var showPage2=function(){
    $('.page2 .title').css('animation','zdZoom2 1s')
    var t1 = setTimeout(function(){
        $('.page2 .text').css('display','block');
        $('.page2 .textTop img').css('animation','zdFadeUp 1s')
        $('.page2 .textMid img').css('animation','zdFadeUp 2s')
        $('.page2 .textBot img').css('animation','zdFadeUp 3s')
    },1000)
    var t2 = setTimeout(function(){
        $('.arrow').css('display','block');
    },5000)
}
var showPage3=function(){
    
}
var showPage4=function(){
    
}
var showPage5=function(){
    // console.log('5')
    $('.page5 .title').css('animation','zdZoom2 1s')
    var t1 = setTimeout(function(){
        $('.page5 .text').css('display','block');
        $('.page5 .textTop img').css('animation','zdFadeUp 1s')
        $('.page5 .textMid img').css('animation','zdFadeUp 2s')
        $('.page5 .textBot img').css('animation','zdFadeUp 3s')
        $('.page5 .textEnd img').css('animation','zdFadeUp 3.5s')
    },1000)
    var t2 = setTimeout(function(){
        $('.arrow').css('display','block');
    },10000)
    
}
var showPage6=function(){
    
}
var showPage7=function(){
    
}
var showPage8=function(){
    // console.log('8')
     $('.page8 .title').css('animation','zdZoom2 1s')
    setTimeout(function(){
        $('.page8 .text').css('display','block');
        $('.page8 .title').css('animation','zdZoom2 1s')
        $('.page8 .textTop img').css('animation','zdFadeUp 1s')
        $('.page8 .textMid img').css('animation','zdFadeUp 2s')
        $('.page8 .textBot img').css('animation','zdFadeUp 2.5s')
    },1000)
    setTimeout(function(){
        $('.arrow').css('display','block');
    },4000)
}
var showPage9=function(){
    
}
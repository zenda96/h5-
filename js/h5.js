$(document).ready(function(){
    $('loading').show();
})

window.onload=function(){
     wx.config({
            // 配置信息, 即使不正确也能使用 wx.ready
            debug: false,
            appId: '',
            timestamp: 1,
            nonceStr: '',
            signature: '',
            jsApiList: []
    });
    var playflag = 1;
    var audio = document.getElementById('audio');
    audio.play();
    $('.loading').hide();
    $('#controller').click(function(){
       if(playflag==1){
            audio.pause();
            playflag=0;
            $('#controller').css('animation','none');
       }else{
           audio.play();
            playflag=1;
            $('#controller').css('animation','zdLoop 5s linear infinite');
       }
    });
    $('#fullpage').fullpage({
        fixedElements:"#controller",
        autoScrolling:true,
        recordHistory: true,
        sectionsColor :'#0a173a',
        onLeave:function(index, nextIndex, direction){
            switch(nextIndex){
                case 1:{
                    hidePage1();
                    showPage1();
                    if(index==2){
                        hidePage2();
                    }
                }
                break;
                case 2:{
                    hidePage2();
                    showPage2();
                    if(index==1){
                        hidePage1();
                    }
                    if(index==3){
                        hidePage3();
                    }
                }
                break;
                case 3:{
                    hidePage3();
                    showPage3();
                    if(index==2){
                        hidePage2();
                    }
                    if(index==4){
                        hidePage4();
                    }
                }
                break;
                case 4:{
                    hidePage4();
                    showPage4();
                    if(index==3){
                        hidePage3();
                    }
                    if(index==5){
                        hidePage5();
                    }
                }
                break;
                case 5:{
                        hidePage5();
                        showPage5();
                        if(index==4){
                        hidePage4();
                        }
                        if(index==6){
                            hidePage6();
                        }
                }
                break;
                case 6:{
                    hidePage6();
                    showPage6();
                    if(index==5){
                        hidePage5();
                    }
                    if(index==7){
                        hidePage7();
                    }
                }
                break;
                case 7:{
                    hidePage7();
                    showPage7();
                    if(index==6){
                        hidePage6();
                    }
                    if(index==8){
                        hidePage8();
                    }
                }
                break;
                case 8:{
                    hidePage8();
                    showPage8();
                    if(index==7){
                        hidePage7();
                    }
                    if(index==9){
                        hidePage9();
                    }
                }
                break;
                case 9:{
                    hidePage9();
                    showPage9();
                    if(index==8){
                        hidePage8();
                    }
                }
                break;                
            }
        }
    });
    showPage1();
    // $.fn.fullpage.moveTo(7);
    // showPage9();
};
var showPage1=function(){
    $('.page1 .title-mid img').css('animation','title1 1s')
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
            $('.page1 .arrow').show();
        });
    }
var hidePage1=function(){
    $('.page1 .title-mid img').css('animation','none')
    $('.page1 .liner2').css({
        left:'0'
    });
    $('.page1 .title-bot').css({
            height:'0'
        });
        $('.page1 .title-top').css({
            height:'0'
        });
        $('.page1 .liner1').css({
            top:'80%'
        });        
        $('.page1 .intro').css({
            top:'100%'
        });
        $('.page1 .arrow').hide();
}
var showPage2=function(){
    $('.page2 .title').css('animation','zdZoom2 1.5s')
        window.p2t1 = setTimeout(function(){
        $('.page2 .text').css('display','block');
        },1000)
        $('.page2 .textTop img').css('animation','zdFadeUp 1s')
        $('.page2 .textMid img').css('animation','zdFadeUp 2s')
        $('.page2 .textBot img').css('animation','zdFadeUp 2.5s')
        $('.page2 .textTop img').css('animation-delay','0')
        $('.page2 .textMid img').css('animation-delay','0')
        $('.page2 .textBot img').css('animation-delay','0')
    
    // var t2 = setTimeout(function(){
        $('.page2 .arrow').css('display','block');
    // },5000)
}
var hidePage2=function(){
    $('.page2 .title').css('animation','none');
    if(typeof(p2t1)=='number'){
        clearTimeout(p2t1);
    }
    $('.page2 .text').css('display','none');
    $('.page2 .textTop img').css('animation','none')
    $('.page2 .textMid img').css('animation','none')
    $('.page2 .textBot img').css('animation','none')
    $('.page2 .arrow').css('display','none');
    // clearTimeout(t1);
    // clearTimeout(t2);
}
var showPage3=function(){
    $('.page3 .title').css('animation','zdZoom2 1s')
    window.p3t1 = setTimeout(function(){
        $('.page3 .imgLeftIn').animate({
            left:0
        },1000)
        $('.page3 .imgRightIn').animate({
            right:0
        },1000)
    },1000)
    // var t2 = setTimeout(function(){
        $('.page3 .arrow').css('display','block');
    // },2000)
}
var hidePage3=function(){
    if(typeof(p3t1)=='number'){
        clearTimeout(p3t1);
    }
    $('.page3 .title').css('animation','none');
    $('.page3 .imgLeftIn').css({
        left:'-350px'
    })
    $('.page3 .imgRightIn').css({
        right:'-350px'
    })
    $('.page3 .arrow').css('display','none');    
}
var showPage4=function(){
    $('.page4 .title').css('animation','zdZoom2 1.5s')
    window.p4t1 = setTimeout(function(){
        $('.page4 .imgLeftIn').animate({
            left:0
        },1000)
        $('.page4 .imgRightIn').animate({
            right:0
        },1000)
    },1000)
    // var t2 = setTimeout(function(){
        $('.page4 .arrow').css('display','block');
    // },2000)
}
var hidePage4=function(){
    if(typeof(p4t1)=='number'){
        clearTimeout(p4t1);
    }
    $('.page4 .title').css('animation','none');
    $('.page4 .imgLeftIn').css({
        left:'-450px'
    })
    $('.page4 .imgRightIn').css({
        right:'-450px'
    })
    $('.page4 .arrow').css('display','none');
}
var showPage5=function(){
    $('.page5 .title').css('animation','zdZoom2 1s')
    window.p5t1 = setTimeout(function(){
        $('.page5 .text').css('display','block');
        $('.page5 .textTop img').css('animation','zdFadeUp 1s')
        $('.page5 .textMid img').css('animation','zdFadeUp 2s')
        $('.page5 .textBot img').css('animation','zdFadeUp 3s')
        $('.page5 .textEnd img').css('animation','zdFadeUp 3.5s')
    },1000)
    // var t2 = setTimeout(function(){
        $('.page5 .arrow').css('display','block');
    // },10000)
    
}
var hidePage5=function(){
    if(typeof(p5t1)=='number'){
        clearTimeout(p5t1);
    }
    $('.page5 .title').css('animation','none')
    $('.page5 .text').css('display','none');
    $('.page5 .textTop img').css('animation','none')
    $('.page5 .textMid img').css('animation','none')
    $('.page5 .textBot img').css('animation','none')
    $('.page5 .textEnd img').css('animation','none')
    $('.page5 .arrow').css('display','none');
}
var showPage6=function(){
    $('.page6 .title').css('animation','zdZoom2 1s')
    window.p6t1 = setTimeout(function(){
        $('.page6 .imgLeftIn.mid').animate({
            left:0
        },timeplace6)
    },1000)
    var timeplace6=function(){
        $('.page6 .imgLeftIn').animate({
            left:0
        },1000)
        $('.page6 .imgRightIn').animate({
            right:0
        },1000)
    }
    // var t2 = setTimeout(function(){
        $('.page6 .arrow').css('display','block');
    // },2000)
}
var hidePage6=function(){
    if(typeof(p6t1)=='number'){
        clearTimeout(p6t1);
    }
    $('.page6 .title').css('animation','none');
    $('.page6 .imgLeftIn.mid').css({
        left:'-350px'
    })
    $('.page6 .imgLeftIn').css({
        left:'-350px'
    })
    $('.page6 .imgRightIn').css({
        right:'-350px'
    })
    $('.page6 .arrow').css('display','none');
}
var showPage7=function(){
    $('.page7 .sponsorTop').css('animation','zdFadeUp 2s')
    $('.page7 .sponsorMid').css('animation','zdFadeUp 3s')
    $('.page7 .sponsorBot').css('animation','zdFadeUp 4s')
    $('.page7 .arrow').css('display','block');
}
var hidePage7=function(){
    $('.page7 .sponsorTop').css('animation','none')
    $('.page7 .sponsorMid').css('animation','none')
    $('.page7 .sponsorBot').css('animation','none')
    $('.page7 .arrow').css('display','none');
}
var showPage8=function(){
     $('.page8 .title').css('animation','zdZoom2 1s')
    window.p8t1=setTimeout(function(){
        $('.page8 .text').css('display','block');
        $('.page8 .title').css('animation','zdZoom2 1s')
        $('.page8 .textTop img').css('animation','zdFadeUp 1s')
        $('.page8 .textMid img').css('animation','zdFadeUp 2s')
        $('.page8 .textBot img').css('animation','zdFadeUp 2.5s')
    },1000)
    // setTimeout(function(){
        $('.page8 .arrow').css('display','block');
    // },4000)
}
var hidePage8=function(){
     if(typeof(p8t1)=='number'){
        clearTimeout(p8t1);
    }
     $('.page8 .title').css('animation','none');
     $('.page8 .text').css('display','none');
     $('.page8 .title').css('animation','none')
     $('.page8 .textTop img').css('animation','none')
     $('.page8 .textMid img').css('animation','none')
     $('.page8 .textBot img').css('animation','none')
     $('.page8 .arrow').css('display','none');
}
var showPage9=function(){
    $('.page9 .title').css('animation','zdZoom2 1s')
    $('.page9 .qrcode').css('animation','zdShake 1s')
    $('.page9 .qrcode').css('animation-delay','2s')
}
var hidePage9=function(){
    $('.page9 .title').css('animation','none')
    $('.page9 .qrcode').css('animation','none')
    $('.page9 .qrcode').css('animation-delay','0')
}
$(document).ready(function(){
    $('#fullpage').fullpage({
        autoScrolling:true,
        // onLeave:function(index, nextIndex, direction){
        //     switch(nextIndex){
        //         case 2:{
        //             showPage2();
        //         }
        //         break;
        //         case 3:{
        //             showPage3();
        //         }
        //         break;
        //         case 4:{
        //             showPage4();
        //         }
        //         break;
        //         case 5:{
        //             showPage5();
        //         }
        //         break;
        //         case 6:{
        //             showPage6();
        //         }
        //         break;
        //         case 7:{
        //             showPage7();
        //         }
        //         break;
        //         case 8:{
        //             showPage8();
        //         }
        //         break;
        //         case 9:{
        //             showPage9();
        //         }
        //         break;
        //     }
        // }
    });
    showPage5();
    // $.fn.fullpage.moveTo(8);

    

});
var showPage1=function(){
    $('.page1 .liner2').animate({
        left:'100%',
    },1000,'linear',showPage1Title);
}
var showPage1Title = function(){
        $('.page1 .title-bot').animate({
            height:'6%'
        },1000);
        $('.page1 .title-top').animate({
            height:'4%'
        },1000);
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
    
}
var showPage3=function(){
    
}
var showPage4=function(){
    
}
var showPage5=function(){
    
}
var showPage6=function(){
    
}
var showPage7=function(){
    
}
var showPage8=function(){
    setTimeout(function(){
        $('.arrow').css('display','block');
    },2000)
}
var showPage9=function(){
    
}
$(document).ready(function(){
    $('#fullpage').fullpage({})

    // $('.liner2').addClass('slideOutRight')
    // setTimeout(function(){
    //     $('.liner2').addClass('slideInLeft')
    // },1)

    $('.liner2').animate({
        left:'100%',
    },1000,'linear',showPage1Title);
    
    // $('.liner2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //     // $('.liner2').show();
    //     // $('.liner2').addClass('slideInLeft');
        
        
    // });

    // $('.title-bot').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //     $('.infotext').show();
    //     $('.infotext').addClass('fadeInUp');
    //     $('.infotext').show();
    // })
});
var showPage1Title = function(){
        // $('.title-mid').show();
        // $('.title-mid').addClass('zoomIn');
        // $('.title-top').show();
        // $('.title-top').addClass('flipInX');
        
        $('.title-bot').animate({
            height:'6%'
        },1000);
        // $('.title-mid img').animate({
        //     height:'100%'
        // },1000);
        $('.title-top').animate({
            height:'4%'
        },1000);
        $('.liner1').animate({
            
            top:'50%'
        },1000,'swing')
    }


$(document).ready(function(){


    var w = $(window).width();

    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');


    // if( w < 768 ) {

    //     var adjustH = 120;

    // }else{
     
        // var adjustH = 0;
    // }


    $(".MenuGridBox .ItemBox").click(function(){

        _nChild = $(this).index();

        _goBoxPos = $(".LeapBox").eq(_nChild).offset().top;

        $body.animate({ scrollTop: _goBoxPos }, 600, 'easeInOutQuart' );

        // console.log( adjustH+ $(".LeapBox").eq(_nChild).offset().top );
 
        return false
    });



    $("#TopBtn").click(function(){

        $body.animate({  scrollTop: 0  }, 500, 'easeInOutQuart' );

        return false; 
                 
    });

});
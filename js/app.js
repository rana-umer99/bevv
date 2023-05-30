$(document).ready(function(){
    new WOW().init();

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
         //>=, not <=
        if (scroll >= 300) {
            $(".navbar").addClass("fixed-header");
        } else {
            $(".navbar").removeClass("fixed-header");
        }
    });

    $(".link-button").on('click',function(e) {
        e.preventDefault();
        var linkTo = $(this).attr('href');
        $('html, body').animate({
            scrollTop: ($(linkTo).offset().top - 72)
        }, 2000);
    });
});
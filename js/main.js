// CUSTOM OWL - CAROUSEL

$(document).ready(function(){
        
    let owl = $(".owl-carousel").owlCarousel({
        autoplay :false,
        dots:true,
        dotsData:true,
        loop:true,
        nav:false,
        items: 1

        });

        $('.owl-dot').click(function() {
            owl.trigger('to.owl.carousel',[$(this).index(), 1000]);
        })
    });

// OPEN -- CLOSE MENU

$('#chek').change(function(){
    if($(this).is(":checked")) {
        $('.nav-header').addClass('active');
    } else {
        $('.nav-header').removeClass('active');
    }
});
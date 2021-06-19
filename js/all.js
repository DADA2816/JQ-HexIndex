$(document).ready(function () {
    $('.folder').click(function (event) { 
        event.preventDefault();
        $(this).toggleClass('active'); 
        $(this).parent().find('.openlist li').slideToggle(); 
        $(this).parent().siblings().find('.openlist li').slideUp();
        $(this).parent().siblings().find('.folder').removeClass('active');;
    });

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 1500,
        autoplay: {
        delay: 1500,
        },
        effect: 'fade',
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
      
    lightbox.option({
        'resizeDuration': 800,
        'wrapAround': true
    });

    $('.back-to-top').click(function(e){
      e.preventDefault();
      $('html,body').animate({
        scrollTop:0
      },1000);
    });
});

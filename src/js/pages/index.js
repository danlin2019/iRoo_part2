
$('.section-img-photo,.item_img,.kv-img').imgLiquid();

$('.item_slick ul').slick({
    arrows:true,
     dots: false,
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 4500,
     responsive: [{
         breakpoint: 640,
         settings: {
             infinite: true,
             slidesToShow: 2,
             slidesToScroll: 1
         }
     }]
 });

 $('body').removeClass('init');
if($('#Wrapper').hasClass('indexPage')){
    $('.indexPage').addClass('active');
}

$('.kv-img-box').each(function(){
    var slides = $(this).find('.kv-img'),
        slideCount = slides.length,
        currentIndex = 0;
    $('.kv-img:eq(0)').addClass('active').stop().fadeIn();
    //setInterval
    setInterval(show,5000);

    // show function
    function show(){
        var nextIndex = (currentIndex + 1) % slideCount ;
        slides.eq(currentIndex).removeClass('active').stop().fadeOut(1000);
        slides.eq(nextIndex).addClass('active').stop().fadeIn(1000);
        currentIndex = nextIndex;
    };
});
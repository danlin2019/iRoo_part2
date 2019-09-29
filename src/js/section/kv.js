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

TweenMax.fromTo('.kv-txt-1', 0.5 , { opacity: 0 , y: 50 } , { opacity: 1 , y: 0 , delay: 1 });
TweenMax.fromTo('.kv-txt-2', 0.5 , { opacity: 0 , y: 50 } , { opacity: 1 , y: 0 , delay: 1.2 });
TweenMax.fromTo('.kv-txt-3', 0.5 , { opacity: 0 , y: 50 } , { opacity: 1 , y: 0 , delay: 1.4 });
TweenMax.fromTo('.kv-txt-4', 0.5 , { opacity: 0 , y: 50 } , { opacity: 1 , y: 0 , delay: 1.6 });
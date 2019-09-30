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
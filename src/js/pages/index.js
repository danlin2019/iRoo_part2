// @prepros-prepend ../section/kv.js
// @prepros-prepend ../section/buy.js

// 進入初始話
setTimeout(() => {
    $('body').removeClass('init');
} , 300)


if($('#Wrapper').hasClass('indexPage')){
    $('.indexPage').addClass('active');
}

// imgLiquid
$('.section-img-photo,.item_img,.kv-img').imgLiquid();


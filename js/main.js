

//Scroll

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $(".header-top").addClass("header-active");
        $(".scroll-top").addClass("active-scroll"); // Scroll Menu - Mobile
    } 
    else {
        $(".header-top").removeClass("header-active");
        $(".scroll-top").removeClass("active-scroll");
    }
    }); //missing );  

$(".scroll-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// tab
$('.list-search ul li a').click(function(){
  $('.list-search ul li a').removeClass('active');
  $(this).addClass('active');
  let data = $(this).attr('data-tab');
  $('.content-tab-list-search').slideUp('active-tab');
  $('#' + data).slideDown();
});

// number

jQuery(document).ready(function($) {
  $('.counter').counterUp({
    delay: 15,
    time: 2000
  });
});

//

$(".search-mobile a").click(function(event) {
  $(".full-search").slideDown("active-search");
});
$(".times-search a").click(function() {
  $(".full-search").slideUp("active-search");
});

//

$(".icon-mobile a").click(function(){
  $('.menu-mobile').addClass("active-mb");
});
$(".times").click(function(){
  $('.menu-mobile').removeClass('active-mb');
});

//

$(".xemthem").click(function(){
  $(this).parent().parent().find('.cmt-reply').addClass('active-cmt');
  $(this).addClass('active-x');
  $(this).parent().parent().find('.thugon').addClass('active-t');
  $(this).parent().parent().find('p').addClass('active-p');
});

$(".thugon").click(function(){
  $(this).parent().parent().find('.cmt-reply').removeClass('active-cmt');
  $(this).removeClass('active-t');
  $(this).parent().parent().find('.xemthem').removeClass('active-x');
  $(this).parent().parent().find('p').removeClass('active-p');
});

//

$('.list-next-tab-details ul li a').click(function(){
  $(".list-next-tab-details ul li a").removeClass('active');
  $(this).addClass('active');
  let data = $(this).attr('data-tab');
  $(".content-tab-details-text").removeClass('active-c');
  $('#' + data).addClass('active-c');
})
/* global $ */

$(function(){

  'use strict';

  // add the class active to selected li in navbar
  $('.navbar-light li').click(function(){

    $(this).addClass('active').siblings('li').removeClass('active');
  });



  // make the nav bar and upper bar  transparent while scrolling
    $(window).scroll(function(){
        

        var navbar = $('.navbar'),
            upperBar = $('.upper-bar');

      $(window).scrollTop() >= navbar.height() ? navbar.css('background-color' , '#ffffffde') : navbar.css('background-color' , '#fff');

      $(window).scrollTop() >= upperBar.height() ? upperBar.css('background-color' , '#08526dc7') : upperBar.css('background-color' , '#08526d');

    });


  // nice scroll
    $(function(){

      $('body').niceScroll();
    });


  // show / hide scroll up button 
    var scrollButton = $('#scroll-up');

    $(window).scroll(function(){

      if($(this).scrollTop() >= 700){
        
        scrollButton.show();

      }else{
        scrollButton.hide();
      }
    });


  //click on scroll button go up
      scrollButton.click(function(){

        $('html,body').animate({scrollTop:0},600);
      }); 


  //adjust the height of slider 
  var winH = $(window).height() ,
      upperH = $('.upper-bar').innerHeight(),
      navH = $('.navbar').innerHeight();

  $('.slider, .carousel-item').height(winH - (upperH  + navH ));

  //fit text to screen
  $(".carousel-inner h1").fitText(1.2, { minFontSize: '40px', maxFontSize: '70px' });

  $(".h1").fitText(1.2, { minFontSize: '40px', maxFontSize: '50px' });

  $(".footer h3").fitText(1.2, { minFontSize: '22px', maxFontSize: '30px' });



  // shuffel images in featured work
  $('.featured-work ul li').on('click' , function(){

    $(this).addClass('active').siblings().removeClass('active');

    if($(this).data('class')==='all'){
      
        $('.shuffle-images .col-md').css('opacity' , 1);

    }else{
      
        $('.shuffle-images .col-md').css('opacity' , '.08');
        $($(this).data('class')).css('opacity' , 1);
    }

  });


  //sync navbar links with sections
  $(window).on('scroll' , function() {
    $('.syncSection').each(function () {
      if($(window).scrollTop() > $(this).offset().top) {

        var currentId = $(this).attr('id');
        $('.navbar-light .navbar-nav .nav-item').removeClass('active');
        $('.navbar-light .navbar-nav .nav-item .nav-link[data-scroll = "' + currentId + '"]').parent().addClass('active');
      }
    });

  });


  // add count to plugin to section statistics
  $(window).scroll(function(){

    //count to
    if($(window).scrollTop() >= $('.stats').offset().top - 150) {

      $('.stats .stats-box .firstN').countTo({
        from: 0,
        to: 624,
        speed: 5000
      });
    
      $('.stats .stats-box .secondN').countTo({
        from: 0,
        to: 112,
        speed: 3000
      });
    
      $('.stats .stats-box .thirdN').countTo({
        from: 0,
        to: 595,
        speed: 5000
      });
    
      $('.stats .stats-box .fourthN').countTo({ 
        from: 0,
        to: 9,
        speed: 3000
      });


    }

  });


  
});


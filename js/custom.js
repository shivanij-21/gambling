/*========================================================================

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Project: Casine - Casino and gambling HTML5 Template
Author: ingenious_team
Version: 1.00
Last change:    11/ 05 /2020
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

========================================================================*/
$(function () {
    "use strict";

    // for navbar background color when scrolling
    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        var bc2top = $("#back-top-btn");
        var stickytop = $(".sticky-top");
        if ($scrolling >= 10) {
            stickytop.addClass('navcss');
        } else {
            stickytop.removeClass('navcss');
        }
        if ($scrolling > 150) {
            bc2top.fadeIn(1000);
        } else {
            bc2top.fadeOut(1000);
        }
    });


    // Add a click event listener to the menu icon
document.getElementById('menu-icon').addEventListener('click', function () {
    var menu = document.querySelector('.tog-nav');
    menu.classList.toggle('open');
    
    // Toggle the display of the menu icon and close icon
    var menuIcon = document.querySelector('.fa-times');
    var closeIcon = document.querySelector('.fa-align-right');
    
    if (menu.classList.contains('open')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'inline';
    } else {
        menuIcon.style.display = 'inline';
        closeIcon.style.display = 'none';
    }
});

    
      
    /* -------------------------------------
	          Running slick js				
	 	-------------------------------------- */
    $('.score-slick').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: false,
        vertical: true,
        swipeToSlide: true,
        verticalSwiping: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [

            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 6

                }
    },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 6,

                }
    }
  ]

    });

    /* -------------------------------------
             Count-down js			
    	-------------------------------------- */

    $('.count-down').countdown('2030/08/11', function (event) {
        $(this).html(event.strftime('%H'));
    });
    $('.count-down2').countdown('2030/08/01', function (event) {
        $(this).html(event.strftime('%M'));
    });

    $('.count-down3').countdown('2030/11/22', function (event) {
        $(this).html(event.strftime('%S'));
    });


    /* -------------------------------------
	          youtube video js start here			
	 	-------------------------------------- */
    jQuery("a.bla-1").YouTubePopUp({
        autoplay: 0
    }); // Disable autoplay



    /* -------------------------------------
	          Preloader				
	 	-------------------------------------- */
    $('.preloader').delay(2500).fadeOut(1000);


});
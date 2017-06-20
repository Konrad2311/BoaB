// Back to top button
jQuery(".back-top").hide();

// fade in #back-top
jQuery(function() {
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.back-top').fadeIn();
        } else {
            jQuery('.back-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    jQuery('.back-top').click(function() {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});


// Menu adjustments by scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.header-menu').addClass("header-menu_sticky");
    } else {
        $('.header-menu').removeClass("header-menu_sticky");
    }
});

// Nice jump to sections
$(document).ready(function() {
    $('a[href^="#"]').on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});
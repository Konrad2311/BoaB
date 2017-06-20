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
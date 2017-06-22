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

// Nice jump to sections & Datepicker
$(document).ready(function() {
    $('a[href^="#"]').on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    // Datepickers
    $("#datepicker-start").datepicker();
    $("#datepicker-end").datepicker();
});



// Calculator

function calcPrice() {
    var iv_zone = $("#zone").val();
    var iv_start = $("#datepicker-start").val();
    var iv_end = $("#datepicker-end").val();
    var iv_cars_num = $("#quantity").val();

    var lv_result, lv_zone_price;

    if (iv_end <= iv_start) {
        $(".price_calculation-block-summary__result").text("Falsche Eingabe");
    } else {
        switch (iv_zone) {
            case 'Europa':
                lv_zone_price = 30;
                break;
            case 'Russland':
                lv_zone_price = 20;
                break;
            case 'Amerika':
                lv_zone_price = 40;
                break;
            case 'Australia':
                lv_zone_price = 50;
                break;
            default:
                lv_zone_price = 10;
                break;
        }

        var lv_start = moment(iv_start);
        var lv_end = moment(iv_end);

        var lv_duration = moment.duration(lv_end.diff(lv_start));
        var lv_days = lv_duration.asDays();

        lv_result = lv_zone_price * lv_days * iv_cars_num;

        $(".price_calculation-block-summary__result").text(lv_result + " " + "€");
    }

}

$("select").change(calcPrice);
$("input").change(calcPrice);
calcPrice();
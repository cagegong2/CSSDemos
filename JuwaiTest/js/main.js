$(function () {

    /* carousel logic */
    var carousel = $(".carousel");
    carousel.data.index = 0;
    carousel.data.count = $(".carousel-item").length;
    $(".left-arrow").addClass("disabled");

    $(".left-arrow").click(function () {
        if (carousel.data.index === 0) {
            return;
        } else {
            $(".carousel-item").eq(carousel.data.index - 1).addClass("active").removeClass("left").removeClass("right");
            $(".carousel-item").eq(carousel.data.index).addClass("right").removeClass("active");
            carousel.data.index--;
            $(".right-arrow").removeClass("disabled");
            if (carousel.data.index === 0) {
                $(".left-arrow").addClass("disabled");
            }
        }
    });

    $(".right-arrow").click(function () {
        if (carousel.data.index === carousel.data.count - 1) {
            return;
        } else {
            $(".carousel-item").eq(carousel.data.index + 1).addClass("active").removeClass("right").removeClass("left");
            $(".carousel-item").eq(carousel.data.index).addClass("left").removeClass("active");
            carousel.data.index++;
            $(".left-arrow").removeClass("disabled");
            if (carousel.data.index === carousel.data.count - 1) {
                $(".right-arrow").addClass("disabled");
            }
        }
    });
    /* end of carousel logic */


    $('.quickLinks a').on('click', function () {

        var scrollAnchor = $(this).attr('href'),
            scrollPoint = $(scrollAnchor).offset().top - 28;

        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);

        return false;

    });

});
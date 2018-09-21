$(function() {
    var h = $(window).height();

    $(window).on("load", function() {
        setTimeout(function() { $('#loading').fadeOut(); }, 1500);
        $('html, body').animate({ scrollTop: 0 }, 1);
        if (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) {
            setTimeout(function() { $('#loading').fadeOut(); }, 1500);
            $('html, body').animate({ scrollTop: 0 }, 1);
        }
    });

    $('#loading').height(h);

    //kv animation
    if (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) {
        setTimeout(function() {
            $('.evaCity').addClass('evaCityScale');
        }, 1500);
        setTimeout(function() {
            $('.sloganTxt').addClass('sloganTxtScale');
        }, 2000);
        setTimeout(function() {
            $('.letsGo').addClass('letsGoFly');
        }, 1800);
    } else {
        setTimeout(function() {
            $('.evaCity').addClass('evaCityScale');
        }, 1500);
        setTimeout(function() {
            $('.sloganTxt').addClass('sloganTxtScale');
        }, 2000);
        setTimeout(function() {
            $('.letsGo').addClass('letsGoFly');
        }, 1800);
    }

    if ($(window).scrollTop() > h / 7) {
        $('.header').addClass("scrollAfter");
    } else {
        $('.header').removeClass("scrollAfter");
    }
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > h / 7) {
            $('.header').addClass("scrollAfter");
        } else {
            $('.header').removeClass("scrollAfter");
        }
    });

    //menu
    $('#navToggle').on('click', function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    $('#menu li').on('click', function() {
        $('#navToggle').removeClass('active');
        $('#overlay').removeClass('open');
    });
    if (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) {

    } else {
        $('#menu li').on('click', function() {
            $('#menu li').each(function() {
                $(this).removeClass('underLineActive');
            });
            $(this).addClass('underLineActive');
        });
    }

    $(window).on('scroll', function() {
        let $flightInformation = $('.flightInformation').offset().top;
        let $stroke = $('.stroke').offset().top;
        $('#menu li').removeClass('underLineActive');
        if ($(this).scrollTop() < ($flightInformation - 300)) {
            $('.menuBrisbane').addClass('underLineActive');
        } else if ($(this).scrollTop() < ($stroke - 500)) {
            $('.menuFlight').addClass('underLineActive');
        } else {
            $('.menuStroke').addClass('underLineActive');
        }
    });

    //bubbly
    bubbly({
        blur: 3,
        colorStart: "#a6ddd8",
        colorStop: "#a6ddd8",
        radiusFunc: () => 2 + Math.random() * 8,
        angleFunc: () => -Math.PI / 2,
        velocityFunc: () => Math.random() * 2,
        bubbleFunc: () => `hsla(${100 + Math.random() * 50}, 80%, 20%, .2)`,
        bubbles: 80,
    });

    //kv slider 
    $('#kv').height(h);
    $(window).on('resize', function() {
        var hr = $(window).height();
        $('#kv').height(hr);
    });
    $('.kvSlick').slick({
        fade: true,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    });

    //flightInformation slider
    $('.flightInfoSlick').slick({
        // fade: true,
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true
    });

    // scrollTo
    $('.menuBrisbane').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, '800');
    });
    $('.menuFlight').on('click', function() {
        let $flightInformation = $('.flightInformation').offset().top - 15;
        $('html, body').animate({ scrollTop: $flightInformation }, '800');
    });
    $('.menuStroke').on('click', function() {
        let $stroke = $('.stroke').offset().top - 60;
        $('html, body').animate({ scrollTop: $stroke }, '800');
    });

});
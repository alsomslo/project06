$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })



    $('.mainslide').slick({

        autoplay: 5000,
        speed: 1000,
        dots: true,
        arrows: false,

    })
    $('.mainslide').on('init afterChange', function (e, s, c) {
        const current = $('.mainslide .slick-current');
        current.addClass('on').siblings().removeClass('on');


    });
    $('.maintap li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.maintap li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.tap_detail li').eq(idx).addClass('on').siblings().removeClass('on');
    })

    $('.menu').on('click', function () {
        $('.gnb').addClass('on');

    });

    $('.close').on('click', function () {
        $('.gnb').removeClass('on')

    })
    $('.gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().stop().slideDown();
        $(this).parent().siblings().find('.sub').stop().slideUp();
    });

    $(window).on('resize', function () {
        $('.gnb .sub').removeAttr('style')
    })


});
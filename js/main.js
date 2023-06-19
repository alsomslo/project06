$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })



    $('.mainslide').slick({

        autoplay: 3000,
        speed: 2000,
        dots: true,
        arrows: false,

    })

    /*
    $('.mainmenu li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.mainmenu li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.pz_menu li').eq(idx).addClass('on').siblings().removeClass('on');
    })

*/
});
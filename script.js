$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // jumbotron

    $('.jumbotron img').css({
        'transform': 'translate(0px,' + wScroll / 3.5 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px,' + wScroll / 1.2 + '%)'
    });

    $('.jumbotron div').css({
        'transform': 'translate(0px,' + wScroll / 1.8 + '%)'
    });

    // galery

    if (wScroll > $('.galery').offset().top - 100) {
        $('.galery .card').each(function (i) {
            setTimeout(function () {
                $('.galery .card').eq(i).addClass('visible');

            }, 300 * (i + 1));
        });


    }


    // testimoni

    if (wScroll > $('.testimoni').offset().top - 200) {
        $('.testimoni .card').each(function (i) {
            setTimeout(function () {
                $('.testimoni .card').eq(i).addClass('visible');

            }, 300 * (i + 1));
        });

    }



});
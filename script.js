$('.navbar').affix({offset: {top: 20} });

// scroll blur
$(window).on('scroll', function () {
    var pixs = $(document).scrollTop()
    pixs = pixs / 100;
    $(".bg-image").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)" });
});
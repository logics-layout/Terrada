$(document).on('click', '[href="#"]', function(e) {
    return e.preventDefault();
});
// var linkTop = $('.footer__scrollTop');
// linkTop.click(function () {
//     $('html, body').animate({ scrollTop: 0 }, 500);
// });


var sliderUpdate = function (_this) {
    var slider = _this.find('.slick-slider');
    slider.each(function () {
        var _this = $(this),
            getSlick = _this.slick('getSlick'),
            options = getSlick.options,
            slickCurrentSlide = _this.slick('slickCurrentSlide');

        console.log(_this);
        // if(getSlick.$slideTrack.find('.slick-slide').eq(0).width() <= 100){
            _this.slick('unslick');
            _this.slick(options);
            if(slickCurrentSlide>0){
                _this.slick('slickGoTo', slickCurrentSlide);
            }
        // }
    });
};

var IScrollFn = function () {
    if (typeof IScroll !== "undefined" && IScroll !== null){
        $('.IScroll').each(function () {
            var visible = $(this).find('.iScrollIndicator:visible');
            if($(this).hasClass('IScroll_notMobile') && $(window).width() < 991){
                if(visible[0]){
                    visible.parent().siblings('.iScrollLoneScrollbar').remove();
                }
                return;
            }
            new IScroll(this, {
                scrollbars: true,
                mouseWheel: true,
                interactiveScrollbars: true,
                shrinkScrollbars: 'scale',
                fadeScrollbars: true,
                preventDefault: false
            });
            if(visible[0]){
                visible.parent().siblings('.iScrollLoneScrollbar').remove();
            }
        });
    }
};

IScrollFn();
$(window).on({
    load: function () {
        checkFooterHeight();
    },
    scroll: function () {
        // var scrollTop = $(window).scrollTop();
        // if(scrollTop > 200){
        //     linkTop.addClass('active');
        // }else{
        //     linkTop.removeClass('active');
        // }
        // checkHeaderFix();
    },
    resize: function () {
        checkFooterHeight();
    }
});
// $('#callback').modal('show')
var slickSliders = function () {
    if ($.fn.slick) {

//     $bottom__slider.slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         dots: true,
//         arrows: true,
//         autoplay: true,
//         autoplaySpeed: 4000,
//         adaptiveHeight: true,
//         appendDots: '.header-bottom__slider-dots',
//         prevArrow: '.header-bottom__slider-arrows.previous',
//         nextArrow: ".header-bottom__slider-arrows.next",
//     }).on('afterChange', checkBg);
//     checkBg();
//
        $('.slider-index:visible').not('.slick-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            prevArrow: $('.header__slider .slick-prev'),
            nextArrow: $('.header__slider .slick-next'),
            appendDots: $('.slider-index-footer__sliderDots')
            // autoplay: true,
            // autoplaySpeed: 3000,
            // adaptiveHeight: true,
        });

        var itemDetaliSlider = $('.object__item-slider-main:visible').not('.slick-slider');
        var itemDetaliSliderPreview = $('.object__item-slider-preview:visible').not('.slick-slider');
        itemDetaliSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            infinite: false,
            adaptiveHeight: true,
            asNavFor: itemDetaliSliderPreview,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                    }
                },
            ],
            // autoplay: true,
            // autoplaySpeed: 3000,
            prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-prev' width='19px' height='19px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrowPrev'></use></svg></button>",
            nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-next' width='19px' height='19px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrowNext'></use></svg></button>",
        });
//
        itemDetaliSliderPreview.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            // verticalSwiping: true,
            infinite: false,
            arrows: true,
            asNavFor: itemDetaliSlider,
            focusOnSelect: true,
            // autoplay: true,
            // autoplaySpeed: 3000,
            prevArrow: "<button class='slick-prev slick-arrow'><svg class='icon__arrow-prev' width='7px' height='12px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrowPrev'></use></svg></button>",
            nextArrow: "<button class='slick-next slick-arrow'><svg class='icon__arrow-next' width='7px' height='12px'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#arrowNext'></use></svg></button>",
            responsive: [
                //     {
                //         breakpoint: 768,
                //         settings: {
                //             dots: false,
                //             arrows: false,
                //         }
                //     },
            ]
        });

//
        var itemSlider = $('.item-slider__main:visible').not('.slick-slider');
        var itemSliderPreview = $('.item-slider__preview:visible').not('.slick-slider');
        itemSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: false,
            adaptiveHeight: true,
            asNavFor: itemSliderPreview,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                    }
                },
            ],
            // autoplay: true,
            // autoplaySpeed: 3000,
        });
//
        itemSliderPreview.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            // verticalSwiping: true,
            infinite: false,
            asNavFor: itemSlider,
            focusOnSelect: true,
            // autoplay: true,
            // autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
            ]
        });

        var itemSliderCatalog = $('.slider-catalog-item:visible').not('.slick-slider');
        var itemSliderCatalogPreview = $('.item__list:visible').not('.slick-slider');
        // itemSliderCatalog.each(function () {
        //     var _this = $(this),
        //         prev = _this.find('.slider-catalog-item__btn_prev'),
        //         next = _this.find('.slider-catalog-item__btn_next');
        //
        // });
        $('.slider-catalog-item__btn').click(function(){
            var _this = $(this),
                parent = _this.closest(itemSliderCatalog),
                active = '';
            //
            if(_this.hasClass('slider-catalog-item__btn_next')){
                active = 'slickNext';
            }else if(_this.hasClass('slider-catalog-item__btn_prev')){
                active = 'slickPrev';
            }
            parent.slick(active);
        });

        itemSliderCatalog.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            draggable: false,
            fade: true,
            infinite: false,
            adaptiveHeight: true,
            asNavFor: itemSliderCatalogPreview,
            // autoplay: true,
            // autoplaySpeed: 3000,
        });
//
        itemSliderCatalogPreview.slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: false,
            asNavFor: itemSliderCatalog,
            focusOnSelect: true,
            // autoplay: true,
            // autoplaySpeed: 3000,

        });
    }
}

slickSliders();
if($.fn.selectpicker){
    $('select').selectpicker({
        style: '',
        size: 7
    }).selectpicker('setStyle', 'btn', 'remove');
}
if ($.fn.magnificPopup) {
    var magnificPopupObj = {
        delegate: 'a',
        type: 'image',
        tLoading: "",
        mainClass: "",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        },
        iframe: {
            // markup: '<div class="mfp-iframe-scaler">' +
            // '<div class="mfp-close"></div>' +
            // '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            // '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }

                    src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                }
            }
        }
    };

    $('.magnificPopup').each(function () {
        $(this).magnificPopup(magnificPopupObj);
    })
}


$(document).on('click', '.tabs__nav a', function(e){
    e.preventDefault();
    var _this = $(this),
        parent = _this.parent(),
        className = 'active',
        block = $(_this.attr('data-block')),
        time = 300;

    if(!parent.hasClass(className)){
        parent.addClass(className);
    }

    parent.siblings().removeClass(className).each(function () {
        var __this = $(this),
            link = __this.find('a'),
            block = $(link.attr('data-block'));
        if(block[0]){
            block.fadeOut(time)
        }
    });

    block.delay(time).fadeIn(time);
});


var wrapperPage = '.page__wrapper-page';
$(document).on('loadAjax', wrapperPage, function (e){
    // console.log(this);
}).on('pageEndEvent', wrapperPage, function (e){
    checkFooterHeight();
    slickSliders();
    IScrollFn();
});


if ($.fn.masonry) {
    indexTiles = $('.object').masonry({
        itemSelector: '.object-item',
        columnWidth: ".grid-sizer",
        gutter: '.gutter-sizer',
        percentPosition: true
    });
    if (indexTiles[0]) {
        indexTiles.imagesLoaded().progress(function() {
            indexTiles.masonry('layout').addClass('active');
            indexTiles.masonry('reloadItems');
        });
    }
}

$('.rightBlock-btn__clear, .rightBlock-btn__content-item-clear').click(function () {
    $('.rightBlock-btn').find('.active').removeClass('active');
});
$('.rightBlock-btn__item').click(function(){
    var _this = $(this),
        toggle = $(_this.data('toggle')),
        contentItem = $('.rightBlock-btn__content-item'),
        btn__clear = $('.rightBlock-btn__clear'),
        btn__item = $('.rightBlock-btn__item'),
        className = 'active';

    if(toggle[0]){
        toggle.add(_this).toggleClass(className);
    }
    contentItem.not(toggle).add(btn__item.not(_this)).removeClass(className);

    if(contentItem.filter('.active')[0]){
        contentItem.closest('.rightBlock-btn__content').add(btn__clear).addClass(className);
    }else{
        contentItem.closest('.rightBlock-btn__content').add(btn__clear).removeClass(className);
    }
});

$('.item-components-toggle').click(function () {
    var _this = $(this),
        next = _this.next();

    if(next[0]){
        _this.toggleClass('active');
        next.slideToggle(300, function () {
            $(window).resize()
        });
    }
});
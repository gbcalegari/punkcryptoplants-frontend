// benefits slider
var benefits_slider = new Swiper ('.benefits-slider .swiper-container', {
	slidesPerView: 1.05,
	loop: true,
	simulateTouch: true,
	effect: 'slide',
	autoHeight: false,
	calculateHeight: false,
    spaceBetween: 30,
    navigation: {
        nextEl: '.benefits-slider .next',
        prevEl: '.benefits-slider .prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 50,
        }, 768: {
            slidesPerView: 3,
            spaceBetween: 50,
        }, 1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        }, 1536: {
            slidesPerView: 5,
            spaceBetween: 50,
        }
    }
});

// rarity range slider
var rangeSlider = new rSlider({
    target: '#rarity-range-slider',
    values: ['Common', 'Rare', 'Epic', 'Legendary', 'Supreme'],
    scale: false,
    labels: false,
    tooltip: true,
    onChange: function (vals) {
        if(vals == 'Common') {
            $('.rarity-rare-slider, .rarity-super-rare-slider, .rarity-ultra-rare-slider, .rarity-legendary-slider').fadeOut();
            setTimeout(function(){
                $('.rarity-common-slider').fadeIn();
            }, 300)
        } else if (vals == 'Rare') {
            $('.rarity-common-slider, .rarity-super-rare-slider, .rarity-ultra-rare-slider, .rarity-legendary-slider').fadeOut();
            setTimeout(function(){
                $('.rarity-rare-slider').fadeIn();
            }, 300)
        } else if (vals == 'Epic') {
            $('.rarity-common-slider, .rarity-rare-slider, .rarity-ultra-rare-slider, .rarity-legendary-slider').fadeOut();
            setTimeout(function(){
                $('.rarity-super-rare-slider').fadeIn();
            }, 300)
        } else if (vals == 'Legendary') {
            $('.rarity-common-slider, .rarity-rare-slider, .rarity-super-rare-slider, .rarity-legendary-slider').fadeOut();
            setTimeout(function(){
                $('.rarity-ultra-rare-slider').fadeIn();
            }, 300)
        }
				else if (vals == 'Supreme') {
            $('.rarity-common-slider, .rarity-rare-slider, .rarity-super-rare-slider, .rarity-ultra-rare-slider').fadeOut();
            setTimeout(function(){
                $('.rarity-legendary-slider').fadeIn();
            }, 300)
        }
    }
});

// rarity common slider
var rarity_common_slider = new Swiper ('.rarity-common-slider .swiper-container', {
	slidesPerView: 1.05,
	loop: true,
	simulateTouch: true,
	effect: 'slide',
	autoHeight: false,
	calculateHeight: false,
    spaceBetween: 30,
    navigation: {
        nextEl: '.rarity-common-slider .next',
        prevEl: '.rarity-common-slider .prev',
    },
    breakpoints: {
        420: {
            slidesPerView: 2,
            spaceBetween: 30,
        }, 768: {
            slidesPerView: 3,
            spaceBetween: 40,
        }, 1280: {
            slidesPerView: 4,
            spaceBetween: 50,
        }
    }
});

// rarity rare slider
var rarity_rare_slider = new Swiper ('.rarity-rare-slider .swiper-container', {
	slidesPerView: 1.05,
	loop: true,
	simulateTouch: true,
	effect: 'slide',
	autoHeight: false,
	calculateHeight: false,
    spaceBetween: 30,
    navigation: {
        nextEl: '.rarity-rare-slider .next',
        prevEl: '.rarity-rare-slider .prev',
    },
    breakpoints: {
        420: {
            slidesPerView: 2,
            spaceBetween: 30,
        }, 768: {
            slidesPerView: 3,
            spaceBetween: 40,
        }, 1280: {
            slidesPerView: 4,
            spaceBetween: 50,
        }
    }
});

// rarity super rare slider
var rarity_super_rare_slider = new Swiper ('.rarity-super-rare-slider .swiper-container', {
	slidesPerView: 1.05,
	loop: true,
	simulateTouch: true,
	effect: 'slide',
	autoHeight: false,
	calculateHeight: false,
    spaceBetween: 30,
    navigation: {
        nextEl: '.rarity-super-rare-slider .next',
        prevEl: '.rarity-super-rare-slider .prev',
    },
    breakpoints: {
        420: {
            slidesPerView: 2,
            spaceBetween: 30,
        }, 768: {
            slidesPerView: 3,
            spaceBetween: 40,
        }, 1280: {
            slidesPerView: 4,
            spaceBetween: 50,
        }
    }
});

// rarity ultra rare slider
var rarity_ultra_rare_slider = new Swiper ('.rarity-ultra-rare-slider .swiper-container', {
	slidesPerView: 1.05,
	loop: true,
	simulateTouch: true,
	effect: 'slide',
	autoHeight: false,
	calculateHeight: false,
    spaceBetween: 30,
    navigation: {
        nextEl: '.rarity-ultra-rare-slider .next',
        prevEl: '.rarity-common-slider .prev',
    },
    breakpoints: {
        420: {
            slidesPerView: 2,
            spaceBetween: 30,
        }, 768: {
            slidesPerView: 3,
            spaceBetween: 40,
        }, 1280: {
            slidesPerView: 4,
            spaceBetween: 50,
        }
    }
});

// rarity legendary slider
var rarity_legendary_slider = new Swiper ('.rarity-legendary-slider .swiper-container', {
	slidesPerView: 1.05,
	loop: true,
	simulateTouch: true,
	effect: 'slide',
	autoHeight: false,
	calculateHeight: false,
    spaceBetween: 30,
    navigation: {
        nextEl: '.rarity-legendary-slider .next',
        prevEl: '.rarity-legendary-slider .prev',
    },
    breakpoints: {
        420: {
            slidesPerView: 2,
            spaceBetween: 30,
        }, 768: {
            slidesPerView: 3,
            spaceBetween: 40,
        }, 1280: {
            slidesPerView: 4,
            spaceBetween: 50,
        }
    }
});

// team photo slider
var team_photo_slider = new Swiper ('.team-photo-slider .swiper-container', {
	slidesPerView: 1.2,
	loop: false,
	simulateTouch: true,
    slideToClickedSlide: true,
	effect: 'slide',
	autoHeight: false,
	calculateHeight: false,
    spaceBetween: 30,
    breakpoints: {
        420: {
            slidesPerView: 2.2,
            spaceBetween: 30,
        }, 768: {
            slidesPerView: 3.2,
            spaceBetween: 40,
        }, 1280: {
            slidesPerView: 4,
            spaceBetween: 50,
        }
    }
});

// active effect on the team photo slider
$('.team-photo-slider .link').click(function(){
    var that = $(this);
    $('.team-photo-slider .link').removeClass('active');
    setTimeout(function(){
        that.addClass('active');
    }, 50)
});

// change team desc when team photos are clicked
$('.team-photo-slider #slide-01').click(function(){
    team_desc_slider.slideTo(0);
});

$('.team-photo-slider #slide-02').click(function(){
    team_desc_slider.slideTo(1);
});

$('.team-photo-slider #slide-03').click(function(){
    team_desc_slider.slideTo(2);
});

$('.team-photo-slider #slide-04').click(function(){
    team_desc_slider.slideTo(3);
});

// team desc slider
var team_desc_slider = new Swiper ('.team-desc-slider .swiper-container', {
	slidesPerView: 1,
	loop: false,
	simulateTouch: false,
    slideToClickedSlide: false,
	effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
	autoHeight: true,
	calculateHeight: true,
});

// faq accordion
$('#faq .items .item .question').click(function(){
    $(this).parent('.item').toggleClass('active');
    $(this).siblings('.answer').slideToggle();
});

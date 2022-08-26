$(document).ready(function() {
		

	$('.gt-quality-gift-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '20',
        responsive: [
			{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
			{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.gt-gift-popup-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.recommendation-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.modal').on('shown.bs.modal', function(e) {
        $('.gt-gift-popup-slider').slick('setPosition');
    });
    if ($('.gt-price-select').length > 0) {
        $('.gt-price-select').select2({
            minimumResultsForSearch: -1
        });
    }

    if ($('.from-select2').length) {
        $('.from-select2').select2({
            placeholder: 'This is my placeholder',

        });
    }


    $('.gift-toggler').click(function() {
        $('.gifts-collapse').toggleClass('show');
    });


    $('.gift-toggler').click(function() {
        $('.gt-site').toggleClass('git-site-show');
    });
    $('.gift-toggler').click(function() {
        $('.gifts-collapse-btn').toggleClass('gifts-collapse-btn-show');
    });
    $('.navbar-toggler').click(function() {
        $('.gifts-collapse-btn').toggleClass('gifts-collapse-btn-show');
    });

    $('.navbar-toggler').click(function() {
        $('.gt-site').toggleClass('git-site-show');
    });

    $('.exchange-search-btn').click(function() {
        $('.gt-search-content').addClass('active');
        $('html').addClass('search_open');
    });
    $('.product-search-input i').click(function() {
        $('.gt-search-content').removeClass('active');
		$('html').removeClass('search_open');
    });





    $('.gt-browse-gift-header-seach .form-control').on('focus', function() {
        $('.gt-search-content').addClass('active');
    })
    $('.gt-browse-gift-header-seach .form-control').on('blur', function() {
        $('.gt-search-content').removeClass('active');
    })
    $('.card-categari-show').click(function() {
        $('.gt-search-content').toggleClass('active');
    })


    $('.send-modal-searchbox .form-control').on('focus', function() {
        $('.browse-gift-searchbox').addClass('show-searchbox');
    })
    $('.send-modal-searchbox .form-control').on('blur', function() {
        $('.browse-gift-searchbox').removeClass('show-searchbox');
    })

    if ($('#inputMessage').length) {
        $('#inputMessage').select2({
            minimumResultsForSearch: -1
        });
    }


    $(document).click(function(event) {
        var clickover = $(event.target);
        var _opened = $(".gifts-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("gift-toggler")) {
            $(".gift-toggler").click();
        }
    });

    $(document).click(function(event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });



    if ($("*[data-srollbar]").length > 0) {
        Scrollbar.initAll();
    }

    $(function() {

        $('.send-gift-right-arrow img').click(function() {
            $('.gt-send-gift-list').animate({
                scrollLeft: $('.gt-send-gift-list').scrollLeft() + 500
            }, 300);
            return false;
        });

        $('.send-gift-left-arrow img').click(function() {
            $('.gt-send-gift-list').animate({
                scrollLeft: $('.gt-send-gift-list').scrollLeft() - 500
            }, 300);
            return false;
        });

    });

    if ($(".js-example-tags").length) {
        $(".js-example-tags").select2({
            tags: true
        });
    }

    if ($(".shipping-select-address").length) {
        $(".shipping-select-address").select2({
            templateResult: formatState,
            templateSelection: formatState
        });
    }



    function formatState(opt) {
        if (!opt.id) {
            return opt.text.toUpperCase();
        }

        var optimage = $(opt.element).attr('data-image');
        console.log(optimage)
        if (!optimage) {
            return opt.text.toUpperCase();
        } else {
            var $opt = $(
                '<span><img src="' + optimage + '" width="24px" /> ' + opt.text.toUpperCase() + '</span>'
            );
            return $opt;
        }
    };

    if ($(".shipping-select-address").length) {
        $(".shipping-select-address").select2({
            placeholder: "Enter Your Address",
            allowClear: false
        });
    }


    $(".shipping-manually-address").click(function() {
        $(".shi-select-address").hide();
        $(".shi-manually-address").show();
    })
    $(".finder-second-label").click(function() {
        $(".finder-second-label").removeClass('label-bg');
        $(this).addClass('label-bg');
    })

    // Gift Finder Step ///
    // $('.g-finder-step-btn').on("click", function() {
    //     $('.g-finder-section').fadeOut();
    //     var target_step = $(this).attr('data-target-section');
    //     $("." + target_step).fadeIn();
    // });
    $(".payment-gift-heand-img").click(function() {
        $(".payment-gift-thnakyou-tab").hide();
        $(".payment-gift-card").show();
    })
    $('.option-pick-slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $(".version-tab-link").click(function() {
        $('.option-pick-slider').slick('refresh');
    });
    
    $(".gt-select-gift__inner").click(function() {
        $('.gt-select-gift__inner').removeClass('active');
        $(this).addClass('active');
    });

    $(".send-gift-btn-one").click(function() {
        $('.send-gift-btn-one').removeClass('active');
        $(this).addClass('active');
    })
});
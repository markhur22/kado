$(document).ready(function() {
	$('input[type=radio][name=ageradio]').change(function() {
		$('.g-finder-second-section .next_btn').removeClass('disable_btn');
	});
	
	$('input[type=radio][name=budgetradio]').change(function() {
		$('.g-finder-third-content .next_btn').removeClass('disable_btn');
	});
	$('.interest_checker input[type=checkbox]').change(function() { 
		var int_check = $('.interest_checker input[type=checkbox]:checked').length;  
		if(int_check > 0){
			$('.interest_checker .next_btn').removeClass('disable_btn');
		}else{
			$('.interest_checker .next_btn').addClass('disable_btn');
		}
	});
	
    var size_li = $(".select_gift_for .row .col").length;
    var x=4;
    $('.select_gift_for .row .col:lt('+x+')').show();
    $('.g-finder-one-btn.view_more_refers .btn').click(function () {
        x= (x+5 <= size_li) ? x+4 : size_li;
        $('.select_gift_for .row .col:lt('+x+')').show();
        if(x == size_li){
            $('.g-finder-one-btn.view_more_refers').hide();
        }
    });

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
            //minimumResultsForSearch: -1,
			placeholder: 'Occasion',
			tags: true,
			maximumSelectionLength: 1,
        });
		
		$('#inputMessage').change(function(){
			if( $( this ).val() == "" ){
				$( this ).parent().removeClass( 'selected_option' );
			}else{
				$( this ).parent().addClass( 'selected_option' );
			}
		});
	}
	if ($('#inputSearchCards').length) {
        $('#inputSearchCards').select2({
            //minimumResultsForSearch: -1,
			placeholder: 'Search Cards',
			tags: true,
			maximumSelectionLength: 1,
        });
		
		$('#inputSearchCards').change(function(){
			if( $( this ).val() == "" ){
				$( this ).parent().removeClass( 'selected_option' );
			}else{
				$( this ).parent().addClass( 'selected_option' );
			}
		});
	}
	if ($('.searchgifts').length) {
        $('.searchgifts').select2({
            //minimumResultsForSearch: -1,
			placeholder: 'Search gifts...',
			tags: true,
			maximumSelectionLength: 1,
        });
		
		$('#searchgifts').change(function(){
			if( $( this ).val() == "" ){
				$( this ).parent().removeClass( 'selected_option' );
			}else{
				$( this ).parent().addClass( 'selected_option' );
			}
		});
	} 
	if ($('.inputGiftSent').length) {
        $('.inputGiftSent').select2({
            //minimumResultsForSearch: -1,
			placeholder: 'Search here...',
			tags: true,
			maximumSelectionLength: 1,
        });
		
		$('#inputGiftSent').change(function(){
			if( $( this ).val() == "" ){
				$( this ).parent().removeClass( 'selected_option' );
			}else{
				$( this ).parent().addClass( 'selected_option' );
			}
		});
	} 
	/* $('#inputSearchgifts').change(function(){
			if( $( this ).val() == "" ){
				$( this ).parent().removeClass( 'selected_option' );
			}else{
				$( this ).parent().addClass( 'selected_option' );
			}
		}); */
		$(".gt-browse-gift-header-seach input.inputSearchgifts").on("keyup", function() {
			var value = $(this).val().toLowerCase();
			$(".gt-browse-gift-content.final-browse-card-list .cardlist").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
				console.log($(this).text().toLowerCase().indexOf(value));
			});
			if ($(".gt-browse-gift-content.final-browse-card-list .cardlist").text().toLowerCase().indexOf(value) > -1){
				$('.noresultfound').hide();
				$('.gt-browse-gift-content.final-browse-card-list .gt-site-pagination').show();
				
				if(value != ''){
					$('.searchicon').hide();
					$('.crossicon').show();
					$('.cross_clear').removeClass('cross_clear');
					$('.gt-browse-gift-header-seach button.btn.btn-primary').addClass('cross_clear');
				}else{
					$('.cross_clear').removeClass('cross_clear');
					$('.searchicon').show();
					$('.crossicon').hide();
				}
				
				
			}else{
				//console.log('cccccc');
				$('.noresultfound').show();
				$('.gt-browse-gift-content.final-browse-card-list .gt-site-pagination').hide();
				if(value != ''){
					$('.searchicon').hide();
					$('.crossicon').show();
					$('.cross_clear').removeClass('cross_clear');
					$('.gt-browse-gift-header-seach button.btn.btn-primary').addClass('cross_clear');
				}else{
					$('.cross_clear').removeClass('cross_clear');
					$('.searchicon').show();
					$('.crossicon').hide();
				}
			}
		});
	$(document).on('click','.crossicon',function(){
		$('.searchicon').show();
		$('.crossicon').hide();
		$('.cross_clear').removeClass('cross_clear');
		$('input.form-control.inputSearchgifts').val('');
		$('.noresultfound').hide();
		$('.gt-browse-gift-content.final-browse-card-list .gt-site-pagination').show();
		$('.cardlist').show();
	});
	
var sub_show = [];
	
	$('a.edit_pro').click(function(){
		var p_C = $(this).attr('p_c');
		$('.'+p_C+' h6.profile_name_org').toggle();
		$('.'+p_C+' input').toggle();
		$('.'+p_C+' input').toggleClass('edit_pro_opened');
		if($('.'+p_C+' input').hasClass('edit_pro_opened')){
			sub_show.push(1);
		}else{
			var index = sub_show.indexOf(1);
               if (index > -1) {
                  sub_show.splice(index, 1);
                }
			
		}
		console.log(sub_show);
		if(sub_show.length > 0){
			$('.pass-btn-sub').show();
		}else{
			$('.pass-btn-sub').hide();
		}
	});
	$('a.edit_basic_profile').click(function(){
		var p_C = $(this).attr('p_c');
		$('.'+p_C+' .g-profile-username .fields-cont span').toggle();
		$('.'+p_C+' input').toggle();
		$('.'+p_C+' input').toggleClass('edit_basic_profile_opened');
		if($('.'+p_C+' input').hasClass('edit_basic_profile_opened')){
			sub_show.push(1);
		}else{
			var index = sub_show.indexOf(1);
               if (index > -1) {
                  sub_show.splice(index, 1);
                }
			
		}
		console.log(sub_show);
		if(sub_show.length > 0){
			$('.pass-btn-sub').show();
		}else{
			$('.pass-btn-sub').hide();
		}
	});
	$('a.edit_contact_profile').click(function(){
		var p_C = $(this).attr('p_c');
		$('.'+p_C+' .g-profile-username .fields-cont a').toggle();
		$('.'+p_C+' input').toggle();
		$('.'+p_C+' input').toggleClass('edit_contact_profile_opened');
		if($('.'+p_C+' input').hasClass('edit_contact_profile_opened')){
			sub_show.push(1);
		}else{
			var index = sub_show.indexOf(1);
               if (index > -1) {
                  sub_show.splice(index, 1);
                }
			
		}
		console.log(sub_show);
		if(sub_show.length > 0){
			$('.pass-btn-sub').show();
		}else{
			$('.pass-btn-sub').hide();
		}
	});
	$('a.edit_password_profile').click(function(){
		var p_C = $(this).attr('p_c');
		$('.'+p_C+' .profile-password.profile-info .fields-cont span').toggle();
		$('.'+p_C+' input').toggle();
		$('.'+p_C+' input').toggleClass('edit_password_profile_opened');
		if($('.'+p_C+' input').hasClass('edit_password_profile_opened')){
			sub_show.push(1);
		}else{
			var index = sub_show.indexOf(1);
               if (index > -1) {
                  sub_show.splice(index, 1);
                }
			
		}
		console.log(sub_show);
		if(sub_show.length > 0){
			$('.pass-btn-sub').show();
		}else{
			$('.pass-btn-sub').hide();
		}
	});
	
	
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
    });
	
	$('ul.gt-send-gift-list.send-gift-sidebar li a').click(function(e){
		//if (e.target !== this)
		//return;
		//$('.gt-send-gift-section .custom_tab_common .active').removeClass('active');
		//$('ul.gt-send-gift-list.send-gift-sidebar li a.active').removeClass('active');
		$('.active').removeClass('active');
		$(this).addClass('active');
		var idFromAnchor = $(this).attr('href');
		$(idFromAnchor).addClass('active');
	});


	$('section.gt-send-gift-section .send-gift-select-gift').click(function(e){
		//if (e.target !== this)
		//return;
		var currentId = $(this).attr('id');
		
			$('.active').removeClass('active');
    		$("#"+currentId).addClass('active');
    		$('a[href^="#'+currentId+'"]').addClass('active');
		/* $('html, body').animate({
			scrollTop: $("#"+currentId).offset().top
		}, 500,function(){
            
        }); */
	});
	$("body").on('click', '.toggle-password', function() {
	  $(this).toggleClass("fa-eye-slash fa-eye");
	  var input = $(".gift-form-password");
	  if (input.attr("type") === "password") {
		input.attr("type", "text");
	  } else {
		input.attr("type", "password");
	  }
	});
	
/* 	var a = $(".custom_tab_sec_one.custom_tab_common").offset().top - 150,
		e = $(".custom_tab_sec_two.custom_tab_common").offset().top - 150,
		_ = $(".custom_tab_sec_three.custom_tab_common").offset().top - 150,
		o = $(".custom_tab_sec_four").offset().top - 150;
	$(window).scroll(function () {
		$(this).scrollTop() > a || $(this).scrollTop() < a
			? ($(".active").removeClass("active"), $("ul.gt-send-gift-list.send-gift-sidebar li a.anc_one.tab_anchor_block ").addClass("active"),$(".custom_tab_sec_one.custom_tab_common").addClass("active"))
			: $("ul.gt-send-gift-list.send-gift-sidebar li a.anc_one.tab_anchor_block ").removeClass("active"),
			$(this).scrollTop() > e
				? ($(".active").removeClass("active"), $("ul.gt-send-gift-list.send-gift-sidebar li a.anc_two.tab_anchor_block ").addClass("active"),$(".custom_tab_sec_two.custom_tab_common").addClass("active"))
				: $("ul.gt-send-gift-list.send-gift-sidebar li a.anc_two.tab_anchor_block ").removeClass("active"),
			$(this).scrollTop() > _
				? ($(".active").removeClass("active"), $("ul.gt-send-gift-list.send-gift-sidebar li a.anc_three.tab_anchor_block ").addClass("active"),$(".custom_tab_sec_three.custom_tab_common").addClass("active"))
				: $("ul.gt-send-gift-list.send-gift-sidebar li a.anc_three.tab_anchor_block ").removeClass("active"),
			$(this).scrollTop() > o
				? ($(".active").removeClass("active"), $("ul.gt-send-gift-list.send-gift-sidebar li a.anc_four.tab_anchor_block ").addClass("active"),$(".custom_tab_sec_four.custom_tab_common").addClass("active"))
				: $("ul.gt-send-gift-list.send-gift-sidebar li a.anc_four.tab_anchor_block ").removeClass("active");
	}); */
	$('.select_gift_tab .gt-select-gift__inner').click(function(){
		$('.selct_gift_active').removeClass('selct_gift_active');
		$(this).addClass('selct_gift_active');
	});

	$('.send_gift_main').click(function(){
		$('.send_gift_active').removeClass('send_gift_active');
		$(this).addClass('send_gift_active');
	});
	
	var pathname = window.location.pathname;
	var a = pathname.split('/');
	var lastEl = a.pop();
	console.log(lastEl);
	if( lastEl == 'send-gift.html' || lastEl == 'send-gift-selected.html'){}else{
	var lastScrollTop = 0;
	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop){
		   $('header').addClass('sticky_hidden');
		   $('header').removeClass('sticky_add');
		   $('body').removeClass('sticky_on');
	   } else {
		   $('header').addClass('sticky_add');
		   $('header').removeClass('sticky_hidden');
		   $('body').addClass('sticky_on');
	   }
	   lastScrollTop = st;
	});
	}

	$('ul.gt-send-gift-list.send-gift-sidebar li a').click(function(e){
		e.preventDefault();
		var ahref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(ahref).offset().top -20
		}, 800);
	});
	
	var gs_psectionheight = $(".gifts-items .gifts-items-header.gift-send-header").outerHeight();
	var gs_sectionheight = new Array();
	//gs_sectionheight.push(gs_psectionheight);
    $('.gifts-card-list.gift-send-card-list .card.gifts-card').slice(0, 6).each(function (i,e) {
        var gs_value = $(this).outerHeight(true);
        gs_sectionheight.push(gs_value);
        console.log(gs_sectionheight);
    });
	
	var gs_sectionheight_aftersix = new Array();
	$('.gifts-card-list.gift-send-card-list .card.gifts-card').slice(6).each(function (i,e) {
			var gs_value = $(this).outerHeight(true);
			gs_sectionheight_aftersix.push(gs_value);
			console.log(gs_sectionheight_aftersix);
	});
	
	var gs_total_aftersix = 0;
    for (var i = 0; i < gs_sectionheight_aftersix.length; i++) {
        gs_total_aftersix += gs_sectionheight_aftersix[i] << 0;
    }
	
	
    var gs_total = 0;
    for (var i = 0; i < gs_sectionheight.length; i++) {
        gs_total += gs_sectionheight[i] << 0;
    }
    console.log(gs_total);
    console.log(gs_total_aftersix);
	console.log(gs_psectionheight);
	console.log($('.gifts-items').outerHeight(true));
	
	/* var gs_PHeight = $('.gifts-items').outerHeight();
	var gs_subHeights = parseFloat(gs_total) - parseFloat(gs_PHeight);
	var gs_addHeights = parseFloat(gs_total) + parseFloat(gs_subHeights);
	var gs_THeights = parseFloat(gs_addHeights) - parseFloat(gs_total_aftersix);
	console.log(gs_THeights); */

	//var gs_THeights = parseFloat(gs_total) + parseFloat(gs_psectionheight);
	$('.gifts-card-list.gift-send-card-list').css('height',gs_total);
	
	
	$('.user-profile li').click(function(){
		$('.active_drop').removeClass('active_drop');
		$(this).addClass('active_drop');
	});

});
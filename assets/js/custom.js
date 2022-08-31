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

    /* if ($('#inputMessage').length) {
        $('#inputMessage').select2({
            //minimumResultsForSearch: -1,
			tags: true
        });
    } */


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

});

function autocomplete(inp, arr) {
	if(arr.length > 0){
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
	  $('.autocomplete').addClass('autocomplete_active');
      var a, b, i, val = this.value;
	  console.log(arr);
	  console.log(val);
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { $('.autocomplete').removeClass('autocomplete_active'); return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
		  $('.autocomplete').removeClass('autocomplete_blank');
		  //$('.autocomplete-items').scrollbar();
        }else{
			console.log('sss');
			$('.autocomplete').addClass('autocomplete_blank');
		}
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
	  $('.autocomplete').removeClass('autocomplete_active');
	  $('.autocomplete').removeClass('autocomplete_blank');
  });
	}
}

/*An array containing all the occasions names in the world:*/
var occasions = ["Occasion","Birthday","Birth Day","BirthDay","Birthday wishes","Birthday party","Birthday cake"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("inputMessage"), occasions);
( function( $ ) {

	"use strict";

  $(".cardTeller").tilt({
    maxTilt: 15,
    perspective: 1400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 1200,
    glare: true,
    maxGlare: 0.2,
    scale: 1.04
  });
  
}( jQuery ) );
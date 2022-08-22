(function ($) {
    "use strict";

    //sticky menu
    $(window).on('scroll', function () {
        var window_top = $(window).scrollTop() + 0;
        if (window_top > 150) {
            $('.classic_header').addClass('menu_fixed animated slideInDown');
        } else {
            $('.classic_header').removeClass('menu_fixed animated slideInDown');
        }
    });
    //menu icon
    $('.close_icon').on('click', function () {
        $('.body_wrapper').removeClass('promotion').find('.promo_banner').css({
            top: '-70px',
            WebkitTransition: 'all 0.3s ease-in-out',
            MozTransition: 'all 0.3s ease-in-out',
            MsTransition: 'all 0.3s ease-in-out',
            OTransition: 'all 0.3s ease-in-out',
            transition: 'all 0.3s ease-in-out'
        });

    });
    //count up
    var counter = $('.counter');
    if (counter.length > 0) {
        counter.counterUp({
            time: 2000
        });
    }
    //wow js
    var wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: false,
        duration: 1000,
    });
    wow.init();
    //offcanvus menu js
    $("#pu_collaps_menu_icon").on('click', function () {
        $('.canvus_menu').addClass("canvus_active")
    });
    $(".canvus_close_icon").on('click', function () {
        $(".canvus_menu").removeClass("canvus_active")
    });

    //canvus menu js
    $(".offcanvus_menu_trigger").on('click', function () {
        $("body").addClass("active_off_canvus")
        $(".offcanvas_overlay").addClass("active_offcanvas_overlay")
    });
    $(".close_icon, .offcanvas_overlay").on('click', function () {
        $("body").removeClass("active_off_canvus")
        $(".offcanvas_overlay").removeClass("active_offcanvas_overlay")
    });

    // dropdown-toggle class not added for submenus by current WP Bootstrap Navwalker as of November 15, 2017.
    $('.dropdown-menu > .dropdown > a').addClass('dropdown-toggle');

    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('.dropdown', function (e) {
            $('.dropdown-menu > .dropdown .show').removeClass("show");
        });
        $('.dropdown-menu a.dropdown-toggle').removeClass("show_dropdown");
        if ($(this).next().hasClass('show')) {
            $(this).addClass("show_dropdown");
        }
        return false;
    });
    $('.classic_header .dropdown-menu > .dropdown').hover(
        function () {
            $(this).find('.dropdown-toggle').toggleClass("active_icon");
        }
    );

    $('.off_canvus_menu .dropdown-menu > .dropdown > .dropdown-toggle').on('click', function () {
        $('.off_canvus_menu .dropdown-menu > .dropdown > .dropdown-toggle').removeClass("active_icon");
        if ($(this).next().hasClass('show')) {
            $(this).addClass("active_icon");
        }
    });

    //niceselect js
    var nc_select = $('.nc_select');
    if (nc_select.length > 0) {
        nc_select.niceSelect();
    }

    //searchbar popup
    $('#search-popup-close').on('click', function () {
        $('#popup-search').removeClass('open');
    })
    $('.search_icon').on('click', function () {
        $('#popup-search').addClass('open');
    })

    // easying js code 
    $('.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        var headerH = '115';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    if ($('.parallax_shap').length > 0) {
        $('.parallax_shap').parallax({
            scalarX: 10.0,
            scalarY: 10.0
        });
    }

    //video popup
    var video_popup = $('.video_popup_area');
    if (video_popup.length > 0) {
        video_popup.magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }
    // easying js code 
    $('.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        var headerH = '115';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var bttHeadroom = new Headroom(document.getElementById("pu_scorl_top"), {
        tolerance: 0,
        offset: 500,
        tolerance: {
            up: 0,
            down: 0
        },
        classes: {
            initial: "slide",
            top: "headroom--top",
            pinned: "slide--reset",
            unpinned: "slide--down"
        }
    });
    bttHeadroom.init();

    var pu_scorl_top = $('#pu_scorl_top');
    pu_scorl_top.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    //parallaxie back ground image
    var parallaxie = $('.parallaxie');
    if (parallaxie.length) {
        parallaxie.parallaxie({
            speed: 0.5,
            offset: 50,
        });
    };

    // Preloader js
    $(window).on('load', function () {
        $(".preloder_part").fadeOut();
        $(".sk-chase-dot").delay(1000).fadeOut("slow");
    });

    //data bg image sec
    $("[data-bg-img]").each(function () {
        var bg = $(this).data("bg-img");
        $(this).css({
            "background": "no-repeat center/cover url(" + bg + ")",
        })
    })

    $("[data-bg-color]").each(function () {
        var bg_color = $(this).data("bg-color");
        $(this).css({
            "background-color": (bg_color)
        })
    })

    // $('.fillbar').rProgressbar({
    //     percentage: 88
    // });
    $(".fillbar").each(function () {
        var t = $(this),
            a = $(this).data("percentage")
        t.rProgressbar({
            percentage: a
        });
    })

    // (Optional) Active an item if it has the class "is-active"	
    $(".pu_accordion > .pu_accordion_item.is-active").children(".pu_accordion_panel").slideDown();

    $(".pu_accordion > .pu_accordion_item").on('click', function () {
        // Cancel the siblings
        $(this).siblings(".pu_accordion_item").removeClass("is-active").children(".pu_accordion_panel").slideUp();
        // Toggle the item
        $(this).toggleClass("is-active").children(".pu_accordion_panel").slideToggle("ease-out");
    });

    //gallery filter js
    var pu_gallery_filter = document.getElementsByClassName("pu_gallery_filter");
    if (pu_gallery_filter.length) {
        
        var $grid = $('.pu_gallery_wrapper').isotope({
            itemSelector: '.pu_gallery_inner',
            layoutMode: 'fitRows'
        });
        var iso = $grid.data('isotope');
        var $filterCount = $('.filter-count');
        var filterFns = {
            ium: function () {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };
        $('.pu_filter_button_group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            filterValue = filterFns[filterValue] || filterValue;
            $grid.isotope({
                filter: filterValue
            });
            updateFilterCount();
        });
        function updateFilterCount() {
            $filterCount.text('('+ iso.filteredItems.length + ')');
        }
        updateFilterCount();
        $('.pu_button_group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    }
   

    //load more btn
    var all_product_wrapper = $('.all_product_wrapper');
    if(all_product_wrapper.length){
        all_product_wrapper.simpleLoadMore({
            item: '.pu_product_load',
            count: 9,
            itemsToLoad: 3,
            btnHTML: '<a href="#" id="loadmore" class="cu_btn base_btn load_more_btn">See more products <i class="fas fa-chevron-down"></i></a>'
        });
    }

    //product counter
    var incrementPlus;
    var incrementMinus;
    var buttonPlus = $(".cart-qty-plus");
    var buttonMinus = $(".cart-qty-minus");

    var incrementPlus = buttonPlus.click(function () {
        var $n = $(this)
            .parent(".product_count")
            .find(".qty");
        $n.val(Number($n.val()) + 1);
    });

    var incrementMinus = buttonMinus.click(function () {
        var $n = $(this)
            .parent(".product_count")
            .find(".qty");
        var amount = Number($n.val());
        if (amount > 0) {
            $n.val(amount - 1);
        }
    });


    //shiping address form
    $('.other_shiping_address').hide();
    $('#shiping_address').on('click', function () {
        $('.other_shiping_address').slideToggle('500', 'linear');
    });
    
    $('.return_customer_form').hide();
    $('.return_customer_btn').on('click', function () {
        $('.return_customer_form').slideToggle('500', 'linear');
    });

    $('.submit_cupon_code').hide();
    $('.troggle_btn').on('click', function () {
        $('.submit_cupon_code').slideToggle('500', 'linear');
    });

    $('.woo_account_wrapper').hide();
    $('.woo_account_title').on('click', function () {
        $('.woo_account_wrapper').slideToggle('500', 'linear');
    });

    /* ======= Toggle between Signup & Login & ResetPass Modals ======= */
    $('#login_btn').on('click', function (e) {
        $('#Register_modal').modal('hide');
        $('#reser_pass_modal').modal('hide');
        $('#login_modal').modal('toggle');
        e.preventDefault();
    });

    $('#res_pass_btn').on('click', function (e) {
        $('#Register_modal').modal('hide');
        $('#login_modal').modal('toggle');
        $('#reser_pass_modal').modal('toggle');
        e.preventDefault();
    });

    $('#reg_btn').on('click', function (e) {
        $('#login_modal').modal('hide');
        $('#reser_pass_modal').modal('hide');
        $('#Register_modal').modal();
        e.preventDefault();
    });


    //pass recovery Modal
    $('#reg_btn_1').on('click', function (e) {
        $('#login_modal').modal('hide');
        $('#reser_pass_modal').modal('toggle');
        $('#Register_modal').modal();
        e.preventDefault();
    });

    $('#login_btn_1').on('click', function (e) {
        $('#login_modal').modal();
        $('#reser_pass_modal').modal('toggle');
        e.preventDefault();
    });

    $('#login_btn_2').on('click', function (e) {
        $('#login_modal').modal();
        $('#Register_modal').modal('toggle');
        e.preventDefault();
    });


}(jQuery));
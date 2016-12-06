$(document).ready(function() {
    document.documentElement.addEventListener('touchstart', function (event) {
		if (event.touches.length > 1) {
		event.preventDefault();
		}
	}, false);

    $('.all-menu').click(function(){
        $('aside#all-menu').css('display', 'block');
        $('body').css({overflow: 'hidden'});
        $('aside#all-menu').css('height', $(document).height());
        $('aside#all-menu nav').css('height', $(document).height());


    });
    $('aside#all-menu .close').click(function(){
        $('aside#all-menu').css('display', 'none');
        $('body').css({overflow: ''});
    });


    $('aside#all-menu h2 a').click(function(){
        $('aside#all-menu div.sub').css('display', 'none');
        $(this).parent().parent().find('div.sub').css('display', 'block');
    });

    $('.util-menu .search').click(function(){
        $('fieldset.search').css('display', 'block');
    });

    $('fieldset.search .close').click(function(){
        $('fieldset.search').css('display', 'none');
    });

    var issue = $('.main-issue .slide').bxSlider({
        controls:false,
        adaptiveHeight: true,
        infiniteLoop:true,
        auto:true,
        pause:6000
    });

    var mainhot = $('.main-hot .slide').bxSlider({
        pager:false,
        controls:false,
        slideWidth:200,
        minSlides:2,
        maxSlides:8,
        slideMargin:10,
        auto:true,
    });

    var view = $('.view-top .slide').bxSlider({
        controls:false,
        infiniteLoop:true,
        auto:true
    });


    $('a button').hover(function() {
        $(this).parent().parent().bind('click', false);
    }, function(){
        $(this).parent().parent().unbind('click', false);
    });

    $('.view-top .btn.back').click(function(){
        history.go(-1);
    });

    $('.stitle .btn').click(function(){
        history.go(-1);
    });

    $('h1 .btn.close').click(function(){
        self.close();
    });


    $('.view-top select').change(function(){
        $(this).parent().find('label').html($(this).find('option:selected').val());
    });

    $('.view-top button.toggle').click(function(){
        console.log('asdf');
        $('div.option').toggleClass('active');
        $(this).find('i').toggleClass('fa-angle-up');
        $(this).find('i').toggleClass('fa-angle-down');
    });


    if (($('.view-tabs').length > 0)) {
        var tabScroll;
        $(window).load(function() {
            tabScroll = $('.view-tabs').offset().top;
        });

        $(window).bind('scroll', function () {
            var winScroll = $(document).scrollTop();


            if (winScroll > tabScroll) {
                $('.view-tabs').addClass('fixed');
                $('.tab-data').addClass('fixed');

            } else {
                $('.view-tabs').removeClass('fixed');
                $('.tab-data').removeClass('fixed');
            }
        });
     }

     $('.view-tabs a').on('click', function() {
         var reValue = $(this).attr("data");
         $(".view-tabs a").removeClass("active");
         $(this).addClass("active");

         $(".tab-data").removeClass("active");
         $(".tab-data#" + reValue).addClass("active");
     });

     $('.stars button').on('click', function() {
          var starValue = $(this).attr("data");
           $(".stars button").find("i").removeClass("on");
           $(".stars button").each(function() {
               if ($(this).attr("data") <= starValue) {
                   $(this).find("i").addClass("on");
               }
           });
      });

    $('section.join-agree .btn').on('click', function() {
        var agree = $(this).attr("data");
        $('section.join-agree textarea#'+ agree).toggle();


    });


      $('section.login .login-tabs a').on('click', function() {
          var loginTab = $(this).attr("data");
          $('section.login .login-tabs a').removeClass('active');
          $(this).addClass('active');
          $('section.login .form').removeClass('active');
          $('section.login #'+ loginTab).addClass('active');
      });

      $('section.customer.faq li').on('click', function() {
          $(this).find('div').toggle();
      });

        $('section.intro .tabs a').on('click', function() {
            var introTab = $(this).attr("data");
            $('section.intro .tabs a').removeClass('active');
            $(this).addClass('active');
            $('section.intro .store').removeClass('active');
            $('section.intro #'+ introTab).addClass('active');
        });

        $('button.zipcode').on('click', function() {
          $('div.zipcode').toggle();
        });

        $('div.zipcode button').on('click', function() {
          $('div.zipcode').toggle();
        });

});

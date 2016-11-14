$(document).ready(function() {
    document.documentElement.addEventListener('touchstart', function (event) {
		if (event.touches.length > 1) {
		event.preventDefault();
		}
	}, false);

    $('.all-menu').click(function(){
        $('aside#all-menu').css('height', $('document').height());
        $('aside#all-menu').css('display', 'block');
        $(document).on("mousewheel.disableScroll DOMMouseScroll.disableScroll touchmove.disableScroll", function(e) {
            e.preventDefault();
            return;
        });
        $(document).on("keydown.disableScroll", function(e) {
            var eventKeyArray = [32, 33, 34, 35, 36, 37, 38, 39, 40];
            for (var i = 0; i < eventKeyArray.length; i++) {
                if (e.keyCode === eventKeyArray [i]) {
                    e.preventDefault();
                    return;
                }
            }
        });
    });
    $('aside#all-menu .close').click(function(){
        $('aside#all-menu').css('display', 'none');
        $(document).off(".disableScroll");
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

    $('.main-recommend button').hover(function() {
        $(this).parent().parent().bind('click', false);
    }, function(){
        $(this).parent().parent().unbind('click', false);
    });


});

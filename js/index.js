// Can also be used with $(document).ready()
$(window).load(function() {
    $('.fs1').flexslider({
      animation: "slide",
      direction: "vertical",
      slideshowSpeed:2000,
      animationSpeed:1000,
      animationLoop:true,
    });
  });

  $(window).load(function() {
    $('.fs2').flexslider({
      animation: "slide",
      direction: "horizontal",
      slideshowSpeed:2000,
      animationSpeed:1000,
      animationLoop:true,
    });
  });

  $(window).load(function(){
    $('#f1').flexslider({
      animation: "slide",
      rtl: true,
      start: function(slider){
        $('body').removeClass('loading');
      }
    });
   $('#f2').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 210,
      itemMargin: 5,
      pausePlay: true,
      mousewheel: true,
      rtl: true,
      asNavFor:'.flexslider'
    });
  });
  
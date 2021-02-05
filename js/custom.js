   $(function () {

       //       navbar
       $('.navbar-nav li').click(function () {
           $(this).addClass('active').siblings().removeClass('active');
       });
       //*******************
       //sticky menu start

       $(window).scroll(function () {
           var scrolling = $(this).scrollTop();
           if (scrolling > 100) {
               $('.header-top').addClass('bg1');
           } else {
               $('.header-top').removeClass('bg1');
           }
       });
       $(window).scroll(function () {
           var scrolling = $(this).scrollTop();
           if (scrolling > 100) {
               $('.header').addClass('bg');
           } else {
               $('.header').removeClass('bg');
           }
       });
       //*******************
           // smooth scroll start

      $('.scrroll_icon').click(function(e){
          e.preventDefault();
          var hash = this.hash;
          var position = $(hash).offset().top;
          $('html').animate({scrollTop:position-100},300);
      });

    //smooth scroll end
// ********************* //
   
    //back_to_top start
// ********************* //
       var offset = 250;
       var duration = 500;

       $(window).scroll(function () {
           if ($(this).scrollTop() > offset) {
               $('.back_to_top').fadeIn(duration);
           } else {
               $('.back_to_top').fadeOut(duration);
           }
       });


       $('.back_to_top').click(function () {
           $('html,body').animate({
               scrollTop: 0
           }, 1000)
       });
   
    //back_to_top end
// ********************* //
   
   });

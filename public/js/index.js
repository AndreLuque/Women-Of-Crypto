$('document').ready(function() {

    new WOW().init();

    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find('i.indicator')
            .toggleClass('fa-chevron-circle-up fa-chevron-circle-down');
    }
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);

    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();

    //     if (scroll >= 1800) {
    //         $(".clearheader").addClass("darkHeader");
    //     } else if (scroll >= 2000) {
    //         $(".clearheader").addClass("darkHeader newheight");
    //     } else {
    //         $(".clearheader").removeClass("darkHeader");
    //     }

    // });


    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();

    //     if (scroll >= 3200) {
    //         $(".clearheader2").addClass("darkHeader2");
    //     } else if (scroll >= 3000) {
    //         $(".clearheader2").addClass("darkHeader2 newheight");
    //     } else {
    //         $(".clearheader2").removeClass("darkHeader2");
    //     }

    // });

    $(window).scroll(function() {
        var pixs = $(window).scrollTop();
        console.log("pixel is " + pixs);
        if(pixs >= 1800)
        {
          pixs = pixs-1799;
          if (pixs > $(".roadline").height() -50)
          {
              pixs = $(".roadline").height() -50;
          }
          
          $(".timeline-progress").addClass("timeline").css({"height": pixs + "px"})
          }
      });

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 3100) {
          scroll = scroll-3099;
          console.log("scroll" + scroll)
          if (scroll > $(".roadline2").height() -50)
          {
              scroll = $(".roadline2").height() -50;
          }
          $(".timeline-prg").addClass("timeline2").css({"height": scroll + "px"})
      }   

  });


});
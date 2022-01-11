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


'use strict';

function debounce(func, wait, immediate) {

  // Debounce
  // http://davidwalsh.name/javascript-debounce-function

  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}

var htmlTag = document.getElementsByTagName('html')[0];
var videoContainer = document.querySelector('#video-container');
var videoElem = document.querySelector('#video-container video');

var minW = 320; // Minimum video width allowed
var vidWOrig; // Original video dimensions
var vidHOrig;

vidWOrig = videoElem.getAttribute('width');
vidHOrig = videoElem.getAttribute('height');

var videoCover = function() {

  var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // Set the video viewport to the window size

  videoContainer.style.width = winWidth + 'px';
  videoContainer.style.height = winHeight + 'px';

  // Use largest scale factor of horizontal/vertical
  var scaleH = winWidth / vidWOrig;
  var scaleV = winHeight / vidHOrig;
  var scale = scaleH > scaleV ? scaleH : scaleV;

  // Don't allow scaled width < minimum video width
  if (scale * vidWOrig < minW) {
    scale = minW / vidWOrig;
  }

  // Scale the video
  var videoNewWidth = scale * vidWOrig;
  var videoNewHeight = scale * vidHOrig;

  videoElem.style.width = videoNewWidth + 'px';
  videoElem.style.height = videoNewHeight + 'px';

  // Center it by scrolling the video viewport
  videoContainer.scrollLeft = (videoNewWidth - winWidth) / 2;
  videoContainer.scrollTop = (videoNewHeight - winHeight) / 2;

};

if (htmlTag.classList.contains('no-touch')) {
  videoCover();

  // Adjust on resize
  var updateVideo = debounce(function() {
    videoCover();
  }, 100);

  window.addEventListener('resize', updateVideo);
}



$(document).ready(function() {
  // fix menu when passed
  $('.masthead').visibility({
    once: false,
    onBottomPassed: function() {
      $('.fixed.menu').transition('fade in');
    },
    onBottomPassedReverse: function() {
      $('.fixed.menu').transition('fade out');
    }
  });

  // create sidebar and attach to menu open
  $('.ui.sidebar').sidebar('attach events', '.toc.item');

  $('h1.ui.inverted.header').visibility({
    once: false,
    onTopVisible: function() {
      $('.home-link-item').addClass('active');
    }
  });

  $('#aboutfcc').visibility({
    once: false,
    onTopPassed: function() {
      $('.fcc-link-item').addClass('active');
    },
    onBottomPassed: function() {
      $('.fcc-link-item').removeClass('active');
    },
    onBottomPassedReverse: function() {
      $('.fcc-link-item').addClass('active');
    },
    onTopPassedReverse: function() {
      $('.fcc-link-item').removeClass('active');
    }
  });

  $('#aboutus').visibility({
    once: false,
    onTopPassed: function() {
      $('.aboutus-link-item').addClass('active');
    },
    onBottomPassed: function() {
      $('.aboutus-link-item').removeClass('active');
    },
    onBottomPassedReverse: function() {
      $('.aboutus-link-item').addClass('active');
    },
    onTopPassedReverse: function() {
      $('.aboutus-link-item').removeClass('active');
    }
  });

  $('#meetups').visibility({
    once: false,
    onTopPassed: function() {
      $('.meetups-link-item').addClass('active');
    },
    onBottomPassed: function() {
      $('.meetups-link-item').removeClass('active');
    },
    onBottomPassedReverse: function() {
      $('.meetups-link-item').addClass('active');
    },
    onTopPassedReverse: function() {
      $('.meetups-link-item').removeClass('active');
    }
  });

  $('.footer.segment').visibility({
    once: false,
    onBottomVisible: function() {
      $('.ourpages-link-item').addClass('active');
    },
    onTopVisibleReverse: function() {
      $('.ourpages-link-item').removeClass('active');
    }
  });
});

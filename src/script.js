
$(document)
.ready(function() {

    // fix menu when passed
    $('.masthead')
    .visibility({
        once: false,
        onBottomPassed: function() {
        $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function() {
        $('.fixed.menu').transition('fade out');
        }
    });

    // create sidebar and attach to menu open
    $('.ui.sidebar')
    .sidebar('attach events', '.toc.item');
    
    $('h1.ui.inverted.header')
    .visibility({
        once: false,
        onTopVisible: function() {
            $('.home-link-item').addClass('active');
        }
    })
    
    $('#aboutfcc')
        .visibility({
            once: false,
            onBottomVisible: function() {
                $('.fcc-link-item').addClass('active');
            },
            onBottomPassed: function() {
                $('.fcc-link-item').removeClass('active');
            }
        });

    $('#aboutus')
        .visibility({
            once: false,
            onTopPassed: function() {
                $('.fcc-link-item').removeClass('active');
                $('.aboutus-link-item').addClass('active');
            },
            onPassingReverse: function() {
                $('.meetups-link-item').removeClass('active');
            }
        });

    $('#meetups')
        .visibility({
            once: false,
            onBottomVisible: function() {
                $('.aboutus-link-item').removeClass('active');
                $('.meetups-link-item').addClass('active');
            }
        });

    $('.footer.segment')
        .visibility({
            once: false,
            onTopVisible: function() {
                $('.meetups-link-item').removeClass('active');
                $('.ourpages-link-item').addClass('active');
            },
            onTopVisibleReverse: function() {
                $('.ourpages-link-item').removeClass('active');
            }
        });
});

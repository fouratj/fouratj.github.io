$(document).ready(function () {
    $('#fullpage').fullpage({
        paddingTop: '64px',
        sectionSelector: '.section',
        slideSelector: '.horizontal-scrolling',
        verticallyCentered: true,
        fitToSection: true,
        onLeave: function (index, nextIndex, direction) {
            //console.log(index, nextIndex, direction);
            if (direction === "down") {
                $('#header').fadeOut();
                $('#me').removeClass('scale-in');
                $('#me').addClass('scale-out');
            } 
            
            if ( nextIndex == 1) {
                $('#header').fadeIn();
                setTimeout(function () {
                    $('#me').removeClass('scale-out');
                }, 50);   
            }

            if ((index === 2 && direction === "down") || (index === 5 && direction === "up")) {
                $('#arrow1').velocity("callout.shake", 2000);
            }

            if ((index === 3 && direction === "down") || (index === 6 && direction === "up")) {
                $('#arrow2').velocity("callout.shake", 2000);
            }
            
            if (nextIndex == 5) {
                $('.social').addClass('scale-in');
            } else if (nextIndex == 4) {
                $('.social').removeClass('scale-in');
            }
        },
        afterRender: function () {
            $(".dropdown-button").dropdown();
            $('#arrow1').velocity("callout.shake", {duration: 1000});
            //$.adaptiveBackground.run();
            //$('img').matchHeight();
            /*
                $('img')
                    .wrap('<span style="display:inline-block"></span>')
                    .css('display', 'block')
                    .parent()
                    .zoom({
                        duration: 60,
                        magnify: 0.25
                });
            */
            var elem = $('#mySkillsTitle');
            
            $('.collapsible').collapsible({
                accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
                onOpen: function(el) { 
                    elem.velocity({ opacity: 0.0 });
                }, // Callback for Collapsible open
                onClose: function(el) {
                    if ( $('.skills .active').length === 0) 
                        elem.velocity({ opacity: 1.0 });
                } // Callback for Collapsible close
            });
        }
    });
});
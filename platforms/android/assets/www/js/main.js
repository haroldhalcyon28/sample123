// Export selectors engine
var $$ = Dom7;

// App Initialization
var app = new Framework7({
    cache: true,
    material: true,
    pushState: true,
    swipeBackPage: false,
    animatePages: false, // i disable the page transitions,
    onAjaxStart: function (xhr) {
        $$(".loaderoverlay").css('display', 'block');
    },
    onAjaxComplete: function (xhr) {
        $$(".loaderoverlay").css('display', 'none');
    }

});


// Add view
var mainView = app.addView('.view-main');

var tl = new TimelineLite();

//initialization of any page / made for active-icons and pagecolor
$$(document).on('page:init', function (e) {
    setTimeout(function () {
        //get page name
        var pageName = e.detail.page.name;
        var page = $$(".page[data-page='" + pageName + "']");
        var pageCategory = page.attr('data-category');

        //get category of page-on-left
        var previousCategory = $$(".page.page-on-left").attr('data-category');

        //get page color from data-pageColor attribute
        var pageColor = page.attr('data-pageColor');

        var tapStatus = false;
        //hide fab if pagename is home
        $$(".triangle div").show();
        if (pageName === 'home') {
            $$(".action-box").hide();
            $$("#upper-right-triangle").css({ height: '25vh' });
            $$("#bottom-left-triangle").css({
                backgroundColor: '#012d68',
                display: 'block',
                height: "43vh",
                width: "17vw",
                // bottom: -2
            });

        } else {
            //show fab
            $$(".action-box").show();

            //hide certain triangle and modify some triangle size
            $$("#bottom-second-left-triangle").hide();
            $$("#bottom-left-triangle").css({ height: '20vh', width: '20vw' });
            $$("#upper-right-triangle").css({ height: '15vh', width: '15vw' });

            //remove background color of active icon and active class
            $$(".speed-dial-buttons a.active").css('background', 'transparent').removeClass('active');

            //set page color 
            $$(".triangle div").css('background-color', pageColor);
            $$(".speed-dial-buttons a").css('border-color', pageColor);
            $$(".speed-dial-buttons svg path, .speed-dial-buttons svg polygon").css('fill', pageColor);
            //set background of a's to transparent
            $$(".speed-dial-buttons a").css('background-color', 'transparent');

            //set active-icon background color and add active class. could also be used for triangles
            var target_fab = $$(".speed-dial-buttons a[data-category='" + pageCategory + "']");
            target_fab.css('background', pageColor).addClass('active');
            target_fab.find('path, polygon').css('fill', 'white');

            //close fab upon init/reinit of new/old page
            $$('.speed-dial').removeClass('speed-dial-opened');
        }

        //replace images with svg
        $$("img.svg").each(function () {
            var $img = $$(this);
            var id = $img.attr('id');
            var _class = $img.attr('class');
            var url = $img.attr('src');
            var $parent = $img.parent();
            $$.get(url, function (data) {
                var $svg = $$($$(data)[4]);
                $svg = $svg.attr('id', id);
                $svg = $svg.attr('class', _class + ' tab-icon');
                $svg = $svg.removeAttr('xmlns:a');
                $img.remove();
                $parent.prepend($svg);
            });
        });

        //animate triangles when entering new category
        if (previousCategory != pageCategory) {
            var tl = new TimelineLite();
            tl.fromTo('#upper-right-triangle', .7, { top: "-=350" }, { top: 0 })
                .fromTo('#bottom-right-triangle, .action-box', .7, { bottom: "-=350" }, { bottom: 0 }, "-=.7")
                .fromTo('#bottom-left-triangle', .7, { bottom: "-=350" }, { bottom: 0 }, "-=.7");
        }

        //upon clicking on fab link
        $$(".speed-dial-buttons a").click(function () {

            var pageColor = $$(".page-on-center").attr('data-pageColor');
            var target = $$(this);
            //get url
            var url = target.attr("data-link");
            var active_a = $$(".speed-dial-buttons a.active");
            //animate/set background color of active a to inactive
            TweenMax.to(active_a, .2, { backgroundColor: 'transparent' });
            TweenMax.to(active_a.find("path, polygon"), .5, { fill: pageColor, delay: .2 });

            //remove active class on active a and add active class to target a
            active_a.removeClass('active');
            target.addClass('active');

            //animate/set background color of target a
            TweenMax.to(target, .2, { backgroundColor: pageColor });
            TweenMax.to(target.find("path, polygon"), 1, { fill: 'white', delay: .2 });

            setTimeout(function () {
                //transit
                mainView.router.loadPage('pages/' + url);
            }, 1500);
        });


        //reposition triangles to initial incase of rapid navigation
        $$("#upper-right-triangle").css('top', 0);
        $$("#bottom-right-triangle, #bottom-second-left-triangle, #bottom-left-triangle").css('bottom', 0);

        //animate triangles
        var tl = new TimelineLite();

        // Adding timeout if the page is at home
        if (pageName == 'home') {
            setTimeout(function () {
                tl.fromTo('#upper-right-triangle', .5, { top: "-=550" }, { top: -1 })
                    .fromTo('#bottom-right-triangle, .action-box', .5, { bottom: "-=550" }, { bottom: -1 }, "-=.5")
                    .fromTo('#bottom-left-triangle', .5, { bottom: "-=550" }, { bottom: 0 }, "-=.5");
            }, 1200);

        }


        //upon clicking on fab link
        $$(".speed-dial-buttons a").click(function () {

            var pageColor = $$(".page-on-center").attr('data-pageColor');
            var target = $$(this);
            //get url
            var url = target.attr("data-link");
            var active_a = $$(".speed-dial-buttons a.active");
            //animate/set background color of active a to inactive
            TweenMax.to(active_a, .2, { backgroundColor: 'transparent' });
            TweenMax.to(active_a.find("path, polygon"), .5, { fill: pageColor, delay: .2 });

            //remove active class on active a and add active class to target a
            active_a.removeClass('active');
            target.addClass('active');

            //animate/set background color of target a
            TweenMax.to(target, .2, { backgroundColor: pageColor });
            TweenMax.to(target.find("path, polygon"), 1, { fill: 'white', delay: .2 });

            setTimeout(function () {
                //transit
                mainView.router.loadPage('pages/' + url);
            }, 1500);
        });

        // Home button as div
        $$(".home-button").click(function () {
            setTimeout(function () {
                mainView.router.loadPage('pages/intro/intro-home.html');
            }, 800);
        });
    }, 1);
});





// You can optionaly use this to add time on your console.log 
var DEBUG = (function () {
    var timestamp = function () { };
    timestamp.toString = function () {
        return "[DEBUG " + (new Date).toLocaleTimeString() + "]";
    };
    return {
        log: console.log.bind(console, '%s', timestamp)
    }
})();
/* Example usage:
   DEGUG.log('It's working....'); */
    //close fab upon init/reinit of new/old page

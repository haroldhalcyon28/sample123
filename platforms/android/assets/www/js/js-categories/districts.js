app.onPageInit("districts", function (page) {
    var tl = TweenMax;
    //animate initial info
    tl.from('.firstDistrict .desc', 1, { opacity: 0, y: 100 }, "0.1");

    $$(".filinvestMap").on('click', function (e) {
        var target = $$(e.target);
        var district = target.closest('.district');
        var paths = $$(".filinvestMap path");
        var pathTitles = $$("path.title");
        var activeDistrict = $$(".district.active");
        var _class = "." + district.attr('data-target');

        if (!district.hasClass('active')) {
            //highlight part of map
            activeDistrict.removeClass('active');
            paths.addClass('filz');
            pathTitles.removeClass('filz');
            district.addClass('active').find('path').removeClass('filz');

            //remove current active content
            $$(".col-30.active").removeClass('active');

            //show content of target
            $$(_class).addClass('active');
            tl.staggerFrom(_class + ' .showTitle', 0.5, { opacity: 0, x: -30, ease: Power1.easeOut }, "0.4");
            tl.staggerFrom(_class + " .col-100 .row", 0.2, { scale: 0.3, opacity: 0, delay: 0.9, ease: Expo.easeOut, force3D: true });
        } else {
            //remove active classes and recolor map
            $$(".active").removeClass('active');
            activeDistrict.removeClass('active');
            paths.removeClass('filz');

            //add class and animate firstDistrict
            $$(".firstDistrict").addClass('active');
            tl.from('.firstDistrict .desc', .5, { opacity: 0, y: 200, ease: Power1.easeOut }, "0.1");
        }
    });
})
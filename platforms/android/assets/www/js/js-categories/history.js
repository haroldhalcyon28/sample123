app.onPageInit('late-chairman', function (page) {
    console.log('late-chiarman loaded');

});


app.onPageInit('district-area-list1', function (page) {

    $$(".area-list1").on('click', function (e) {

        var target = $$(e.target);
        console.log(target);
        var districts = target.closest('.district');
        var path = $$(".distMap path");
        var pathTitles = $$("path.title");
        var activeDistrict = $$(".district.active");
        var _class = "." + districts.attr("data-target");

        if (!districts.hasClass('active')) {
            //highlight part of map
            activeDistrict.removeClass('active');
            path.addClass('ufill');
            pathTitles.removeClass('fil0');
            districts.addClass('active').find('path').removeClass('ufill');

            $$(".col-50.active").removeClass("active");

            $$(_class).addClass('active');
            tl.staggerFrom(_class, .3, { opacity: 0, x: -20, ease: Power1.easeOut });
            tl.staggerFrom(_class + " > span", .3, { opacity: 0, x: -10, ease: Power1.easeOut });

        } else {
            //remove active classes and recolor map
            $$(".active").removeClass('active');
            activeDistrict.removeClass('active');
            path.removeClass('ufill');
        }
    })

});

app.onPageInit('filinvest-before', function (page) {

    var target = $$(".oldCity").closest(".swiper-slide");
    var imgName = target.attr("data-img");

    var beforeAfter = new Swiper('.swiper-container', {
        direction: 'vertical',
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
        },
        onSlideChangeStart: function (beforeAfter) {
            console.log(beforeAfter.activeIndex);
            if (beforeAfter.activeIndex == "0") { // filinvest before
                var spanTitle = $$(".tag-title span").text("IN 1995");
            } else { // filinvest today
                spanTitle = $$(".tag-title span").text("NOW");
            }
        }
    })

    

});
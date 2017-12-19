/* ===============================
    areas-nearby
  ================================  */
// app.onPageInit('areas-nearby', function (page) {

// })



/* ===============================
    fast-facts
  ================================  */
$$(document).on('pageInit', '.page[data-page="fast-facts"]', function (page) {
    // $$(".muntinlupa").addClass('draw');
    console.log($$(".muntinlupa"));
    // console.log($$(".muntinlupa").getTotalLength());
    $$(".fast-facts .icons span").on('click', function (e) {
        var $span = $$(this);
        var link = $span.attr('href');
        var $active_span = $$("svg.active").closest('span');
        var prev = 0;
        var $prev_tab = $$(".tab.active");
        var $svg = $span.find('svg');
        var $showables = $$(".map .dynamic ." + link + ", .img-container .dynamic ." + link + " path, .img-container .dynamic ." + link + " polygon , .img-container ." + link);
        var $active_showables = $$(".map .dynamic .active, .img-container .active");
        if (!$svg.hasClass('active')) {
            //remove active class from svg and tab
            $$("svg.active").removeClass('active');
            //get previously active tab
            $$.each($$(".tabs .tab"), function (i, tab) {
                var b = $$(tab);
                if (b.hasClass('active')) prev = i;
            });
            //remove class to active showables
            $active_showables.removeClass('active');

            $$(".tab.active").removeClass('active');
            //add active class to target svg
            $svg.addClass('active');
            //add active class to tab
            $$("#" + link).addClass('active');
            var $active_tab = $$(".tab.active");

            //add active class to showables
            $showables.addClass('active');
            //get currently active tab
            $$.each($$(".tabs .tab"), function (i, tab) {
                var b = $$(tab);
                if (b.hasClass('active')) current = i;
            });
            var x = "";
            if (prev < current) x = "500px";
            else x = "-500px";

            tl.from($active_tab, 0.5, {})
            TweenLite.from($active_tab, 0.5, { opacity: 0, x: x });
            if (link === '#major_roads') console.log('major roads');
        }
    });
})


app.onPageInit('fast-facts', function (page) {
    
});




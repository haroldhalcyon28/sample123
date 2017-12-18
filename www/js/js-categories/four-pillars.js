
/* ===============================
    fourPillarsMenu
  ================================  */
app.onPageInit('fourPillarsMenu', function (page) {

   $$(".home-loader").css('display', 'block');


    /* border animation delay */
    setTimeout(function () {
        // add class loaded to .draw elements to animate border
        $$(".draw").addClass('loaded');
    }, 300);
    /* -- */
    setTimeout(function(){
         $$(".home-loader").css('display', 'none');
        tl.from('.pillarDiv', .5, { opacity: 0, y: "50px" })
        .fromTo('.backdrop-blind', .5, { x: "-50%" }, { x: "20%" }, "-=0.5")
        .from('.pillars-inner .pillar:nth-child(1) span', .5, { x: "+=20px", y: "+=20px", opacity: 0 })
        .from('.pillars-inner .pillar:nth-child(2) span', .5, { x: "-=20px", y: "+=20px", opacity: 0 }, "-=0.5")
        .from('.pillars-inner .pillar:nth-child(3) span', .5, { x: "+=20px", y: "-=20px", opacity: 0 }, "-=0.5")
        .from('.pillars-inner .pillar:nth-child(4) span', .5, { x: "-=20px", y: "-=20px", opacity: 0 }, "-=0.5")
        .to('.backdrop-filter', .5, { opacity: 0 }, "-=.5");
    }, 1200);
        


    $$(".pillars-inner .ripple").click(function () {
        var pillar = $$(this);
        var span = pillar.find('span');

        TweenLite.to(span, .3, {
            color: 'white',
            delay: .3
        });
        TweenLite.to(pillar, 1, {
            background: '#00AB98',
            delay: .3
        });

        //linking 
        setTimeout(function () {
            var url = pillar.attr('data-link');
            mainView.router.loadPage(url);
        }, 800);
    });
});
DEBUG


/* ===============================
    CBD
  ================================  */
app.onPageInit('cbd1', function (page) {

    var cbd = $$(".cbd");
    var spans = $$(".box-highlight > span");
    tl.from(cbd.find('.backdrop'), .8, { opacity: 0, y: "100px" })
        // .from(cbd.find('.tag-title'), .8, { opacity: 0, y: "100px" }, "-=1")
        // .from(cbd.find('.desc'), .8, { opacity: 0, y: "100px" })
        .from(cbd.find('.box-highlight'), .3, { height: 0, width: 0, padding: 0 }, "-=.2")
        .staggerFrom(spans, .8, { x: "-3000px" }, 0.20);
});

app.onPageInit('cbd2', function (page) {
   console.log('cbd2 loaded');

});

app.onPageInit('cbd3', function (page) {
    console.log('cbd3 loaded');

});

app.onPageInit('cbd4', function (page) {

});

app.onPageInit('cbd5', function (page) {

});

app.onPageInit('cbd6', function (page) {

});

app.onPageInit('cbd7', function (page) {

});



app.onPageInit('garden-city1', function (page) {

    $$('.round').click(function () {

        var target = $$(this);
        var imgName = target.attr("data-img");
   

         app.photoBrowser({
            theme: 'light',
            maxZoom: 3,
            navbar: true,
            toolbar: true,
            photos: ['img/four-pillars/garden-city/'+imgName],
        }).open();

    })

});
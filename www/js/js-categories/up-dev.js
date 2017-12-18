
/* ===============================
    UPCOMING DEVELOPMENT
  ================================  */
app.onPageInit('up-dev1', function (page) {

    // $$('.secondDiv').css("overflow", "hidden") // make background invisible during animation

    var updev1 = tl.from('.botanika', .3, { opacity: 0, x: -200, ease: Power1.easeOut }, "0.3")
        .from('.feu', .3, { opacity: 0, y: -200, ease: Power1.easeOut }, "0.3")
        .from('.prime', .3, { opacity: 0, x: 200, ease: Power1.easeOut }, "0.3");
})

app.onPageInit('up-dev2', function (page) {

    var updev2 = tl.from('.vector', .5, { opacity: 0, x: -500, ease: Power1.easeOut }, "0.5")
        .staggerFrom(".logos .col-50", 2, { scale: 0.5, opacity: 0, delay: 0.5, ease: Elastic.easeOut, force3D: true }, "0.2");


})
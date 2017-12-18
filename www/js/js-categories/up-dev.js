
/* ===============================
    UPCOMING DEVELOPMENT
  ================================  */
app.onPageInit('up-dev1', function (page) {

    var tl = TweenMax;

    tl.from('.botanika', .5, { opacity: 0, x: -300, ease: Power1.easeOut })
    tl.from('.feu', .5, { opacity: 0, y: -300, ease: Power1.easeOut }, "0.3")
    tl.from('.prime', .5, { opacity: 0, x: 300, ease: Power1.easeOut }, "0.3")
    
})

app.onPageInit('up-dev2', function (page) {

        tl.from('.vector', .5, { opacity: 0, x: -500, ease: Power1.easeOut })
        .staggerFrom(".logos", 1, { scale: 0.5, opacity: 0, delay: 0.1, ease: Expo.easeOut, force3D: true }, "0.3");

})

app.onPageInit('up-dev3', function (page) {

    tl.fromTo('.backdrop-blind', 1, { y: 0 }, { y: "-100%" })
    .to('.backdrop-filter', .5, { opacity: 0 });


})
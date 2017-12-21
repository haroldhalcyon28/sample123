
/* ===============================
    Home 
  ================================  */
app.onPageInit('home', function (page) {
    // $$(".home-loader").css('display', 'block');
    $$(".starter").css('display', 'none');
    $$('#upper-right-triangle').css('backgroundColor', '#012d68');
    $$("#bottom-right-triangle").css('backgroundColor', '#2bba9d');
    $$("#bottom-second-left-triangle").css('backgroundColor', '#2bba9d');
    $$("#bottom-second-left-triangle").show();

    //Mainpage Animation
    // setTimeout(function() {
    // $$(".home-loader").css('display', 'none');
        var introAnimation = tl.fromTo('.backdrop-blind', .5, { y: "0"}, { y: "-100%"})
        .from('#bottom-second-left-triangle', .5, { bottom: '-=20%' }, "-=.5")
        .to('.backdrop-filter', .5, { opacity: 0 })
        .from('.mainMenuList .main-title', .5, { opacity: 0 }, "-=.8")
        .from('.mainMenuList .link', .5, { bottom: -30, opacity: 0 }, '-=1');
        //  TweenLite.fromTo('#bottom-second-left-triangle', .8, { bottom: "-50%" }, { bottom: '0%' });

    // }, 1500);

        
    // Main Menu Page Linking     
    $$(".link").click(function () {
        //animate
        var bg = $$(this).attr('data-bg');
        var polypath = $$(this).find('path, polygon');
        var span = $$(this).find('span');
        TweenMax.to($$(this), 1, {background: bg, delay: .3});
        TweenMax.to(span, .8, {color: 'white', delay: .1});
        TweenMax.to(polypath, .8, {fill: 'white', delay: .3});

        var myease = 'Power2.easeOut';
        var duration = 1;
        TweenLite.to('#bottom-second-left-triangle', duration, { bottom: '-=25%',ease: myease  })
        TweenLite.to('#bottom-left-triangle', duration, { bottom: '-=45%',ease: myease })
        TweenLite.to('#bottom-right-triangle', duration, { bottom: '-=25%',ease: myease })
        TweenLite.to('#upper-right-triangle', duration, { top: '-=25%',ease: myease });
        
        //transit
        var file = $$(this).attr('data-link');
        setTimeout(function () {
            mainView.router.loadPage('pages/' + file);
        }, 1000);
    });
});



/* ===============================
    intro-filinvest-city
  ================================  */
app.onPageInit('intro-filinvest-city', function (page) {

        var first = tl.fromTo('.backdrop-blind', 1, { y: '0%' }, { y: "-100%" })
        .to('.backdrop-filter', .5, { opacity: 0 });

})



/* ===============================
    intro-map
  ================================  */
app.onPageInit('intro-map', function (page) {
    var enlargeMap = app.photoBrowser({
        theme: 'light',
        expositionHideCaptions: true,
        maxZoom: 3,
        navbar: true,
        toolbar: false,
        swipeToClose: false,

        photos: ['img/map/map.jpg'],
    })

    $$('.zoomMap').click(function () {
        enlargeMap.open();
    })
})

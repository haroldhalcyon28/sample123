//Index 
// TweenMax.to('#logo', 1, { rotation: 360, ease: Power0.easeNone, repeat: -1 }).timeScale(.5);

//redirect to home after 2 seconds
// setTimeout(function(){
//     mainView.router.loadPage('./pages/intro/intro-home.html');
// }, 2000);

/* ===============================
    Home 
  ================================  */
app.onPageInit('home', function (page) {
    $$(".home-loader").css('display', 'block');
    $$(".starter").css('display', 'none');
    $$('#upper-right-triangle').css('backgroundColor', '#012d68');
    $$("#bottom-right-triangle").css('backgroundColor', '#2bba9d');
    $$("#bottom-second-left-triangle").css('backgroundColor', '#2bba9d');
    $$("#bottom-second-left-triangle").show();

    //Mainpage Animation
    setTimeout(function() {
    $$(".home-loader").css('display', 'none');
        var introAnimation = tl.fromTo('.backdrop-blind', .5, { y: "0"}, { y: "-100%"})
        .from('#bottom-second-left-triangle', .5, { bottom: -350 }, "-=.5")
        .to('.backdrop-filter', .5, { opacity: 0 })
        .from('.mainMenuList .main-title', .5, { opacity: 0 }, "-=.8")
        .from('.mainMenuList .link', .5, { bottom: -30, opacity: 0 }, '-=1')
    }, 1200);

    
        
    // Main Menu Page Linking     
    $$(".link").click(function () {
        //animate
        var bg = $$(this).attr('data-bg');
        var polypath = $$(this).find('path, polygon');
        var span = $$(this).find('span');
        TweenMax.to($$(this), 1, {background: bg, delay: .3});
        TweenMax.to(span, .8, {color: 'white', delay: .1});
        TweenMax.to(polypath, .8, {fill: 'white', delay: .3});
        
        //transit
        var file = $$(this).attr('data-link');
        setTimeout(function () {
            mainView.router.loadPage('pages/' + file);
        }, 700);
    });
});



/* ===============================
    intro-filinvest-city
  ================================  */
app.onPageInit('intro-filinvest-city', function (page) {
    var first = tl.fromTo('.backdrop-blind', 1, { y: 0 }, { y: "-100%" })
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

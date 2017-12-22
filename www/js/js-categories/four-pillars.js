


/* ===============================
    fourPillarsMenu
  ================================  */
app.onPageInit('fourPillarsMenu', function (page) {

    /* border animation delay */
    setTimeout(function () {
        // add class loaded to .draw elements to animate border
        $$(".draw").addClass('loaded');
    }, 300);
    /* -- */
         $$(".home-loader").css('display', 'none');
        tl.from('.pillarDiv', .5, { opacity: 0, y: "50px" })
        .fromTo('.backdrop-blind', .5, { x: "-50%" }, { x: "20%" }, "-=0.5")
        .from('.pillars-inner .pillar:nth-child(1) span', .5, { x: "+=20px", y: "+=20px", opacity: 0 })
        .from('.pillars-inner .pillar:nth-child(2) span', .5, { x: "-=20px", y: "+=20px", opacity: 0 }, "-=0.5")
        .from('.pillars-inner .pillar:nth-child(3) span', .5, { x: "+=20px", y: "-=20px", opacity: 0 }, "-=0.5")
        .from('.pillars-inner .pillar:nth-child(4) span', .5, { x: "-=20px", y: "-=20px", opacity: 0 }, "-=0.5")
        .to('.backdrop-filter', .5, { opacity: 0 }, "-=.5");
        

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

    var tl = TweenMax;

    tl.from(" h1", .7, { opacity: 0, y: "50"}, 0.1 );
    tl.staggerFrom(".cbd2 .col-33", .7, { opacity: 0, delay: 0.5, y: "50px" }, 0.3);

});

app.onPageInit('cbd3', function (page) {
    console.log('cbd3 loaded');

    var tl = TweenMax;

    tl.from(" h1", .7, { opacity: 0, y: "50"}, 0.1 );
    tl.staggerFrom(".cbd3 .col-50", .5, { opacity: 0, delay: 0.5, y: "50px" }, 0.3);
    tl.from(".cbd3 .col-100", .7, { opacity: 0, delay: 1, y:"50px"}, 0.5);

});

app.onPageInit('cbd4', function (page) {
    
    var tl = TweenMax;

    //title
    tl.from(" h1", .7, { opacity: 0, y: "50"} );
    tl.from(".firstAnim", .3, { opacity: 0, delay: 0.6, y:"20px"} );

    //middle icon
    tl.from(".middle", 1, { scale: 0.5, delay: 0.7, opacity: 0, ease: Elastic.easeOut, force3D: true }, 0.5);
    
    //middle layer left
    tl.from(".midLayerLeftTop", 0.5, { opacity: 0, delay: 1, y: "50px" , x: "30px", ease: Power1.easeOut }, 0.5);
    tl.from(".midLayerLeft", 0.5, { opacity: 0, delay: 1, x: "30px", ease: Power1.easeOut }, 0.5);
    tl.from(".midLayerLeftBot", 0.5, { opacity: 0, delay: 1, y: "-50px" , x: "30px", ease: Power1.easeOut }, 0.5);

    //middle layer right
    tl.from(".midLayerRightTop", 0.5, { opacity: 0, delay: 1, y: "50px" , x: "-30px", ease: Power1.easeOut }, 0.5);
    tl.from(".midLayerRight", 0.5, { opacity: 0, delay: 1, x: "-30px", ease: Power1.easeOut }, 0.5);
    tl.from(".midLayerRightBot", 0.5, { opacity: 0, delay: 1, y: "-50px" , x: "-30px", ease: Power1.easeOut }, 0.5);

    //outer layer left
    tl.from(".outLayerLeftTop", 0.5, { opacity: 0, delay: 1.4, x: "60px", ease: Power1.easeOut }, 0.5);
    tl.from(".outLayerLeft", 0.5, { opacity: 0, delay: 1.4, x: "60px", ease: Power1.easeOut }, 0.5);
    tl.from(".outLayerLeftBot", 0.5, { opacity: 0, delay: 1.4 , x: "60px", ease: Power1.easeOut }, 0.5);

    //outer layer right
    tl.from(".outLayerRightTop", 0.5, { opacity: 0, delay: 1.4, x: "-60px", ease: Power1.easeOut }, 0.5);
    tl.from(".outLayerRight", 0.5, { opacity: 0, delay: 1.4, x: "-60px", ease: Power1.easeOut }, 0.5);
    tl.from(".outLayerRightBot", 0.5, { opacity: 0, delay: 1.4 , x: "-60px", ease: Power1.easeOut }, 0.5);

    tl.from(".cbd4SecondRow p", 0.5, { opacity: 0, delay: 1.8, ease: Power1.easeOut }, 0.5);
    tl.from(".cbd4FirstRow p", 0.5, { opacity: 0, delay: 1.8, ease: Power1.easeOut }, 0.5);
    tl.from(".cbd4ThirdRow p", 0.5, { opacity: 0, delay: 1.8, ease: Power1.easeOut }, 0.5);

    $$('.round').click(function () {

      var target =  $$(this);
      var basePath = 'img/four-pillars/premiere-cbd/';
      fourPillarsGallery(target, basePath);

    })
});


/* ==============================   
            GARDEN CITY
   ============================== */
app.onPageInit('garden-city1', function (page) {


    var tl = TweenMax;
    //animate initial info
    //left diagonal
    tl.from('.fLeftD', .5, { opacity: 0, y: -100, x: 50, ease: Power1.easeOut }, "0.3");
    tl.from('.sLeftD', .5, { opacity: 0, y: -100, x: 90, delay: 0.5, ease: Power1.easeOut }, "0.3");

    //middle
    tl.from('.middle', .5, { opacity: 0, y: -100, ease: Power1.easeOut }, "0.3");

    //bottom
    tl.from('.bottomLayer', .5, { opacity: 0, y: -100, delay: 0.5, ease: Power1.easeOut }, "0.3");

    //right diagonal 
    tl.from('.fRightD', .5, { opacity: 0, y: -100, x: -50, ease: Power1.easeOut }, "0.3");
    tl.from('.sRightD', .5, { opacity: 0, y: -100, x: -90, delay: 0.5, ease: Power1.easeOut }, "0.3");

    $$('.round').click(function () {

        var target = $$(this);
        var basePath = 'img/four-pillars/garden-city/';
        fourPillarsGallery(target, basePath);

    })

});

/* ========================== 
        MODERN METROPOLIS
   ========================== */

app.onPageInit('modern-metro1', function (page) {

    var tl = TweenMax;
    var desc = $$(".item .fontsizes");
    
    tl.from(".firstDiv", .4, { opacity: 0, delay: 0.3, y: "50", ease: Power1.easeOut} )
    tl.from(".secondDiv", .4, { opacity: 0, delay: 0.6, y: "50", ease: Power1.easeOut} )

    $$('.round').click(function () {

        var target = $$(this);
        var basePath = 'img/four-pillars/modern-metro/';

        //alert(imgDesc);

         fourPillarsGallery(target, basePath);


    })

});

/* ========================== 
    CONVERGENCE HUB
========================== */

app.onPageInit('con-hub1', function (page) {

    var tl = TweenMax;
    var desc =  $$(".item .fontsizes");
    
    tl.from(".item", .4, { opacity: 0, delay: 0.3, y: "50", ease: Power1.easeOut } );

    $$('.round').on('click', function () {

      var target =  $$(this);
      var basePath = 'img/four-pillars/con-hub/';
      fourPillarsGallery(target, basePath);

    })

});


// Photo Browser function
function fourPillarsGallery(_target, basePath) {
    
        var target = _target;
        var imgName = target.attr("data-img");
        var imgDesc = target.closest(".item").find('.fontsizes').text();
        var basePath = basePath;

        //alert(imgDesc);

        var imgArr = JSON.parse(imgName);
        var picsArr = [];


        for (var i = 0; i < imgArr.length; i++) {
            var picsStr = imgArr[i];

            var holder = new Object;
            holder.url = basePath + picsStr;
            holder.caption = imgDesc;

            picsArr.push(holder);
            //alert(picsArr);
        }

        app.photoBrowser({
            theme: 'light',
            maxZoom: 3,
            navbar: true,
            toolbar: true,
            photos: picsArr,
        }).open();
}



$(".home-loader").show();
var dirs = ['img', 'img/districts', 'img/districts/CityCenter', 'img/districts/CivicPlaza', 'img/districts/Northgate', 'img/districts/Palms', 'img/districts/Southstation', 'img/districts/Spectrum', 'img/districts/Westgate', 'img/districts/Woods', 'img/fast-facts', 'img/four-pillars', 'img/four-pillars/premiere-cbd', 'img/four-pillars/con-hub', 'img/four-pillars/garden-city', 'img/four-pillars/modern-metro', 'img/history', 'img/intro', 'img/map', 'img/svg', 'img/up-dev'];
var regexp = new RegExp("\.png|\.jpg|\.svg|\.jpeg");
var images = [];
var k = 0;
for (var i = 0; i < dirs.length; i++) {
    $.ajax({
        url: dirs[i],
        success: function (data) {
            $(data).find("a").filter(function () {
                return regexp.test($(this).text());
            }).each(function (j, img) {
                images[k] = new Image();
                images[k].src = this.href;
                k++;
            });
        }
    });
}

$(window).on('load', function(){
    $(".starter").fadeIn();
});
$(".home-loader").show();
var images = ['main_bg.jpg','intro/intro-fil-city_2.jpg','four-pillars/image_backdrop.jpg','districts/filinvest_districts_map.svg','history/building.svg','map/map.jpg'];
var temp = [];
var j = images.length;

for(var i = 0; i < j; i++){
    temp[i] = new Image();
    temp[i].src = "img/" + images[i];
    console.log(temp[i].src);
}

$(window).on('load', function () {
    $(".starter").fadeIn();
});
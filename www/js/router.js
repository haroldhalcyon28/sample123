

//pages restricted for tap
var pagesRestrictedTap = ['home', 'intro-filinvest-city', 'fourPillarsMenu'];

//pages restricted for swipe
var pagesRestrictedSwipe = ['home', 'fourPillarsMenu'];

//classes restricted for tap
var classRestrictedTap = ['triangle-child', 'action-box','diagonal-border'];


//folder and subfolder
var categories = ['intro', 'fast_facts', 'histories', 'four_pillars', 'districts', 'up_dev'];
var subcategories = ['', 'premiere-cbd', 'garden-city', 'modern-metro', 'con-hub'];

// INTRODUCTION
var intro = ['intro-filinvest-city', 'intro-map'];

// FAST FACTS
var fast_facts = ['fast-facts', 'ceo-statement', 'awards'];

// HISTORY
var histories = ['late-chairman', 'filinvest-before', 'district-area-list1', 'district-area-list2', 'today-logo', 'office-space', 'retail-space'];

// FOUR PILLARS
var four_pillars = [
    ['four-pillars-menu'],
    ['cbd1', 'cbd2', 'cbd3', 'cbd4'],
    ['garden-city1'],
    ['modern-metro1'],
    ['con-hub1', 'con-hub2']
];

// DISTRICTS
var districts = ['districts'];

// UPCOMING DEVELOPMENT
var up_dev = ['up-dev1', 'up-dev2', 'up-dev3'];


// function loadPrevious(category, page) {
//     var path = category.page.previous;
//     mainView.router.loadPage(path);
// }

// function loadNext(page) {
//     var path = category.page.next;
//     mainView.router.loadPage(path);
// }

// function tryFunction(category, page, option) {
//      nextPath = category.page.option;
//     console.log(nextPath);
// }

var myElement = $$(".view")[0];
var mc = new Hammer(myElement);

// let the swipw gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
mc.get('swipe').set({
    direction: Hammer.DIRECTION_ALL,
    velocity: 0.3, // Swipe must be a little fast
    threshold: 80
});

// listen to events...
var tapStatus = false;
mc.on("tap swiperight swipeleft", function (e) {
    //get current page element(jQ)
    var page = $$(e.target).closest('.page');

    //get page name
    var pageName = page.attr('data-page');

    //check if swipe
    if (e.type.indexOf("swipe") !== -1) {
        //get classes of page
        var pageClassList = page[0].classList;

        if (pagesRestrictedSwipe.indexOf(pageName) != -1) return;

        //get category/folder name and subcategory
        var categoryName = page.attr('data-category');
        var subcategoryName = page.attr('data-subcategory');

        //replace _ with -
        var categoryFolder = categoryName.replace(/_/g, '-');

        //treat categoryName value as variable to target variable equivalent
        var categoryPages = eval(categoryName);

        var categoryLength = categoryPages.length;
        var categoryIndex = categories.indexOf(categoryName);

        //set direction value / left -> 1, right -> -1
        //(second condition for each if: check if page is restricted for left/right swipe)
        var direction = 0;
        if (e.type == 'swipeleft' && !page.hasClass('restrict-swipe-left')) direction = 1;
        else if (e.type == 'swiperight' && !page.hasClass('restrict-swipe-right')) direction = -1;
        else return;

        //get page current index
        var currIndex = categoryPages.indexOf(pageName);
        //initialize vars
        var newIndex = 0;
        var newPage = '';
        var path = '';
        var outOfBounds = false;
        var outOfBounds2 = false;

        //check if page has subcategory attribute
        if (typeof subcategoryName !== typeof undefined && subcategoryName != null) {
            var subcategoryIndex = subcategories.indexOf(subcategoryName);
            var subcategoryPages = categoryPages[subcategoryIndex];
            var subcategoryLength = subcategoryPages.length;
            var subcategoryCurrIndex = subcategoryPages.indexOf(pageName);

            //check if out of bounds
            outOfBounds = check_position(subcategoryCurrIndex, subcategoryLength, direction, false);
            // console.log(outOfBounds);
            if (outOfBounds == true) {
                subcategoryIndex += direction;
                subcategoryName = subcategories[subcategoryIndex];
                subcategoryPages = categoryPages[subcategoryIndex]
                if (direction == 1) newIndex = 0;
                else newIndex = subcategoryPages.length - 1;
                outOfBounds2 = check_position(subcategoryIndex, subcategories.length, direction, true);
                // console.log(outOfBounds2);
                if (outOfBounds2 == true) {
                    categoryIndex += direction;
                    categoryFolder = categories[categoryIndex];
                    categoryPages = eval(categoryFolder);
                    if (direction == 1) newIndex = 0;
                    else newIndex = categoryPages.length - 1;
                    subcategoryPages = categoryPages;
                }
            } else {
                newIndex = subcategoryCurrIndex + direction;
            }

            newPage = subcategoryPages[newIndex];
            if (outOfBounds2) path = 'pages/' + categoryFolder.replace(/_/g, '-') + '/' + newPage + '.html';
            else path = 'pages/' + categoryFolder + '/' + subcategoryName + '/' + newPage + '.html';
        } else {
            outOfBounds = check_position(currIndex, categoryLength, direction);
            if (outOfBounds) {
                categoryIndex += direction;
                categoryFolder = categories[categoryIndex];
                categoryPages = eval(categoryFolder);
                if (direction == 1) newIndex = 0;
                else newIndex = categoryPages.length - 1;
            } else {
                newIndex = currIndex + direction;
            }
            newPage = categoryPages[newIndex];

            var typeCheck = typeof newPage !== 'string';
            if (typeCheck) {
                var subcategory = newPage;
                var subcategoryName = subcategories[newIndex];
                var subcategoryLength = subcategory.length - 1;
                newPage = subcategory[subcategoryLength];
                path = 'pages/' + categoryFolder.replace(/_/g, '-') + '/' + subcategoryName + '/' + newPage + '.html';
            } else path = 'pages/' + categoryFolder.replace(/_/g, '-') + '/' + newPage + '.html';
        }
        mainView.router.loadPage(path);
    }

    if (e.type == 'tap') {
        //get class of target element
        var _classList = e.target.classList;
        var classRestrictionFlag = false;

        //loop into element classlist
        $$.each(_classList, function (i, _class) {
            //check if the element has restricted class
            //set flag to true if yes
            if (classRestrictedTap.indexOf(_class) != -1) classRestrictionFlag = true;
        });
        //OBSERVER
        var targetNode = document.getElementsByClassName('view')[0];
        var config = { attributes: true, childList: true, subtree: true };
        var callback = function (mutationList) {
            //check if page name exists on restrictions
            if (pagesRestrictedTap.indexOf(pageName) == -1 && !classRestrictionFlag) {
                if (mutationList.length == 1) {
                    tapStatus = !tapStatus;
                    var x = 0;
                    if (tapStatus) x = "-=750";
                    else x = "0";

                    var tl = new TimelineLite();
                    tl.to('#upper-right-triangle', .5, { top: x })
                        .to('#bottom-right-triangle, .action-box', .5, { bottom: x, ease: Power1.easeNone }, "-=.5")
                        .to('#bottom-left-triangle', .5, { bottom: x, ease: Power1.easeNone }, "-=.5")
                }
            }
            observer.disconnect();
        }
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }
});

function check_position(_index, _length, _direction, subcategory) {
    // console.log("index : " + _index);
    // console.log("length: " + _length);
    // console.log("direction: " + _direction);

    //check if on subcategory folder
    if(subcategory) var x = 0;
    else var x = 1;

    if (_direction == 1) {
        if (_length == _index + x) return true;
    } else {
        if (_index == 0) return true;
    }
    return false;
}


// function swipeEventRoute(category, page, element) {
//     var myElement = document.getElementById(element);
//     var mc = new Hammer(myElement);
//     // console.log(this[category]);
//     mc.get('swipe').set({
//         direction: Hammer.DIRECTION_ALL,
//         velocity: 2 // Swipe must be a little fast
//     });

//     // listen to events...
//     var tapStatus = false;
//     mc.on("tap swiperight swipeleft", function (e) {


//         if (e.type == 'swipeleft') {
//             DEBUG.log('swipeleft trigerred');
//             var nextPath = category.page.next;
//             mainView.router.loadPage(nextPath);
//         } else if (e.type == 'swiperight') {
//             DEBUG.log('swiperight trigerred');
//             var previousPath = category.page.previous;
//             mainView.router.loadPage(previousPath);
//         } else if (e.type == 'tap' && $$(e.target).hasClass('page')) {
//             tapStatus = !tapStatus;
//             var x = 0;
//             if (tapStatus) x = "-=750";
//             else x = "+=750";

//             tl.to('#upper-right-triangle', .5, { top: x })
//                 .to('#bottom-right-triangle', .5, { bottom: x, ease: Power1.easeNone }, "-=.5")
//                 .to('#bottom-left-triangle', .5, { bottom: x, ease: Power1.easeNone }, "-=.5")
//         }

//     });

// }
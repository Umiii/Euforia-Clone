/**
 * Created by Transport_Dept on 9/16/2017.
 */
const navButton = document.querySelector(".nav-control");
const sliderNav = document.querySelector(".slider-nav");
const angleLeft = document.querySelector(".angle-left-link");
const navList = document.querySelector(".nav-list");




navButton.addEventListener('click', function() {
    var width = document.documentElement.clientWidth;   /* gets the width of the browser window */
    if (width > 1024) {
        if (sliderNav.style.left == "" || sliderNav.style.left === "-555px") {
            sliderNav.style.left = "0px";
            sliderNav.style.zIndex = 999;
            sliderNav.style.overflowY = "scroll";
        }
    }
    else if (width < 1024)
    {
        if (navList.style.height === "" || navList.style.height === "0px")
        {
            var navListHeight = document.body.clientHeight - 52;
            navList.style.height = navListHeight + 'px';
            navList.style.opacity = 1;
        } else
        {
            navList.style.height = 0;
            navList.style.opacity = 0;

        }
    }
});


/* The following function closes the slider menu on desktop */
angleLeft.addEventListener('click', function(){
    var width = document.documentElement.clientWidth;
    if (width > 1024) {
        if (sliderNav.style.left === "0px") {
            sliderNav.style.left = "-555px";

        }
    }
});


/* If window is resized adjust navigation accordingly
*  depending on the width
*/
window.addEventListener('resize', function(){
    var width = document.documentElement.clientWidth;
    if (width > 1024)
    {
        navList.style.height = 'unset';
        navList.style.opacity = 1;
    } else
    {
        navList.style.height = 0;
        navList.style.opacity = 0;
    }
});

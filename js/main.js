// Get Scroll Btn
var scrollBtn = document.getElementById("scroll-up");

/** 
 * Check Scroll Position and Display Btn if Needed
 */
function checkScrollPos() {
  var windowHeight = window.innerHeight;
  var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

  if(scrollPos >= windowHeight) {
    scrollBtn.style.opacity = "1";
  } else {
    scrollBtn.style.opacity = "0";
  }
}

/** 
 * Check Scroll Position Every Second
 */
setInterval(function() {
  checkScrollPos()
}, 1000);
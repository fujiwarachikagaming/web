/**
 * @Author: etoyo
 * dynamic frame size
 * edit: realized that this is basically useless with
 * margin: auto but keeping it for the smooth transitions
 */

checkWindowSize();

window.addEventListener("resize", () => {
    checkWindowSize();
});

function checkWindowSize() {
    let minViewWidth = 900;
    let minWidth = 50;
    let maxWidth = 100 - minWidth;
    let viewWidth = document.documentElement.clientWidth;
    
    if(viewWidth >= minViewWidth) {
        let width = minWidth + maxWidth * Math.sqrt(Math.pow(1.006, -(viewWidth - minViewWidth)));
        document.querySelector(".main").style.width = width + "%";
    }else{
        document.querySelector(".main").style.width = maxWidth + minWidth + "%";
    }
}
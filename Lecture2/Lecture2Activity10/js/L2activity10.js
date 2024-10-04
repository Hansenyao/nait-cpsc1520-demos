
/* L2activity10.js

This file contains 2 functions that illustrate how we can apply CSS styles from JavaScript

*/


//This function is to set the font and background colors for the selector element
// Call it like: 
//      changeColor("#paragraph1", "blue", "green");
const changeColor = function(selector, fontColor, backgroundColor) {
    let elem = document.querySelector(selector);
    elem.style.color = fontColor;
    elem.style.backgroundColor = backgroundColor;
}


//This function is to set the font weight and font size for the selector element
// Call it like: 
//      changeSize("#paragraph1", "Bold", "24px");
//      changeSize("#paragraph1", "800", "24px");
const changeSize = function(selector, weightSize, fontSize) {
    let elem = document.querySelector(selector);
    elem.style.fontWeight = weightSize;
    elem.style.fontSize = fontSize;
}

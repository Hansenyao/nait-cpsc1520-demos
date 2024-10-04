/*L2activity8.js
Illustrating the use of prompt() function together with programmer-defined functions

*/





//The function setText sets the string passed as text(its second parameter) as the 
//innerText of the element represented by tyhe given selector(the first parameter)
const setText=function(selector, text) {
    let elem = document.querySelector(selector);
    elem.innerText= text;

}


//The function setContent() has as parameter a selector. It calls the method prompt()
//passing the "Text for <selector>:" as parameter and obtains a text as the input string 
//It the calls the method setText, passingthe selector and the text so that the text is
//set as the innerText of the element represented by the selector

const setContent= function(selector) {
    let str = prompt(`Text for ${selector}:`);
    setText(selector, str);
}
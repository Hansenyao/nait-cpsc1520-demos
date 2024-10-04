
/* CPSC1520- Client-Side Scripting

L3activity4.js

This file a function to illustrate how to add/remove classes to the class list of an element

*/

//Event Listener for the the button with id addClassButton
let button1 = document.querySelector("#addClassButton");
button1.addEventListener("click", () => {
    let elem = document.querySelector("p.recentWork");
    elem.classList.add("specialClass");
})


//Event Listener for the the button with id removeClassButton
let button2 = document.querySelector("#removeClassButton");
button2.addEventListener("click", () => {
    let elem = document.querySelector("p.recentWork");
    elem.classList.remove("specialClass");
})




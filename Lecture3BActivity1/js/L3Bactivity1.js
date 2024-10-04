/* CMPE1520- Client Side Scripting
   Lecture3B- Activity 1
*/


//Declare a global variable counter1 and set its value to 0

let counter1 = 0;

let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");



//Event listener for button1 click event
button1.addEventListener("click", function () {
   counter1++;
   alert(`counter1: ${counter1}`);
})


//Event listener for button2 click event
button2.addEventListener("click", function () {
   let counter2 = 0;
   counter2++;
   alert(`counter1: ${counter1} counter2: ${counter2}`);
})


//Event listener for button3 click event
button3.addEventListener("click", function () {
   let counter2 = 0;
   counter2++;
   alert(`counter1: ${counter1} counter2: ${counter2}`);
})

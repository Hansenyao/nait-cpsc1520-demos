/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/
let counter = 1;
const formElem = document.querySelector(".todo-form");


//Event Listener for the form submit event
formElem.addEventListener("submit", function (evt) {




})

//Writing A click event listener for the todo-list element. The event listener will propapagate down
//reach the target, which is the down arrow. The evnt itself will propagate up to reach the element 
//on which the listener has been defined 
document.querySelector(".todo-list").addEventListener("click", function (evt) {

});
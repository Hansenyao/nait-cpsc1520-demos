
/*CPSC1520- Client-Side Scripting
  Week3- Activity 3- Using Anonymous function as Event listener

*/


//The event listener is defined fully in the place where we would have placed the name
//of a named function
document.querySelector("#button1").addEventListener("click", function(){
    alert("button1 clicked");
})
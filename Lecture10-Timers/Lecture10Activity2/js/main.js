/*
  CPSC 1520- Client-Side Scripting
  Fall 2024
  Lecture 10- Activity 2
*/

document.querySelector("#button1").addEventListener("click", function () {

  let delay = 5;

  document.querySelector(".announcement").innerHTML = `<p>The message will appear in ${delay} seconds</p>`;
 
  setTimeout(displayParagraph, delay*1000, "Edmonton is a cool place.");

});

const displayParagraph=(str1)=> {
  document.querySelector(".mainParagraph").innerHTML = `<p>${str1}</p>`;

}
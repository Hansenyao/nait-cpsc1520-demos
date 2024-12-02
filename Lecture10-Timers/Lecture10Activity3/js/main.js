/*
  CPSC 1520- Client-Side Scripting
  Fall 2024
  Lecture 10- Activity 3
*/

let timer = 0;  // To be used for clearing a setTimerOut

document.querySelector("#button1").addEventListener("click", function () {

  let delay = 5;

  document.querySelector(".announcement").innerHTML = `<p>The message will appear in ${delay} seconds</p>`;
 
  timer = setTimeout(displayParagraph, delay*1000, "Edmonton is a cool place.");

});

const displayParagraph=(str1)=> {
  document.querySelector(".mainParagraph").innerHTML = `<p>${str1}</p>`;

}

// Event handler for the "Stop" button
document.querySelector("#button2").addEventListener("click", () => {
  clearTimeout(timer);
})
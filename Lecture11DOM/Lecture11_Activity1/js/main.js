/*CPSC 1520- Client-Side Sripting

  Lecture11- Activity 1- Creating and appending nodes
*/

document.querySelector("#button1").addEventListener("click", function () {
  let p1 = document.createElement("p");
  let t1 = document.createTextNode("Edmonton is a nice Place");
  p1.appendChild(t1);
  let p2 = document.createElement("p");
  let t2 = document.createTextNode("It’s usually not overcrowded.");
  p2.appendChild(t2);
  let parentElem = document.querySelector("#placeHolder");
  parentElem.appendChild(p1);
  parentElem.appendChild(p2);
})

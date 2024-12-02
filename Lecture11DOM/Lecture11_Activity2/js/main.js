/*CPSC 1520- Client-Side Sripting

  Lecture11- Activity 2- Creating and appending nodes
*/

document.querySelector("#button1").addEventListener("click", function () {
  let count = parseInt(document.querySelector("#numParagraphs").value);

  for (let i = 0; i < count; i++) {
    let text = prompt(`Enter a text (${i+1} of ${count}):`);
    
    let P = document.createElement("p");
    let T = document.createTextNode(text);
    P.appendChild(T);
    document.querySelector("#placeHolder").appendChild(P);
  }
})

/*L3activity1.js
Illustrating the use of event listeners
*/


//Function to act as event listener for the button with id "button1"
let elem1 = document.querySelector("#button1");
let elem2 = document.querySelector("#button2");

//Event listener function
const addParagraphToArticle1 = () => {
    let text = prompt("Enter the text to be added to the article1");
    let article1 = document.querySelector("#article1");
    article1.innerText = text;
}

const addParagraphToArticle2 = () => {
    let text = prompt("Enter the text to be added to the article2");
    let article2 = document.querySelector("#article2");
    //article2.innerHTML = article2.innerHTML + "<p>" + text + "</p>";
    article2.innerHTML += `<p>${text}</p>`;
}

//Register the  function addParagraphToArticle1() as an event listener for the click event for button1
elem1.addEventListener("click", addParagraphToArticle1);
elem2.addEventListener("click", addParagraphToArticle2);






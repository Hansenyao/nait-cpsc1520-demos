/*L3activity3.js
Illustrating the use of event listeners
*/

//Function to act as event listener for the button with id "button1"
document.querySelector("#button1").addEventListener("click", function() {
    let text = prompt("Enter the text to be added to the article1");
    let article1 = document.querySelector("#article1");
    article1.innerText = text;
});

//Function to act as event listener for the button with id "button2"
document.querySelector("#button2").addEventListener("click", () => {
    let text = prompt("Enter the text to be added to the article2");
    let article2 = document.querySelector("#article2");
    //article2.innerHTML = article2.innerHTML + "<p>" + text + "</p>";
    article2.innerHTML += `<p>${text}</p>`;
});



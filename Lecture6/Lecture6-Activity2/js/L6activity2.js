
/* CMPE 1520- Client-side programming with Javascript.
* Lecture 6- Activity 2
* Dynamically Generating a list
*
*/

//Adding an event listener for the click even of the button.
document.querySelector("#button1").addEventListener("click", ()=> {
    let inputText = document.querySelector("#numNames").value;
    if (inputText == "") {
        alert("Please enter a number!");
        return;
    }

    let currentIndex = 0;
    let numTimes = parseInt(inputText);
    document.querySelector(".placeHolder").innerHTML = "";
    while (currentIndex < numTimes ) {
        let name = prompt(`Please enter a nmae (${currentIndex++}/${numTimes}):`);
        document.querySelector(".placeHolder").innerHTML += `<li>${name}</li>`;
    }
})





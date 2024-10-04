//JS File for Lecture4-Activity 8


// Create a handle for the button
let myButton = document.querySelector("#addElementBtn");

//Add an event handler for the button such that when it's clicked,
// a prompt box is displayed.The string input by the user is added as a
//paragraph to the div element with is "placeholder"
myButton.addEventListener("click", () => {
    let text = prompt("Please enter any text:");
    if (!isLongerThan2(text)) {
        alert("Text must be more than 2 characters.");
        return;
    }
    //
    let elem = document.querySelector("#placeHolder");
    elem.innerHTML += `<p>${text}</p>`;
})

const isLongerThan2 = (str) => {
    if (str.length > 2) {
        return true;
    }
    else {
        return false;
    }
}

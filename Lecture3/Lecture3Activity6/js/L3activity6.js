/*

Lecture3-Activity 6

Using a parameter with an event listener*/
let button1 = document.querySelector("#button1");
button1.addEventListener("click", (event)=> {
    event.target.innerText = "No More Click";
    event.target.disabled = true;
})


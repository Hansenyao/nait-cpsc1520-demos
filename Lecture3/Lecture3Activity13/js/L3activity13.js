/*Lecture3-Activity 13- Using Bootstrap classes*/

let elem = document.querySelector(".para");

elem.addEventListener("mouseover", (event) => {
    event.target.classList.add("alert");
    event.target.classList.add("alert-primary");
})

elem.addEventListener("mouseout", (event) => {
    event.target.classList.remove("alert");
    event.target.classList.remove("alert-primary");
})


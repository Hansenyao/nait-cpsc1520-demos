/*Lecture3-Activity 10- Illustrating the mouseover and mouseout events */

document.querySelector(".para").addEventListener("mouseover", (event) => {
    event.target.classList.add("mouseOver");
})

document.querySelector(".para").addEventListener("mouseout", (event) => {
    event.target.classList.remove("mouseOver");
})

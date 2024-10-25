/*CPSC 1520- Client-Side Sripting

  Lecture6B- Activity 12- Working with Pictures and Filters
*/

let pictures = Array.from(document.querySelectorAll("img"));

document.querySelector("#filterButton").addEventListener("click", () => {
  let inputValue = document.querySelector("#filter").value;

  const toShow = pictures.filter((element) => element.src.includes(inputValue));

  pictures.forEach((element) => {
    if (toShow.includes(element)) {
      element.classList.remove("hidden");
    }
    else {
      element.classList.add("hidden");
    }
  })
});
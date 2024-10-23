/* CMPE 1520 - Client-Side Scripting
   Lecture6B Activity 8
   Working with Checkboxes

*/
let cities = document.querySelectorAll(".city");
let labels = document.querySelectorAll(".city_label");
let cities_visited = document.querySelector(".visited");

document.querySelector("#button1").addEventListener("click", function () {
   let str = "";
   cities.forEach((element, index) => {
      if (element.checked) {
         labels[index].classList.add("selected");
         str += `<li>${element.value}</li>`;
      }
      else {
         labels[index].classList.remove("selected");
      }
   });

   cities_visited.innerHTML = str;
});
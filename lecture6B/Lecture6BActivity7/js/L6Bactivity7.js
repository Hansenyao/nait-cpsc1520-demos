/* CMPE 1520 - Client-Side Scripting
   Lecture6B- Activity 7
   Working with Checkboxes

*/

let beverages = document.querySelectorAll("[name=Beverages]");
document.querySelector("#button1").addEventListener("click", function () {
    let labels = document.querySelectorAll(".radio_label");
    let choiceElement = document.querySelector(".choice");

    beverages.forEach((element, index) => {
        if (element.checked) {
            labels[index].classList.add("selected");
            //choiceElement.innerText = labels[index].innerText;
            choiceElement.innerText = element.value;
        }
        else {
            labels[index].classList.remove("selected");
        }
    })
}); 

/*
beverages.forEach((element) => {
    element.addEventListener('change', (event) => {
        alert(this.value);
        if (event.target.checked) {
            event.target.classList.add("selected");
        }
        else {
            event.target.classList.remove("selected");
        }
    });
});
*/

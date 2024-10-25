/*
 CPSC 1520- Client-Side Scripting
 Lecture6B- Activity 13

 Using document.querySelectorAll() and array Filter() method
*/



/*
  The event listener of the click event of the button, 
*/

document.querySelector("#button1").addEventListener("click", function () {
  let inputValue = document.querySelector("#chosenProvince").value;
  if (inputValue.trim().length == 0) {
    alert("The input box is empty.");
    return;
  }

  let citiesElement = document.querySelector(".cities");
  let citiesArray = Array.from(document.querySelectorAll("li"));
  let chosenCities = citiesArray.filter(item => item.innerText.includes(inputValue));
  citiesElement.innerHTML = "";
  chosenCities.forEach((element) => {
    let str = element.innerText.replace(`(${inputValue})`, "");
    citiesElement.innerHTML += `<p>${str}</p>`;
  })

});
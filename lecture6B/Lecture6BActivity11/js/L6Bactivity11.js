/*
 CPSC 1520- Client-Side Scripting
 Lecture6B- Activity 11
*/

citiesList=["Edmonton (Alberta)", "Toronto (Ontario)", "Vancouver (British Columbia)",
            "Calgary (Alberta)", "London (Ontario)", "Waterloo (Ontario)", 
            "Kelowna (British Columbia)", "Golden (British Columbia)", "Grande Prairie (Alberta)"          
           ]

const displayCities = (cityArray) => {
  let elem = document.querySelector(".cities");
  elem.innerHTML = "";
  cityArray.forEach((element, index) => {
    elem.innerHTML += `<li> ${element} <button type="button" class="remove-button" position="${index}" >Remove</button></li>`;
  });
}

displayCities(citiesList);

document.querySelector("#button1").addEventListener("click", () => {
  let cityName = prompt("Please enter the city name:");
  citiesList.push(cityName);
  displayCities(citiesList);
})

document.querySelector(".cities").addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    const itemToRemove = parseInt(event.target.getAttribute("position"));
    citiesList.splice(itemToRemove, 1);
    displayCities(citiesList);
  }
});
/*
 CPSC 1520- Client-Side Scripting
 Lecture6B- Activity 6

 Using document.querySelectorAll()
*/


/*
  The event listener of the click event of the button, picks all cities/towns in selected province
*/

document.querySelector("#button1").addEventListener("click", function () {
  // Get the province name
  let inputElem = document.querySelector("#chosenProvince");
  let province = inputElem.value.trim();
  if (province.length == 0) {
    alert("Please enter the province name.");
    inputElem.focus();
    return;
  }
  inputElem.value = "";

  // Initialize
  let cities = document.querySelector(".cities");
  cities.innerHTML = "";

  // Get all city item element
  const citiesNodeList = document.querySelectorAll("li");

  // Change
  document.querySelector("#citiesHeader").innerHTML = `The List of Cities/Towns in ${province}`;

  // Loop the city array
  citiesNodeList.forEach((element, index) => {
    let cityName = element.innerText;
    if (cityName.includes(province)) {
      cityName = cityName.replace(`(${province})`, "");
      cities.innerHTML += `<p>${cityName}</p>`;
      // Debug
      console.log(`${index}: ${cityName}`);
    }
  })

});
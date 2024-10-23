/*
 CPSC 1520- Client-Side Scripting
 Lecture6B Activities 4 & 5

 Using document.querySelectorAll()

  In this file, we use document.querySelectorAll() to obtain an array of all elements of type li.

  The we use 2 ways to iterate through the array.
  The 1st way (Activity 4) is using a general for loop, where we use a counter. To access each element, we use the array name and the index.
   
  The second way (Activity 5), we use a forEach() method. Here we directly access elements of the array without using an index

*/


/*
  The event listener of the click event of the button, picks all cities/towns in Alberta
*/

document.querySelector("#button1").addEventListener("click", function () {
  // Initialize
  let cities = document.querySelector(".cities");
  cities.innerHTML = "";

  // Get all city item element
  const citiesNodeList = document.querySelectorAll("li");

  // Loop the city array
  for (let index = 0; index < citiesNodeList.length; index++) {
    let cityName = citiesNodeList[index].innerText;
    if (cityName.includes("(Alberta)")) {
      cityName = cityName.replace("(Alberta)", "");
      cities.innerHTML += `<p>${cityName}</p>`;
    }
  }
});
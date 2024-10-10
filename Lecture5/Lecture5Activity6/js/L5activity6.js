/* CMPE1520- Client Side Scripting
   Week5- Activity 6

  Using Select Elements with explicit values for the options

   */


//Event listener for the change event of the select element
// Option A:
document.querySelector("#city").addEventListener("change", (event)=>{
   let selectedCity = event.target.options[event.target.selectedIndex].innerText;
   let selectedPopulation = event.target.value;
   document.querySelector(".population").innerHTML = `The city ${selectedCity} has a population of: ${selectedPopulation} thousands`;
});


// Option B:
let selectedElem = document.querySelector("#city");
selectedElem.addEventListener("change", (event)=>{
   let selectedCity = selectedElem.options[selectedElem.selectedIndex].innerText;
   let selectedPopulation = selectedElem.value;
   document.querySelector(".population").innerHTML = `The city ${selectedCity} has a population of: ${selectedPopulation} thousands`;
 });
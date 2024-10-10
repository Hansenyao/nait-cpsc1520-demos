/* CMPE1520- Client Side Scripting
   Lecture5- Activity 4

  Using Select Elements

   */


//Event listener for the change event of the select element
document.querySelector("#city").addEventListener("change", (event)=>{
   let selectedCity = event.target.value;
   document.querySelector(".selectedCity").innerHTML = `The chosen city was: ${selectedCity}`;
});

document.querySelector("#displaySelect").addEventListener("click", () => {
   let selectedCity = document.querySelector("#city").value;
   alert(`The chosen city was: ${selectedCity}`);
});
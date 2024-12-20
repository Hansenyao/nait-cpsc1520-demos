/*
 CPSC 1520- Client-Side Scripting
 Lecture6B- Activity 15

 Using document.querySelectorAll()
*/

let capitalsArray=["Ottawa","London","Paris","Madrid","Rome","New Delhi", "Beijing","Tokyo","Washington","Berlin",
                 "Johannesburg", "Cairo" ]

let countriesArray= ["Canada","England", "France", "Spain", "Italy", "India", "China", "Japan", "USA", "Germany", "South Africa", "Egypt"];
/*
  The event listener of the click event of the button,
*/
document.querySelector("#displayPairs").addEventListener("click", ()=> {
    let capitalsList = document.querySelector(".capitals");
    let resultArray = capitalsArray.map((x, index) => `<li>${x} - ${countriesArray[index]}</li>`)
  //
    capitalsList.innerHTML = "";
    resultArray.forEach((item) => {
      capitalsList.innerHTML += item;
    })
});
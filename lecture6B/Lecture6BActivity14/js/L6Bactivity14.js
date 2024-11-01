/*
 CPSC 1520- Client-Side Scripting
 Lecture6B- Activity 14

 Using document.querySelectorAll()
*/

let capitalsArray=["Ottawa","London","Paris","Madrid","Rome","New Delhi", "Beijing","Tokyo","Washington","Berlin",
                 "Johannesburg", "Cairo" ]


/*
  The event listener of the click event of the button, 
*/

document.querySelector("#displayCapitals").addEventListener("click", ()=> {
  let capitalsList = document.querySelector(".capitals");
  let result = capitalsArray.map((capital) => `<li>${capital}</li>`);
  //
  capitalsList.innerHTML = "";
  result.forEach((item) => {
    capitalsList.innerHTML += item;
  })
});
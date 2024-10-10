/* CMPE1520- Client Side Scripting
   lecture5- Activity 5

  Introduction To Forms

   */

//The function isEmptyString()  
const isEmptyString = (str) => {
   return str == "" ? true : false;
}

//The function isAtLeast18
const isAtLeast18 = (age) => {
   return age >= 18 ? true : false;
}

// Handle form submit event and prevent the default action
let myForm = document.querySelector(".myForm");
myForm.addEventListener("submit", (event) => {
   let valid = true;

   let firstName = myForm.elements["userFName"].value;
   let lastName = myForm.userLName.value;
   let age = myForm.userAge.value;

   if (isEmptyString(firstName) || isEmptyString(lastName) || !isAtLeast18(parseInt(age))) {
      alert("User Name should not be empty, and age must be old than 18.");
      valid = false;
   }
   
   if (valid) {
      document.querySelector("#users").innerHTML += `<p>${firstName} ${lastName} ${age}</p>`;
   }

   event.preventDefault();
});


//Handle form reset event
let counter = 0;
document.querySelector(".myForm").addEventListener("reset", ()=>{
   console.log(`Reset Times: ${++counter}`);
});
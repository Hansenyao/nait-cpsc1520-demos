/* CMPE1520- Client Side Scripting
   lecture5- Activity 1

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

document.querySelector("#button1").addEventListener("click", () => {
   let valid = true;

   let firstName = document.querySelector("#firstName").value;
   if (isEmptyString(firstName)) {
      alert("First Name should not be empty.");
      valid = false;
   }

   let lastName = document.querySelector("#lastName").value;
   if (isEmptyString(lastName)) {
      alert("Last Name should not be empty.");
      valid = false;
   }

   let age = document.querySelector("#age").value;
   if (!isAtLeast18(parseInt(age))) {
      alert("You must be old than 18.");
      valid = false;
   }
   
   if (valid) {
      document.querySelector("#users").innerHTML += `<p>${firstName} ${lastName} ${age}</p>`;
   }
});
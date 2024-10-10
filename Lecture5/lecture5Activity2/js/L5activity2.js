/* CMPE1520- Client Side Scripting
   lecture5- Activity 2

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
   let lastName = document.querySelector("#lastName").value;
   let age = document.querySelector("#age").value;

   if (isEmptyString(firstName) || isEmptyString(lastName) || !isAtLeast18(parseInt(age))) {
      alert("User Name should not be empty, and age must be old than 18.");
      valid = false;
   }
   
   if (valid) {
      document.querySelector("#users").innerHTML += `<p>${firstName} ${lastName} ${age}</p>`;
   }
});
/* CMPE1520- Client Side Scripting
   Lecture4- Activity 9

   Using Compound Conditions

   */

/*Event listener for the click event of the button
   The event listener will prompt the suer for 2 values, namely the age and 
   the number of years since he/she graduated and will decide the loan eligibility
   based on the following criteria:
   To be eligible, the person must be 40 years old or less, and must have graduated 
   from Unversity since 5 years or less
*/

let button = document.querySelector("#button1");
button.addEventListener("click", () => {
   let labelElem = document.querySelector(".eligibility");
   let age = prompt("Please enter your age:");
   let graduatedYears = prompt("Please enter your graduated years:");
   if (IsEligibleForLoan(age, graduatedYears)) {
      labelElem.innerText = "You are eligible to start up a loan.";
      labelElem.style.color = "blue";
   }
   else {
      labelElem.innerText = "You are NOT eligible to start up a loan.";
      labelElem.style.color = "red";
   }
})

//// For Activity 9
// const IsEligibleForLoan = (age, graduatedYears) => {
//    if ((age <= 40) && (graduatedYears <= 5)) {
//       return true;
//    }
//    else {
//       return false;
//    }
// }

//// For Activity 10
// const IsEligibleForLoan = (age, graduatedYears) => {
//    if ((age <= 40) || (graduatedYears <= 5)) {
//       return true;
//    }
//    else {
//       return false;
//    }
// }

// For Activity 11
const IsEligibleForLoan = (age, graduatedYears) => {
   if (!(age > 40) || !(graduatedYears > 5)) {
      return true;
   }
   else {
      return false;
   }
}
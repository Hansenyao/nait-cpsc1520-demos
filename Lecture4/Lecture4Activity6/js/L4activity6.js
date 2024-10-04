/* CMPE1520- Client Side Scripting
   Lecture4- Activity 5

   Using the if .... else structure

   */


//Declare a global variable toggleValue and set it to 0.
let pictureVisible = false;

//Write the code including the Event Listener To toggle the picture.
//The text on the button should also toggle between Hide Picture/Show Picture,
//depending on whether the picture is currently visible or not.
let button = document.querySelector("#button1");

// Way 1:
// button.addEventListener("click", () => {
//    let image = document.querySelector(".image");
//    if (!pictureVisible) {
//       image.classList.remove("hidden");
//       button.innerText = "Hide Picture";
//       pictureVisible = true;
//    }
//    else {
//       image.classList.add("hidden");
//       button.innerText = "Show Picture";
//       pictureVisible = false;
//    }
// });

// Way 2:
button.addEventListener("click", () => {
   let image = document.querySelector(".image");
   if (image.classList.contains("hidden")) {
      image.classList.remove("hidden");
      button.innerText = "Hide Picture";
   }
   else {
      image.classList.add("hidden");
      button.innerText = "Show Picture";
   }
});
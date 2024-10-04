/*In this exercise, we will have 3 event listeners.
  The first one will assign an image file to the src attribute of the first element of class image. This will cause 
  the picture to be displayed on the website.
  
  The second event listener will cause the picture to disappear by adding the class hidden to the class list of the 
  image element

The third event listener will cause the picture to disappear by adding the class hidden to the class list of the 
image element

*/


//Event Listener for the button with id assignImage
document.querySelector("#assignImage").addEventListener("click", () => {
  let image = document.querySelector(".image");
  image.src = "image/bird.jpg";
});


//Event Listener for the button with id hidePic
document.querySelector("#hidePic").addEventListener("click", () => {
  let image = document.querySelector(".image");
  image.classList.add("hidden");
});


//Event Listener for the button with id showPic
document.querySelector("#showPic").addEventListener("click", () => {
  let image = document.querySelector(".image");
  image.classList.remove("hidden");
});

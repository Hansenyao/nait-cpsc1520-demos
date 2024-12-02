/*CPSC 1520- Client-Side Sripting

  Lecture10- Activity 4- Working with Array of Pictures
*/

/*The Picture Files*/
let PictureArray = ["bird1.jfif", "bird2.jfif", "bird3.jfif", "bird4.jfif", "bull1.jfif", "bull2.jpg",
  "bull3.jpg", "Norway-electric-plane.jpg", "plane1.jpg", "plane2.jpg"];

/*alt text for the pictures*/
let PictureText = ["First Bird", "Second Bird", "Third Bird", "Fourth Bird", "First Bull", "Second Bull", "Third Bull",
  "Norway Electric Plane", "JetStar", "162-Skidoo"];


let counter = 0;//This global variable is used as index into the array

//The timer variable is assigned the returned value of setInterval to allow us to 
//stop the automated display
let timer = 0;


//Create handle for the img element
let myImage = document.querySelector(".mainImage");


//The file names for the images are found in the PictureArray variable
//Assign the first element of PictureArray combined with the appropriate folder name to
//the src attribute of the img element
//Note that we want to pull img/bird1.jfif
myImage.src = `img/${PictureArray[0]}`;


//Assign the first element of PictureText to the alt attribute of the img element
myImage.alt = PictureText[0];

//Function to move picture to next one

function movePicture() {
  counter += 1;
  if (counter == PictureArray.length)
    counter = 0;
  myImage.src = `img/${PictureArray[counter]}`;
  myImage.alt = PictureText[counter];

};

//event listener for the play Button 
document.querySelector("#playButton").addEventListener("click", function () {
  timer = setInterval(movePicture, 1000);
});


//event listener for the stop Button 
document.querySelector("#stopButton").addEventListener("click", function () {
  clearInterval(timer);
});
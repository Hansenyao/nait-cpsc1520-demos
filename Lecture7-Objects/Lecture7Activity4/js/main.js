
//CPSC 1520 Lecture7-Activity 4

let carArray=[];
let counter=0;


const car = function(regNumber, make, color) {
    this.regNumber = regNumber,
    this.make = make,
    this.color = color
}

document.querySelector("#addToArrayBtn").addEventListener("click", () => {
    let carForm = document.querySelector("#carForm");
    var newCar = new car(carForm["regNo"].value, carForm["make"].value, carForm["color"].value)
    carArray.push(newCar);
})

let curIndex = 0;
document.querySelector("#displayCarsBtn").addEventListener("click", () => {
    let placeHolder = document.querySelector("#placeHolder");
    let str = JSON.stringify(carArray[curIndex]);
    curIndex = (++curIndex) % carArray.length;
    placeHolder.innerHTML = str;
})
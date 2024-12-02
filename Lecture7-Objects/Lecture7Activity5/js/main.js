
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
    /*
    let placeHolder = document.querySelector("#placeHolder");
    let str = JSON.stringify(carArray[curIndex]);
    curIndex = (++curIndex) % carArray.length;
    placeHolder.innerHTML = str;
    */
    let placeHolder = document.querySelector("#placeHolder");
    placeHolder.innerHTML = "";
    carArray.forEach((element) => {
        placeHolder.innerHTML += `<p>${JSON.stringify(element)}</p>`;
    });
})

document.querySelector("#filterColor").addEventListener("change", (event) => {
    let selectedColor = event.target.value;
    console.log(selectedColor);

    let selectedCarsElem = document.querySelector("#selectedCars");
    selectedCarsElem.innerHTML = `<h2>${selectedColor}</h2>`;
    selectedCarsElem.innerHTML += `<br>`;
    
    let selectedCars = carArray.filter(x => x.color == selectedColor);
    selectedCars.forEach((element) => {
        selectedCarsElem.innerHTML += `<p>${JSON.stringify(element)}</p>`;
    })
})
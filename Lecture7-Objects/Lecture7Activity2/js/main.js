
//CPSC 1520 Lecture7-Activity 2

const car = function(regNumber, make, color) {
    this.regNumber = regNumber,
    this.make = make,
    this.color = color
}

document.querySelector("#carForm").addEventListener("submit", (event) => {
    event.preventDefault();

    var car1 = new car( event.target.elements["registration"].value, 
                        event.target.elements["carMake"].value, 
                        event.target.elements["carColor"].value);

    console.log(car1);
    //alert(JSON.stringify(car1));
    let paragraph = `<p>Registration Number:${car1.regNumber}, Make: ${car1.make}, Color:${car1.color}</p>`;

    document.querySelector("#placeHolder").innerHTML += paragraph;

    event.target.reset();
});
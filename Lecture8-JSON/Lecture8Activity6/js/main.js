//CPSC 1520- Lecture 8 - Activity 6 - 

let person1 = {
    name: "John Smith",
    address: {
        houseNo: 2501,
        street: "180 Ave SW",
        city: "Edmonton"
    },
    courses: ["COMP 1017", "CPSC 1012", "CPSC 1520"],
    Marks: [75, 82, 91]

}

let car1 = `{
    "regNo": "BDT 4468",
    "make": "Jeep",
    "model": "Cherokee",
    "color": "Black",
    "engineCapacity": 2.3

}`;

//Event Listener
document.querySelector("#button1").addEventListener("click", () => {
    let newPerson = JSON.stringify(person1);
    let newCar = JSON.stringify(car1);

    console.log(newPerson);
    console.log(newCar);
})




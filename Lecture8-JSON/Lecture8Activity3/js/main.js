//CPSC 1520- Lecture 8 - Activity3


document.querySelector("#button1").addEventListener("click", () => {
    fetch("js/cardata.json")
        .then((res) => {
            console.log(res.status);
            res.json().then((data) => {
                let array = createOutputArray(data);
                displayArray(array);
            })
        })
        .catch((error) => {console.log(`error is: ${error}`)})

    
    fetch("js/cardata.json")
        .then((res) => {
            console.log(res.status);
            res.json().then((data) => console.log(data)); 
        })
        .catch((error) => {console.log(`error is: ${error}`)})
    
});

const createOutputArray = (array) => {
    let resultArray = array.map((car) => 
        `<div>
            <p>Registartion Number: ${car.regNo}</p>
            <p>Make: ${car.make}</p>
            <p>Model: ${car.model}</p>
            <p>Color: ${car.color}</p>
            <p>Engine Capacity: ${car.engineCapacity}L</p>
        </div>`)
    return resultArray;
}

const displayArray = (displayArray) => {
    let placeHolder = document.querySelector("#placeHolder1");
    placeHolder.innerHTML = "";

    displayArray.forEach((element) => {
        placeHolder.innerHTML += element;
    });
}


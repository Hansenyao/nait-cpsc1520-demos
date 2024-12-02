//CPSC 1520- Lecture7 - Activity 6

//Creating the array of objects
carArray = [

    {
        Id: 1,
        make: "Honda",
        model: "Civic",
        color: "Blue",
        engineCapacity: 1.5,
        year: 2016,
        cost: 18000
    },
    {
        Id: 2,
        make: "Honda",
        model: "Accord",
        color: "Black",
        engineCapacity: 1.8,
        year: 2015,
        cost: 19000
    },



    {
        Id: 3,
        make: "Jeep",
        model: "Cherokee",
        color: "Black",
        engineCapacity: 2.3,
        year: 2016,
        cost: 20000
    },

    {
        Id: 4,
        make: "Audi",
        model: "Q3",
        color: "White",
        engineCapacity: 2.5,
        year: 2018,
        cost: 28000
    },


    {
        Id: 5,
        make: "Toyota",
        model: "Corolla",
        color: "Blue",
        engineCapacity: 1.8,
        year: 2017,
        cost: 22000

    },
    {
        Id: 6,
        make: "BMW",
        model: "X3",
        color: "Grey",
        engineCapacity: 2.7,
        year: 2019,
        cost: 32000

    }
]

let result = [];

let placeHolderElem = document.querySelector("#placeHolder1");

//The displayTemplate function
const displayTemplate = (str) => {
    placeHolderElem.innerHTML += `<p>${str}</p>`;
}

document.querySelector("#button1").addEventListener("click", () => {
    placeHolderElem.innerHTML = "";
    // Option 1:
    //result = carArray.map(x => `<p>Id: ${x.Id}, make/model: ${x.make}/${x.model}, color: ${x.color}, engine: ${x.engineCapacity}L, cost: $${x.cost}</p>`);
    // Option 2:
    result = carArray.map(x => `<p>Id: ${x["Id"]}, make/model: ${x["make"]}/${x["model"]}, 
                                color: ${x["color"]}, engine: ${x["engineCapacity"]}L, cost: $${x["cost"]}</p>`);
    result.forEach((element) => {
        displayTemplate(element);
    })
})
//CPSC 1520- Lecture 8B - Activity3

carData= [  {
  regNo: "CBS 4325",
  make: "Honda",
  model: "Civic",
  color: "Blue",
  engineCapacity: 1.3
},

{
  regNo: "BDT 4468",
  make: "Jeep",
  model: "Cherokee",
  color: "Black",
  engineCapacity: 2.3
},
{
  regNo: "ABG 5094",
  make: "Audi",
  model: "Q3",
  color: "White",
  engineCapacity: 2.5
},
{
  regNo: "YTD 3215",
 make: "Toyota",
  model: "Corolla",
  color: "Blue",
  engineCapacity: 1.4
},
{
  regNo: "VGS 2132",
  make: "BMW",
  model: "X3",
  color: "Grey",
  engineCapacity: 2.7
}
]

let button1= document.querySelector("#button1");
let button2= document.querySelector("#button2");


const createOutputArray= (array)=>{

  let result= array.map((car)=>
                    `<div>
                      <p>Registration Number: ${car.regNo}</p>
                      <p>Make: ${car.make}</p>
                      <p>Model: ${car.model}</p>
                      <p>Color: ${car.color}</p>
                      <p>Engine Capacity: ${car.engineCapacity}L</p>

                     </div>
                     
                     <BR> `)

  return result;

}

const displayArray=(placeHolder, elementsArray)=>{
    placeHolder.innerHTML=``;

    elementsArray.forEach((item)=>{

          placeHolder.innerHTML +=item;
    })
}

button1.addEventListener("click", () => {
  let elem = document.querySelector("#placeHolder1");
  let resultArray = createOutputArray(carData);
  displayArray(elem, resultArray);
})

button2.addEventListener("click", () => {
  let elem = document.querySelector("#placeHolder2");
  let resultArray = createOutputArray(carData.sort(sortCarHelper));
  displayArray(elem, resultArray);
})


const sortCarHelper = (a, b) => {
  
  // if (a.regNo < b.regNo) 
  //   return -1;
  // else if(a.regNo > b.regNo)
  //   return 1;
  // else
  //   return 0;

  return a.regNo < b.regNo ? -1 : 1;
}
//JS File for Lecture6B-Activity10


let cityArr=[]

document.querySelector("#addCity").addEventListener("click", () => {
    let city = prompt("Input a city");
    cityArr.push(city);
    console.log("New Arrary is: ", cityArr);
});

document.querySelector("#buildList").addEventListener("click", () => {
    let str = ``;
    cityArr.forEach((city) => {
        str += `<li>${city}</li>`;
    })
    document.querySelector("#placeHolder").innerHTML = str;
});


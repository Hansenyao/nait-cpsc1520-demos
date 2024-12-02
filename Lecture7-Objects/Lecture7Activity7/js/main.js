let cityNameElem = document.querySelector("#cityName");
let institutionsElem = document.querySelectorAll("li");

document.querySelector("#myButton1").addEventListener("click", () => {
    let cityPlaceHolder = document.querySelector("#cityPlaceHolder");
    cityPlaceHolder.innerText = `List of Institutions From ${cityNameElem.innerText}`;

    // We create an array from the Nodelist
    let institutionsArray = Array.from(institutionsElem);

    let resultArray = institutionsArray.filter((element) => element.getAttribute("city") == cityNameElem.value);

    let itemList = resultArray.map((item) => `<li>${item.innerText}, Id: ${item.id}, Status: ${item.getAttribute("status")}</li>`);

    let selectedList = document.querySelector("#selectedList");
    selectedList.innerHTML = ``;

    itemList.forEach((item) => {
        selectedList.innerHTML += item;
    })
})

document.querySelector("#myButton2").addEventListener("click", () => {
    institutionsElem.forEach((school) => {
        let rating = prompt(`Plese enter a rating for ${school.innerText}`);
        school.setAttribute("rating", rating);
    })
})
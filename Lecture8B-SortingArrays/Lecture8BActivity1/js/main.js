

let numbersArray = [12,4,534,66,23,-1,3,0,-90,23];
let stringArray = ["Edmonton", "Calgary", "Waterloo", "Red Deer", "Leduc"];

document.querySelector("#displayNumbersBtn").addEventListener("click", () => {
    document.querySelector("#initialNumbers").innerHTML = numbersArray;
});

document.querySelector("#sortNumbersBtn").addEventListener("click", () => {
    document.querySelector("#sortedNumbers").innerHTML = numbersArray.sort(function(a, b) {return a - b;});
});

document.querySelector("#displayStringsBtn").addEventListener("click", () => {
    document.querySelector("#initialStrings").innerHTML = stringArray;
});

document.querySelector("#sortStringsBtn").addEventListener("click", () => {
    document.querySelector("#sortedStrings").innerHTML = stringArray.sort();
});
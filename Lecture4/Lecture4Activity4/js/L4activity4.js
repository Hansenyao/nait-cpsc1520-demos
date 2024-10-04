
let counter = 0;

document.querySelector("#button1").addEventListener("click", function (event) {
    let elem = document.querySelector(".para");
    let text = prompt(`Please give the text for paragraph ${++counter}`);
    elem.innerHTML += `<p>${text}</p>`;
    if (counter >= 5) {
        event.target.disabled = true;
    }
})
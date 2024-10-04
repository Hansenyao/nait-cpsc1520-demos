document.querySelector("#button1").addEventListener("click", function (event) {
    let elem = document.querySelector(".para");

    if (elem.innerHTML == "") {
        let text = prompt("Please input text:");
        elem.innerHTML = `<p>${text}</p>`;
        event.target.disabled = true;
    }
})
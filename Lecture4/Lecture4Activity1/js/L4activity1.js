document.querySelector("#button1").addEventListener("click", function () {
    let elem = document.querySelector(".para");

    if (elem.innerHTML == "")
    elem.innerHTML += "<p> This is my paragraph</p>";


})
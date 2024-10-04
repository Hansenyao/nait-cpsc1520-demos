
document.querySelector("img").addEventListener("mouseover", (e) => {
    let elem = document.querySelector(".lakelouise.summer");
    elem.innerHTML = e.target.alt;
    elem.classList.add("specialEffect");
})


document.querySelector("img").addEventListener("mouseout", (e) => {
    let elem = document.querySelector(".lakelouise.summer");
    elem.innerHTML = "";
    elem.classList.remove("specialEffect");
})
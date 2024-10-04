/*

Create a click event listener on the .image-links element.  The listener function
should set the src attribute of the img.target-image element and prevent the default
behaviour from occurring.

*/

document.querySelector(".image-links").addEventListener("click", (event) => {
    event.preventDefault();
    let elem = document.querySelector(".target-image");
    elem.src = event.target.href;
})

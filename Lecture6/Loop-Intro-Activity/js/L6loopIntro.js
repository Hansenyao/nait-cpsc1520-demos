
/* CMPE 1520- Client-side programming with Javascript.
* Loop- Introductory Activity
* 
*
*/

//Adding an event listener for the click even of the button.
document.querySelector("#button1").addEventListener("click", ()=> {
    let counter = 1;
    while (counter <= 5) {
        console.log("Hello World! Value of counter = " + counter);
        counter++;
    }
})



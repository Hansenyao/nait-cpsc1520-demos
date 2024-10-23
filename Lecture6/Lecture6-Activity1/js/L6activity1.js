
/* CMPE 1520- Client-side programming with Javascript.
* Lecture 6- Activity 1
* Using Loops
*
*/

//Adding an event listener for the click even of the button.
document.querySelector("#button1").addEventListener("click",  ()=> {
    //Part (a) Using a while loop to add Hello World a given number of times on a web page
    let count = document.querySelector("#numTimes").value;
    document.querySelector(".placeHolder").innerHTML = "";
    
    // Way 1:
    // while (count > 0) {
    //     document.querySelector(".placeHolder").innerHTML += "Hello World<br>";
    //     count--;
    // }

    // Way 2:
    // do {
    //     document.querySelector(".placeHolder").innerHTML += "Hello World<br>";
    //     count--;
    // } while(count > 0);

    // Way 3:
    for(let i = 0; i < count; i++){
        document.querySelector(".placeHolder").innerHTML += "Hello World<br>";
    }
});





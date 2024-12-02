//CPSC 1520- Lecture8 - Activity 4 - Pulling Data using fetch


document.querySelector("#button1").addEventListener("click", () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    request.onload = () => {
        //console.log(request);
        console.log(request.status);
        if (request.status >= 200 && request.status < 400) {
            console.log("Success");
            let data = JSON.parse(request.response);
            console.log(data);
        }
        else {
            console.log("Failed");
        }
    }

    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => {res.json().then((data) => console.log(data)); })
    //     .catch((error) => {console.log(`error is: ${error}`)})
});
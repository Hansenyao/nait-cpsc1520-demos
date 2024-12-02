//CPSC 1520- Lecture8 - Activity 4 - Pulling Data using fetch


document.querySelector("#button1").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users?id=2")
        .then((res) => {
            console.log(res.status);
            res.json().then((data) => {
                console.log(data);
            })
        })
        .catch((error) => {
            console.log(`error is: ${error}`)
        })
});
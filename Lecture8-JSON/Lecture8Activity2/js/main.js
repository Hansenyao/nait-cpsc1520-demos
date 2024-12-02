//CPSC 1520- Lecture 8 - Activity 2 - Pulling Data using fetch


document.querySelector("#button1").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res.status);
            console.log(res.json()); 
        })
        .catch((error) => {console.log(`error is: ${error}`)})

        
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {res.json().then((data) => console.log(data)); })
        .catch((error) => {console.log(`error is: ${error}`)})
});
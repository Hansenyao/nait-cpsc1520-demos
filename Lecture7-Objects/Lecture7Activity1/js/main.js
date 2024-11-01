//Lecture 7- Activity 1- Working with literal Objects


document.querySelector("#demoButton1").addEventListener("click", () => {
    let student1 = {
        studentId: 9874,
        firstName: "Jeffrey",
        lastName: "Douglas"
    }
    console.log(student1);
    alert(JSON.stringify(student1));
})

document.querySelector("#demoButton2").addEventListener("click", () => {
    let student2 = {
        studentId: 6142,
        course1: "CMPE2000",
        course2: "CMPE1666"
    }
    console.log(student2);
    alert(JSON.stringify(student2));
})

document.querySelector("#demoButton3").addEventListener("click", () => {
    let car1 = {
        make: "Honda",
        model: "Civic",
        engineCapacity: 1500
    }
    console.log(car1);
    alert(JSON.stringify(car1));
})
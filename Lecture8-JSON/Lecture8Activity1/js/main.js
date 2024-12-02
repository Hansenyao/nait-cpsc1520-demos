//CPSC 1520- Lecture 8 - Activity 1 - Using JSON Object
let customer = {
    "account": 853,
    "name": " Alfred Futterkiste",
    "supplier": false,
    "recentOrders": [28394, 29539, 30014],
    "contact": {
        "name": "Marie Anders",
        "phone": "030-0074321",
        "email": "anders@futterkiste.com",
    }
}

//Event Listener
document.querySelector("#button1").addEventListener("click", () => {
    let str = `<p>Account: ${customer.account}</p>
               <p>Name: ${customer.name}</p>
               <p>Supplier: ${customer.supplier}</p>
               <p>Recent Orders: ${customer.recentOrders.join("-")}</p>
               <p>Contact Information - name: ${customer.contact.name}, phone: ${customer.contact.phone}, email: ${customer.contact.email} </p>
               `
    document.querySelector("#placeHolder").innerHTML = str;
});



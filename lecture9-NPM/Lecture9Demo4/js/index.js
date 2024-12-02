document.querySelector("#button1").addEventListener("click", () => {
    fetch("http://localhost:5001/newFood").then((response) => {
        response.json()
            .then((data) => {
                //console.log(data);
                // Render the data on the webpage
                let str = "";

                // we iterate over all the properties of data[0] - remember that data is an 
                // array with a single element. The element is a javascript object
                for (key in data[0]) {
                    if (key != "id") {
                        str += `<p>${key}:${data[0][key]}<p>`
                    }
                }
                document.querySelector("#placeHolder").innerHTML = str;
            })
            .catch((error) => {
                console.log(error);
            })
    })
})
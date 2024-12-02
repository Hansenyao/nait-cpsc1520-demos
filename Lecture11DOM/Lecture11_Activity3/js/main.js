/*CPSC 1520- Client-Side Sripting

  Lecture11- Activity 3- Creating a table dynamically
*/

document.querySelector("#button1").addEventListener("click", function () {
  //Creating the table element

  // Create table header
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");

  let th1 = document.createElement("th");
  let txt1 = document.createTextNode("City");
  th1.appendChild(txt1);

  let th2 = document.createElement("th");
  let txt2 = document.createTextNode("Population(Thousands)");
  th2.appendChild(txt2);

  tr.appendChild(th1);
  tr.appendChild(th2);
  thead.appendChild(tr);
  table.appendChild(thead);

  // Create table body
  let tbody = document.createElement("tbody");

  // Create rows
  let cityCount = parseInt(document.querySelector("#numCities").value);
  for(let i = 0; i < cityCount; i++) {
    let cityName = prompt(`Enter city name (${i+1} of ${cityCount}):`);
    let population = prompt(`Enter city population of ${cityName} in Thousands):`);
    //
    let tr1 = document.createElement("tr"); 
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let t1 = document.createTextNode(cityName);
    let t2 = document.createTextNode(population);
    td1.appendChild(t1);
    td2.appendChild(t2);
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tbody.appendChild(tr1);
  }
  table.appendChild(tbody);

  // Add table to DOM
  document.querySelector("#placeHolder").appendChild(table);
});
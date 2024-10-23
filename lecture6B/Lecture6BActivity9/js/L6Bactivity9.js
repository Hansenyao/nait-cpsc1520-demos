/* CMPE 1520 - Client-Side Scripting
   lecture6B Activity 9
   Working with Form Elements
*/

let info_array = ["User Name", "Password", "Email", "Postal Address"];

document.querySelector(".myForm").addEventListener("submit", function (evt) {
   evt.preventDefault();
   let str = '';

   info_array.forEach((item, index) => {
      str += `<p>${item}: ${evt.target.elements[index].value}</p>`

   })

   document.querySelector(".user_info").innerHTML = str;
})

/*

	Create varialbles to hold the receiving party's name, disclosing party's name, and the date

	Prompt the user for the values to be used for these variables (i.e. prompt for disclosing party's name, date, etc.)

	Update the document with the entered values in the places indicated by brackets (i.e. [the Disclosing Party] should be replaced by the disclosing party's name)

	Use the skills you have learned up to this point.
*/
const ObtainInfo=function(){
	let docDate=prompt("Give the date of signing as:mm/dd/yyyy");
	let nameDisclosingParty=prompt("Give the name of the disclosing party");
	let nameReceivingParty= prompt("Give the name of the receiving party");
	document.querySelector(".date").innerHTML=docDate;
	document.querySelectorAll(".disclosing-party").forEach(elem => {elem.innerHTML=nameDisclosingParty});
	document.querySelectorAll(".receiving-party").forEach(elem => {elem.innerHTML=nameReceivingParty});
}
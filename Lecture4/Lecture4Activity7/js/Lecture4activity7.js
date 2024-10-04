/* CMPE1520- Client Side Scripting
   Lecture4- Activity 7

   Using the if .... else..if chaining structure

   */

const percentageDiscount = (purchasedNumber) => {
   let discount = 0
   if (purchasedNumber <= 5) {
      discount = 4;
   }
   else if (purchasedNumber <= 10) {
      discount = 8;
   }
   else if (purchasedNumber <= 15) {
      discount = 12;
   }
   else if (purchasedNumber <= 20) {
      discount = 15;
   }
   else {
      discount = 18;
   }

   return discount;
}

let button = document.querySelector("#button1");
button.addEventListener("click", () => {
   let numberOfItems = prompt("Please enter purchased item number:");
   let priceOfUnit = prompt("Please enter unit price:");
   let discount = percentageDiscount(numberOfItems);
   let totalCost = numberOfItems * priceOfUnit;
   let discountAmount = numberOfItems * priceOfUnit * discount/100;
   let totalPayable = totalCost - discountAmount;
   //
   document.querySelector(".itemsText").innerText = `Item Number: ${numberOfItems}`;
   document.querySelector(".totalCost").innerText = `Total Cost: ${totalCost}`;
   document.querySelector(".discountAmount").innerText = `Discount Amount: ${discountAmount}`;
   document.querySelector(".totalPayable").innerText = `Total Payable: ${totalPayable}`;
});

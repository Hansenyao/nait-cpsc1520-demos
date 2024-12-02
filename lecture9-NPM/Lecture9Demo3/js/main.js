
// Enter your code below.
//selecting Form
let form = document.querySelector("#new-order-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let itemName = event.target.elements.namedItem("order-item-name");
  let itemPrice = event.target.elements.namedItem("order-item-price");
  let itemSize = event.target.elements.namedItem("order-size");
 
  let isFormValid = true;





  if (isFormValid) {
    addOrderItem(itemName.value, itemPrice.value, itemSize.value);
    form.reset();
  }
  else
    console.log("Form is invalid");


});



// functions needed for assessment (do not change.)




/**
 * Adds a new order item to the order list.
 *
 * @param {string} orderItemName - The name of the order item.
 * @param {number} orderItemPrice - The price of the order item.
 * @param {string} orderSize - The size of the order item.
 * @returns {void}
 */
const addOrderItem = (orderItemName, orderItemPrice, orderSize) => {
  let orderItemList = document.querySelector("#order-item-list")
  let newOrderItem = `<li class="list-group-item d-flex justify-content-between">
    <div class="w-100 justify-content-between">
      <h5 class="mb-1">${orderItemName}</h5>
      <small>${orderSize}</small>
    </div>
    <p class="mb-1">${'$' + orderItemPrice}</p>
  </li>`
  orderItemList.innerHTML += newOrderItem
}
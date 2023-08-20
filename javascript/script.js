const itemNameInput = document.getElementById("item-name-input");
const itemPriceInput = document.getElementById("item-price-input");
const addButton = document.getElementById("add-button");
const cartItems = document.getElementById("cart-items");
const grandTotal = document.querySelector("[data-ns-test='grandTotal']");

addButton.addEventListener("click", function () {
  const itemName = itemNameInput.value.trim();
  const itemPrice = parseFloat(itemPriceInput.value);
  if (itemName === "" || /\d/.test(itemName)) {
    alert("Please enter a valid item name.");
    return;
  }
  if (isNaN(itemPrice) || itemPrice <= 0) {
    alert("Please enter a valid item price.");
    return;
  }
  const newRow = document.createElement("tr");
  const itemNameCell = document.createElement("td");
  const itemPriceCell = document.createElement("td");
  itemNameCell.textContent = itemName;
  itemPriceCell.textContent = itemPrice;
  itemNameCell.setAttribute("data-ns-test", "item-name");
  itemPriceCell.setAttribute("data-ns-test", "item-price");
  newRow.appendChild(itemNameCell);
  newRow.appendChild(itemPriceCell);
  cartItems.appendChild(newRow);
  const totalPrice = calculateTotalPrice();
  grandTotal.textContent = totalPrice;
  itemNameInput.value = "";
  itemPriceInput.value = "";
});
function calculateTotalPrice() {
  let totalPrice = 0;
  const rows = cartItems.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const priceCell = row.querySelector("[data-ns-test='item-price']");
    const itemPrice = parseFloat(priceCell.textContent);
    totalPrice += itemPrice;
  }
  return totalPrice;
}

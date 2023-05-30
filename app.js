'use strict' ; 

function Food(foodName, type, price) {
  this.foodId = generateFoodId();
  this.foodName = foodName;
  this.type = type;
  this.price = price;
}

function generateFoodId() {
  // Generate a random four-digit number
  return Math.floor(1000 + Math.random() * 9000);
}

Food.prototype.render = function() {
  var tableRow = document.createElement("tr");
  tableRow.innerHTML = `
    <td>${this.foodId}</td>
    <td>${this.foodName}</td>
    <td>${this.type}</td>
    <td>$${this.price.toFixed(2)}</td>
  `;

  var foodTableBody = document.getElementById("food-table-body");
  foodTableBody.appendChild(tableRow);
}

var foodForm = document.getElementById("food-form");
foodForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var foodNameInput = document.getElementById("food-name-input");
  var foodTypeSelect = document.getElementById("food-type-select");
  var foodPriceInput = document.getElementById("food-price-input");

  var foodName = foodNameInput.value;
  var foodType = foodTypeSelect.value;
  var foodPrice = parseFloat(foodPriceInput.value);

  var newFood = new Food(foodName, foodType, foodPrice);
  newFood.render();

  // Reset the form inputs
  foodNameInput.value = "";
  foodTypeSelect.value = "";
  foodPriceInput.value = "";
});

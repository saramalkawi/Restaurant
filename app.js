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

  var foodIdCell = document.createElement("td");
  foodIdCell.textContent = this.foodId;
  tableRow.appendChild(foodIdCell);

  var foodNameCell = document.createElement("td");
  foodNameCell.textContent = this.foodName;
  tableRow.appendChild(foodNameCell);

  var typeCell = document.createElement("td");
  typeCell.textContent = this.type;
  tableRow.appendChild(typeCell);

  var priceCell = document.createElement("td");
  priceCell.textContent = "$" + this.price.toFixed(2);
  tableRow.appendChild(priceCell);

  var foodTableBody = document.getElementById("food-table-body");
  foodTableBody.appendChild(tableRow);
}

var foodForm = document.getElementById("food-form");
foodForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var foodName = event.target["food-name-input"].value;
  var foodType = event.target["food-type-select"].value;
  var foodPrice = parseFloat(event.target["food-price-input"].value);

  var newFood = new Food(foodName, foodType, foodPrice);
  newFood.render();

  event.target.reset();
});

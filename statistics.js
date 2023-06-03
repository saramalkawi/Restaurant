'use strict' ; 

document.addEventListener("DOMContentLoaded", function() {
    renderFoodTable();
  });
  
  function renderFoodTable() {
    var foodTableBody = document.getElementById("food-table-body");
    var foodData = JSON.parse(localStorage.getItem("foodData"));
  
    if (foodData) {
      foodData.forEach(function(food) {
        var tableRow = document.createElement("tr");
        tableRow.innerHTML = `
          <td>${food.foodId}</td>
          <td>${food.foodName}</td>
          <td>${food.type}</td>
          <td>$${food.price.toFixed(2)}</td>
        `;
        foodTableBody.appendChild(tableRow);
      });
    }
  }
  
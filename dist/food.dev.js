"use strict";

// alert("Food Manage page")
var forMfood = document.querySelector("#foodForm");
var FoodName = document.querySelector("#foodName");
var FoodPrice = document.querySelector("#foodPrice");
var FoodCatgery = document.querySelector("#foodCategory");
var foodTable = document.querySelector("#foodTable");
forMfood.addEventListener("submit", function (event) {
  event.preventDefault();
  var food = {
    Name: FoodName.value,
    Price: FoodPrice.value,
    catgery: FoodCatgery.value
  };
  Foodlist.push(food);
  console.log(Foodlist);
  foodTable.innerHTML = Foodlist.map(function (item, index) {
    return "\n        <tr>\n            <td>".concat(index + 1, "</td>\n            <td>").concat(item.Name, "</td>\n            <td>").concat(item.Price, "</td>\n            <td>").concat(item.catgery, "</td>\n            <td>\n                <button>Delete</button>\n            </td>\n        </tr>\n    ");
  }).join("");
});
var Foodlist = [];
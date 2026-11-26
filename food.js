// alert("Food Manage page")
let forMfood = document.querySelector("#foodForm");
let FoodName = document.querySelector("#foodName");
let FoodPrice = document.querySelector("#foodPrice");
let FoodCatgery = document.querySelector("#foodCategory");

let foodTable = document.querySelector("#foodTable");

forMfood.addEventListener("submit", function (event) {
  event.preventDefault();

  let food = {
    Name: FoodName.value,
    Price: FoodPrice.value,
    catgery: FoodCatgery.value,
  };
  Foodlist.push(food);
  console.log(Foodlist);

  foodTable.innerHTML = Foodlist.map(function (item, index) {
    return `
        <tr>
            <td>${index + 1}</td>
            <td>${item.Name}</td>
            <td>${item.Price}</td>
            <td>${item.catgery}</td>
            <td>
                <button>Delete</button>
            </td>
        </tr>
    `;
  }).join("");
});

let Foodlist = [];

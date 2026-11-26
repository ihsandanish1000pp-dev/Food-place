//   manage Food Button

let manageFood = document.querySelector("#mangeFood");

manageFood.addEventListener("click", managefood);

function managefood() {
  document.getElementById("Mfood").innerHTML = `
     
         <div class = 'Admin'> <h1>  Manage Food   </h1>  <div>
     `;
}



let manaGefood = document.querySelector("#mangeFood");
manaGefood.addEventListener("click", FoodMangepage);

function FoodMangepage() {
  window.location.href = "Manage-food.html";
}




//   view Food Button

let viewOrder = document.querySelector("#viewOrder");

viewOrder.addEventListener("click", viewBtn);

function viewBtn() {
  document.getElementById("viewFood").innerHTML = `
    
      <div class = 'viewBtn'> <h3> click view Button <h3> </div>
    
    `;
}


//  let ViewPage = document.querySelector('#viewOrder');
  
//     ViewPage.addEventListener('click', function(){
//         window.location.href=('view-page.html')
//     })


//   customer Food Button

let ManageCustomer = document.querySelector("#Mcustomer");

ManageCustomer.addEventListener("click", CustomerBtn);

function CustomerBtn() {
  document.getElementById("Mangecustomer").innerHTML = `
        
          <div class = 'Admincall'> 
              <h3> you click MangeCustomer Button </h3>
          <div>
        
        `;
}

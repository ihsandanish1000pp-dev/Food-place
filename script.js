document
  .getElementById("Admin-pinal")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("adminpinal-button")) {
      addMangeFoodBtn();
    }
  });

function addMangeFoodBtn() {
  document.getElementById("Admin-pinal").innerHTML = `
        <h3>Welcome to Manage Food</h3>
    `;
}

let burgarnBtn = document.querySelector(".burgar-btn");

burgarnBtn.addEventListener("click", function () {
  document.getElementById("result").innerHTML = `
         <h3> Name: Brugar  </h3>
         <p> price: 500 </p>  
         
         `;
});

let salladBtn = document.querySelector(".sallad-btn");
salladBtn.addEventListener("click", function () {
  document.getElementById("res").innerHTML = `
               <h3> Name: sallad pizz </h3>
         <p> price: 1500 </p>  
        `;
});

let pizzBtn = document.querySelector(".pizz-btn");
pizzBtn.addEventListener("click", pizz);

function pizz() {
  document.getElementById("res1").innerHTML = `
          
                        <h3> Name:  pizz </h3>
                <p> price: 1000 </p> 
         `;
}

let cheepsBtn = document.querySelector(".cheeps-btn");

cheepsBtn.addEventListener("click", cheeps);

function cheeps() {
  document.getElementById("res2").innerHTML = `
                       <h3> Name:  cheeps </h3>
                <p> price: 100 </p> 

        `;
}

let AdminBtnn = document.querySelector("#admin-btn");

AdminBtnn.addEventListener("click", goToAdminPage);

function goToAdminPage() {
  window.location.href = "Admin-page.html";
}

//  Admin page

// let ManageFoodbtn = document.querySelector("#mangeFood");

// ManageFoodbtn.addEventListener("click", manageFood);

// function manageFood() {
//   document.getElementById("Mfood").innerHTML = `

//       <div class = 'ManFood'>

//              <h1>Welcome </h1>

//       </div>

//      `;
// }




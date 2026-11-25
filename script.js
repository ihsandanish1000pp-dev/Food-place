let AdminBtn = document.querySelector("#admin-btn");

AdminBtn.addEventListener("click", Admin);

function Admin() {
  document.getElementById("Admin-pinal").innerHTML = `
            <div class = 'adminpinal'>
                <h3> Wellcome Addmin pinel</h3>
                <p> Manage you are food ordering Website </p>
            </div>


            <button class = 'adminpinal-button'>Manage Food</button>
            <button class = 'adminpinal-button1' >View Orders</button>
            <button class = 'adminpinal-button2' >Manage Customers</button>
         `;
}




  document.getElementById('Admin-pinal').addEventListener('click', function(event) {

    if (event.target.classList.contains('adminpinal-button')) {
        addMangeFoodBtn();
    }

});

function addMangeFoodBtn() {
    document.getElementById('Admin-pinal').innerHTML = `
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

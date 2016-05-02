"use strict";

function populatePage (inventory) { // this is the inventory from the callback on the carlot.js
   var displayCar = document.getElementById("container");
   var output = "";
for(var i = 0; i < inventory.length; i++) {
	var currentCar = inventory[i];
      
  
    displayCar.innerHTML += 
          //  the code below <div class="col-xs-3 ${currentCar.color}"> accesses the color property from the JSON file and references each color via the css properties that were set up for the vehicle color. 
    `<div class="col-xs-3 card" style="border-color: ${currentCar.color}">
      <h1>${currentCar.make}</h1>
      <h1>${currentCar.model}</h1>
      <p>${currentCar.model}</p>
      <p>${currentCar.year}</p>
      <p>${currentCar.price}</p>
      <p>${currentCar.color}</p>
      <p>${currentCar.purchased}</p>
     <div class="description">
      <p>${currentCar.description}</p>
     </div>
    </div>`
      
      }


Carlot.activateEvents(); // this references the activateEvents function in events js

}

CarLot.loadInventory(populatePage);






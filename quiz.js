"use strict";

//augmenting iife
var arLot = (function(originalCarLot) {

// this is the inventory from the callback on the carlot.js
  originalCarLot.populatePage = function(inventory) { 
   var displayCar = document.getElementById("container");
   var output = "";

// loops through inventory so that I can populate the DOM
for(var i = 0; i < inventory.length; i++) {
	var currentCar = inventory[i];
      
  
//  <div class="col-xs-3 car ${currentCar.color}"> accesses the color property from the JSON file and references each color via the css properties that were set up for the vehicle color. 
    output+= 
    `<div class="col-xs-3 car" style="border-color: ${currentCar.color}">
      <h1>${currentCar.make}</h1>
      <h1>${currentCar.model}</h1>
      <p>${currentCar.model}</p>
      <p>${currentCar.year}</p>
      <p>${currentCar.price}</p>
      <h5>${currentCar.color}</h5>
      <p>${currentCar.purchased}</p>
      <h6 class="inputBox">${currentCar.description}</h6>
    </div>`
      
    displayCar.innerHTML = output; 
      }

// this references the activateEvents function in events js
CarLot.activateEvents();

}

  return originalCarLot

})(CarLot || {});


// Calling loadInventory which passes populatePage Inventory and builds string/prints to DOM
CarLot.loadInventory(CarLot.populatePage);






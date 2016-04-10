"use strict";

function populatePage (inventory) { // this is the inventory from the callback on the carlot.js
     let displayCar = document.getElementById("cars");
     let output = "";
	for(var i = 0; i < inventory.length; i++) {
		let currentCar = inventory[i];
      output += `<div class="col-xs-3"><h1>${currentCar.make} ${currentCar.model}</h1><p>${currentCar.model}</p><p>${currentCar.year}</p><p>${currentCar.price}</p><p>${currentCar.color}</p><p>${currentCar.purchased}</p><p>${currentCar.description}</p></div>`;

      //-->use bootstrap grid system to layout columns<--//
	displayCar.innerHTML = output;
		
	}


};

CarLot.loadInventory(populatePage);

  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();

// Load the inventory and send a callback function to be
// invoked after the process is complete
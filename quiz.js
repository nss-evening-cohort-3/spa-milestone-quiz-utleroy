"use strict";

function populatePage (inventory) { // this is the inventory from the callback on the carlot.js
     let displayCar = document.getElementById("cars");
     let output = "";
	for(var i = 0; i < inventory.length; i++) {
		let currentCar = inventory[i];
      output += `<h1>${currentCar.make}</h1>`;
      output += `<p>${currentCar.model}</p>`;
      output += `<p>${currentCar.year}</p>`;
      output += `<p>${currentCar.price}</p>`;
      output += `<p>${currentCar.color}</p>`;
      output += `<p>${currentCar.purchased}</p>`;
      output += `<p>${currentCar.description}</p>`;
	displayCar.innerHTML = output;
		
	}


};

CarLot.loadInventory(populatePage);

  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();

// Load the inventory and send a callback function to be
// invoked after the process is complete
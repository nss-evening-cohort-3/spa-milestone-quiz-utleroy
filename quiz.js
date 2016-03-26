"use strict";

let unit = document.getElementById("cars");

function populatePage (inventory) {
	for(let i = 0; i < inventory.length; i++) {
		let singleCar = inventory[i];
		
	}
	function buildCar (singleCar) {
		unit.innerHTML += `<div class="unit"><header>${unit.make}</header>`
	// console.log(buildCar);  
	};

  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
	// console.log(inventory[i].);
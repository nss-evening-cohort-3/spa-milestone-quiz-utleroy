"use strict";

function populatePage (inventory) { // this is the inventory from the callback on the carlot.js
     let displayCar = document.getElementById("cars");
     let output = "";
	for(var i = 0; i < inventory.length; i++) {
		let currentCar = inventory[i];
        
        //  the code below <div class="col-xs-3 ${currentCar.color}"> accesses the color property from the JSON file and references each color via the css properties that were set up for the vehicle color. 
		
      output += `<div class="col-xs-3 ${currentCar.color}"><h1>${currentCar.make} ${currentCar.model}</h1><p>${currentCar.model}</p><p>${currentCar.year}</p><p>${currentCar.price}</p><p>${currentCar.color}</p><p>${currentCar.purchased}</p><p>${currentCar.description}</p></div>`; 
        

	displayCar.innerHTML = output;
		
	}

    CarLot.activateEvents();

};

CarLot.loadInventory(populatePage);


  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();

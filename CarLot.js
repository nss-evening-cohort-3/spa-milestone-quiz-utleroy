"use-strict";

var CarLot = (function (originalCarLot) {
  let inventory = [];

  
	originalCarLot.loadInventory = function (populatePage) {
	  // populatePage is the callback from quiz.js
	  let inventoryLoader = new XMLHttpRequest();
		inventoryLoader.addEventListener("load", function () {
		inventory = JSON.parse(this.responseText).cars;
		// console.log(inventory);
		  populatePage(inventory); // this is executes the callback to quiz.js/
		});
	  inventoryLoader.open("GET", "inventory.json");
	  inventoryLoader.send();  

	};
  return originalCarLot;

})(CarLot || {});




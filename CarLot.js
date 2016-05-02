"use-strict";

var CarLot = (function () {
  let inventory = [];
  return {
	loadInventory: function () {
	  // populatePage is the callback from quiz.js
	  let inventoryLoader = new XMLHttpRequest();
	  inventoryLoader.open("GET", "inventory.json");
	  inventoryLoader.send();  
		inventoryLoader.addEventListener("load", function () {
		inventory = JSON.parse(this.responseText).cars;
		// console.log(inventory);
		  populatePage (inventory); // this is executes the callback to quiz.js/
		});
	  
	}
}

})();




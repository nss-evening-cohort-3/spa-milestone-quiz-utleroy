"use strict";

var CarLot = (function () {
  let inventory = [];

  return {
    getInventory: function () {
    },
    loadInventory: function (populatePage) {
      
      let inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
      inventoryLoader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText).cars;
      populatePage(inventory)

      });
    }
  };

})();
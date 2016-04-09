"use-strict";

    let CarLot = (function () {
     let cars = [];

  return {
    loadInventory: function () {
      let inventoryLoader = new XMLHttpRequest();
        inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).inventory;
        console.log(CarLot);

        let car1 = document.getElementById("cars");
        let outputString = "";

        for (let i = 0; i < car1.length; i++) {
          let currentCar = car1[i]
        }

        car1.innerHTML = outputString;

      });

      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();  
    }
  };

})();

CarLot.loadInventory();


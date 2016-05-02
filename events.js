"use strict";
    
var Carlot = (function(originalCarLot) {

	originalCarLot.activateEvents = function() {
		let allCars = document.getElementsByClassName("col-xs-3");
		for (var i = 0; i < allCars.length; i++) {
			let carDiv = allCars[i];

			carDiv.addEventListener("click", function(){
				let userClick = carDiv.classList.add("clicked-border");
			})
		}
	}

	return originalCarLot;

})(Carlot || {});

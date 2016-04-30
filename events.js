"use strict";
    
var CarLot = (function(originalCarLot) {
	
	originalCarLot.activateEvents = function() {
		console.log("activating events");
	}
	
	


	return originalCarLot;      
})(CarLot || {});
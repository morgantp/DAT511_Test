/*************************************
 * Magical Eight Ball
 * HTML5 Device Orientation API Demo
 * Tomomi Imura @girlie_mac
 ************************************/

(function() {
	var alpha = beta = gamma = 0;
	
	if (window.DeviceOrientationEvent){
		window.addEventListener('deviceorientation', update, true);
	
	} else {
		var warning = document.getElementById('warning');
		warning.textContent = 'This browser does not support the DeviceOrientation Events :-(';
		message.textContent = 'Your browser sucks';
	}
	
	function update(event){
		var debug = document.getElementById('debug');
		
		alpha = Math.floor(event.alpha);
		beta = Math.floor(event.beta);
		gamma = Math.floor(event.gamma);
		
		debug.textContent = 'Alpha: '+alpha+ ', Beta: ' +beta+ ', and Gamma is: ' +gamma;
		
		
		// a device is place on a flat surface
				
		message.textContent = answer;
		
	}

})();


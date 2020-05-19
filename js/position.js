/*************************************
 * Magical Eight Ball
 * HTML5 Device Orientation API Demo
 * Tomomi Imura @girlie_mac
 ************************************/

(function() {
	var alpha = beta = gamma = 0;

	
	var messageContainer = document.getElementById('messageContainer');

	if (window.DeviceOrientationEvent){
		window.addEventListener('deviceorientation', update, true);
	
	} else {
		var warning = document.getElementById('warning');
		warning.textContent = 'This browser does not support the DeviceOrientation Events :-(';
		message.textContent = 'Your browser sucks';
	}
	
	function update(event){
		var debug = document.getElementById('debug');
		
		var transform = messageContainer.style.transform;
		
		alpha = Math.floor(event.alpha);
		beta = Math.floor(event.beta);
		gamma = Math.floor(event.gamma);
		
		debug.textContent = 'Alpha: '+alpha+ ', Beta: ' +beta+ ', and Gamma is: ' +gamma;		
		
		transform = 'rotateZ(' +alpha+ 'deg) rotateX(' +beta+ 'deg) rotateY(' +gamma+ 'deg)';			
		// 3D Transform	
		messageContainer.style.webkitTransform = messageContainer.style.MozTransform = messageContainer.style.transform = transform;
		// 2D-only for Opera
		messageContainer.style.OTransform = 'rotate(' +alpha+ 'deg)'; 
	}

})();
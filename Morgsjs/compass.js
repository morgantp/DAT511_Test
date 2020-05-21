navigator.geolocation.watchPosition(position => {
    let heading = position.coords.heading;

    var compass = document.getElementById('compass');
    var compassContainer = document.getElementById('compassContainer')

    compass.textContent = 'Heading: ' +heading;


    var transform = compassContainer.style.transform;
		    
    
    transform = 'rotate(' +heading;
    compassContainer.style.webkitTransform = compassContainer.style.MozTransform = compassContainer.style.transform = transform;
		
});
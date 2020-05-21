(function() {

	var compassContainer = document.getElementById('compassContainer');

	navigator.geolocation.watchPosition(position => {
        let heading = position.coords.heading;
        window.addEventListener('heading', update, true);

	
        function update(event){
            var compass = document.getElementById('compass');
            
            var transform = compassContainer.style.transform;
            
            compass.textContent = 'Heading: '+heading;		
            
            compassContainer.style.webkitTransform = compassContainer.style.MozTransform = compassContainer.style.transform = transform;
            // 2D-only for Opera
            compassContainer.style.OTransform = 'rotate(' +heading+ 'deg)'; 
        }
})

})();
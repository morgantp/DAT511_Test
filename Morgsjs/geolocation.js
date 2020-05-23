function getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let altitude = position.coords.altitude;
        let accuracy = position.coords.accuracy;
        var alt = document.getElementById('alt');
        var accurate = document.getElementById('accurate');

        console.log(position);

        if(altitude == null) {
            alt.textContent = 'Altitude Not Supported On Device';
        } else if(altitude > 0) {
            alt.textContent = 'Altitude: '+altitude+'m';
        };

        if(accuracy <= 20) {
            accurate.textContent = 'Location is Very Accurate';
        } else if(accuracy > 20) {
            accurate.textContent = 'Accuracy: '+accuracy+'m';
        };

        var popup = L.popup({
			maxWidth : 400,
		}).setLatLng([latitude, longitude])
          .setContent('You are within this circle');
          
        var map = L.map('map').setView([latitude, longitude], 12);

        L.circle([latitude, longitude], {radius: accuracy}).addTo(map).bindPopup(popup);

        L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=sJdX2R69yUO7n4qEW4gl', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' ,
        }).addTo(map);
}, error => {
    console.log(error.code);
},{
    enableHighAccuracy: true
    
});
}
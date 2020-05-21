function getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let altitude = position.coords.altitude;

        console.log(position)

        var alt = document.getElementById('alt');


        if(altitude == null) {
            alt.textContent = 'Altitude Not Supported On Device';
        } else if(altitude > 0) {
            alt.textContent = 'Altitude: '+altitude+'m';
        }

        console.log(altitude);
       

        var map = L.map('map').setView([latitude, longitude], 12);

        L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=sJdX2R69yUO7n4qEW4gl', {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' ,
        }).addTo(map);
}, error => {
    console.log(error.code);
},{
    enableHighAccuracy: true
    
});
}
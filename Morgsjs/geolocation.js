function getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let altitude = position.coords.altitude;

        var alt = document.getElementById('alt');

        alt.textContent = 'Altitude: '+altitude;

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
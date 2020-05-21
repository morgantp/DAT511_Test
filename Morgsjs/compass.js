var compass = document.getElementById('compass');
var info = document.getElementById('compassInfo');

navigator.geolocation.watchPosition((data) => {
    info.textContent = 'Heading: '+data.coords.heading;
    compass.style.transform = `rotate(${data.coords.heading}deg)`
});
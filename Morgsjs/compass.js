navigator.geolocation.watchPosition(position => {
    let heading = position.coords.heading;

    var compass = document.getElementById('compass');

    compass.textContent = 'Heading: ' +heading;
});
function getLocation() {
    
    const successCallback = (position) => {
        console.log(position);
    };

    const errorCallback = (error) => {
        console.error(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
        enableHighAccuracy: true,
        timeout: 5000
    });

}
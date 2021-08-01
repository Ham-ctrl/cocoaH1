if('geolocation' in navigator) {
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition( async position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        //document.querySelector('#').textContent = lat;
        //document.querySelector('#').textContent = lon;
        console.log(position)

        const data = { lat, lon};
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        await fetch('/routing/api', options);
    })
} else {
    console.log('geolocation not available')
}
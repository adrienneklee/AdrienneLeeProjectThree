const options = {
    enableHighAccuracy: true,
    timeout: 5000,
}

function success(pos) {
    const crd = pos.coords;
    console.log(`Your current position is:`);
    console.log(`Latitude: ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`)
}

function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

function Geolocation () {
    
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: 'geolocation' })
                .then(function (result) {
        if (result.state === 'granted') {
            // console.log(result.state);
            navigator.geolocation.getCurrentPosition(success);
        } else if (result.state === 'prompt') {
            navigator.geolocation.getCurrentPosition(success, errors, options)
            // console.log(result.state);
        } else if (result.state === 'denied') {
        }
        result.onchange = function () {
            console.log(result.state)
        };
        });

        } else {
            alert('sorry not available')
        };
    
    return(
        <div>
            <h2>Geolocation</h2>
        </div>
    )
};

export default Geolocation;

    

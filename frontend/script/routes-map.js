var athens = { lat: 37.9838, lng: 23.727539 };

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 10, center: athens });

    // dynamic selection
    var select = document.getElementById("selector")
    select.addEventListener('change', (event) => {
        // remove any routes that might be currently displayed
        map.data.forEach(function(feature) {
                map.data.remove(feature);
            })
            // Load the GeoJSON manually (works cross-origin since google sets the required HTTP headers)      
        const route_onestop_id = select.value;
        const url = 'http://localhost:3000/api/routes/' + route_onestop_id

        $.getJSON(url, function(data) {
            var feature = map.data.addGeoJson(data);
            // make sure that we are now centered around the route that is displayed
            map.setCenter(feature[0].getGeometry().getAt(0).getAt(10));
            map.setZoom(13);
        });
    });

    // styling
    map.data.setStyle(function(feature) {
        var strokeColor = '#153CE0';
        return {
            strokeColor: strokeColor,
            strokeWeight: 3
        };
    });
}
const athens = { lat: 37.9838, lng: 23.727539 };
const icon_url = 'http://maps.google.com/mapfiles/ms/micons/';
var markers = [];
var g_pos;
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
var select = document.getElementById("selector");
var slider = document.getElementById("slider");


function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 10, center: athens });
    var infowindow = new google.maps.InfoWindow();
    // dynamic selection
    renderStops();

    // rendering of the stops
    function renderStops() {
        // If a marker has not already been placed by clicking, get the lat lng values from the input
        if (markers[0] == null) {
            var lat = athens.lat;
            var lng = athens.lng;
            let location = new google.maps.LatLng(lat, lng)
            placeMarker(location);
            // location_marker = markers[0]
        } else {
            var lat = markers[0].getPosition().lat();
            var lng = markers[0].getPosition().lng();
        }
        location_marker = markers[0]

        // console.log('lat ' + lat + '   lng ' + lng)

        // Get the rest of what we need and render the stops
        const distance = slider.value;
        const route_onestop_id = selector.value;

        const url = 'http://localhost:3000/api/stops/stops-within/' + distance +
            '/center/' + lat + ',' + lng + '/route/' + route_onestop_id;

        // remove any stops that might be currently displayed
        map.data.forEach(function(feature) {
            map.data.remove(feature);
        })

        // NOTE: This uses cross-domain XHR, and may not work on older browsers.
        map.setCenter(location_marker.getPosition());
        map.setZoom(14);

        $.getJSON(url, function(data) {
            var feature = map.data.addGeoJson(data);
        });

        map.data.addListener('click', function(event) {
            var feat = event.feature;
            var html = "<b>" + feat.getProperty('name') + "</b><br>" + feat.getProperty('tags')['stop_desc'];

            // Maybe I can query Mongo here based on onestop-id and get routes info through that
            // add info of routes
            html += "<br><b>Δρομολόγια (short name):</b>"
            const routes_info = feat.getProperty('routes_serving_stop');
            for (i = 0; i < routes_info.length; i++) {
                html += "<br>" + routes_info[i]['route_name'];
            }
            infowindow.setContent(html);
            infowindow.setPosition(event.latLng);
            infowindow.setOptions({ pixelOffset: new google.maps.Size(0, -34) });
            infowindow.open(map);
        });
    }

    //styling
    map.data.setStyle(function(feature) {
        const bus_image = icon_url + 'cabs.png';
        return {
            icon: bus_image
        };
    });

    // add listenerers
    google.maps.event.addListener(map, 'click', function(event) {
        // if checkbox then place marker
        if (markers.length == 0) {
            placeMarker(event.latLng);
        } else {
            deleteMarkers();
            placeMarker(event.latLng);
        }
    });

    slider.addEventListener('mouseup', (event) => {
        renderStops();
    });


    select.addEventListener("change", function(event) {
        renderStops();
    });

    function placeMarker(location) {
        const man_image = icon_url + 'POI.png';
        var location_marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: man_image,
            title: "YOU ARE HERE!"
        });
        markers.push(location_marker);
        renderStops()
    }
}


// marker functions
function deleteMarkers() {
    clearMarkers();
    markers = [];
}

function clearMarkers() {
    setMapOnAll(null);
}

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}


// slider text on html
slider.oninput = function() {
    distance.innerHTML = this.value;
}
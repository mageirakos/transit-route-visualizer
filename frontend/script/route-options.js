let routesSelect = document.querySelector(".custom-select");


fetch("http://localhost:3000/api/routes/type/bus")
    .then(response => response.json())
    .then((jsonData) => {
        // jsonData is parsed json object received from url
        constructList(jsonData)
    })
    .catch((error) => {
        // handle your errors here
        console.error(error)
    })



function constructList(jsonData) {
    for (route in jsonData) {
        const routeName = jsonData[route].properties.tags.route_long_name
        const route_onestop_id = jsonData[route].properties.onestop_id
        var newOption = document.createElement("option");
        newOption.value = route_onestop_id
        newOption.text = routeName
        routesSelect.add(newOption)
    }

}
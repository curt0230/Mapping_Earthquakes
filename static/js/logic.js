// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);
//13.4.1: Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// let marker = L.circle([34.0522, -118.2437],{radius: 300}).addTo(map);
// L.circleMarker([34.0522, -118.2437],{
//     radius: 300,
//     color: "black",
//     fillColor: "#ffffa1"
// }).addTo(map);

// //13.4.3
// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// // Coordinates for each point to be used in the polyline.
// let line = [
//     // [33.9416, -118.4085], LAX
//     [37.6213, -122.3790], //san fran
//     // [40.7899, -111.9791], //salt lake
//     // [47.4502, -122.3088] //seattle
//     [30.1975, -97.6664], //austin
//     [43.6777, -79.6248], //toronto
//     [40.6413, -73.7781] //jfk
//   ];


// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "blue",
//     dashArray: '20, 20', 
//     dashOffset: '20',
//   }).addTo(map);

//13.5.1
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.61899948120117, -122.375], 12.5); // Coordinates are lat, long

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}} // coordinates are long/lat
]};

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
    // pointToLayer: function(feature, latlng) {
    //   console.log(feature);
    //   return L.marker(latlng)
    //   .bindPopup("<h3>" + feature.properties.name + "</h3><h4>" + feature.properties.city + ', ' + feature.properties.country + "</h4>");
    onEachFeature: function(feature,layer){
        console.log(layer);
        layer.bindPopup("<h3>" + feature.properties.name + "</h3><h4>" + feature.properties.city + ', ' + feature.properties.country + "</h4>");
    }
  }).addTo(map);
  
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'navigation-night-v1',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


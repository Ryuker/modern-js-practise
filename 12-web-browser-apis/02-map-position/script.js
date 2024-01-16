// Use GeoLocation to show our position in a map
// API: Leafletjs.com

// code from leafletjs.com
var map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// custom code
const marker = L.marker([0, 0]).addTo(map); // set the marker on the map

navigator.geolocation.getCurrentPosition(pos => {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;

  // set the marker position to the location of the device
  marker.setLatLng([lat, lng]).update(); 
  
  // set the view distance (zoom level)
  map.setView([lat, lng], 13);

  marker.bindPopup(`<strong>Hello World</strong <br> This is my location`);
});



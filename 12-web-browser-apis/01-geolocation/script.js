// Geolocation API 

// Get Current Position
function curSuccess(pos) {
  const coords = pos.coords;
  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} meters`);
}

function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000,            // Time to wait to stop trying for location
  maximumAge: 0             // Do not use a cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// Watch Position
function watchSuccess(pos) {
  const coords = pos.coords;
  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} meters`);
}

function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

navigator.geolocation.watchPosition(watchSuccess, watchError, curOptions);

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

// navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// Watch Position - fires of when location changes
const target = {
  latitude: 41.387438,
  longitude: -71.394839
};

function watchSuccess(pos) {
  const coords = pos.coords;
  // console.log(coords);
  if (target.latitude === coords.latitude && target.longitude === coords.longitude) {
    console.log('You have reached your destination');
    navigator.geolocation.clearWatch(id);
  }
}

function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000,            // Time to wait to stop trying for location
  maximumAge: 0             // Do not use a cached position
};

const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);

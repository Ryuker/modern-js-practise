// Fetch API Error Handling
// ref: httpstat.us - used to test for status codes

// Success 
fetch('http://httpstat.us/200')
  .then(response => {
    return response;
  })
  .then(() => console.log('Success'));


// 
// 404 - 
// - .catch does not run on a status error -  Axios does do this
// - .catch does run on a network error

// Test with response.ok
fetch('http://httpstat.us/404')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Request Failed with ${response.status}` );  
    }
    return response.ok;
  })
  .then(() => console.log('404'))
  .catch(error => console.log(error));


  // Check for specific code
fetch('http://httpstat.us/401')
.then(response => {
  if (response.status === 404) {
    throw new Error(`Not Found - ${response.status}` );  
  } else if (response.status === 500) {
    throw new Error(`Server Error - ${response.status}` );  
  } else if (response.status !== 200) {
    throw new Error(`Request Failed - ${response.status}` );  
  }
  return response.ok;
})
.then(() => console.log('404'))
.catch(error => console.log(error));
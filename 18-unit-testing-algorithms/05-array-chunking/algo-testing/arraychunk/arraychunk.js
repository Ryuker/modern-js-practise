// Returns a chunk array from an array based on a specified size, 
// - size 3: [ [1,2,3], [1,2,3] ] etc
// - size 2: [  [1, 2], [4,5] ] etc
const chunk = (array,size) => {
  const chunked = [];
  
  // devide array into sub arrays into chunked
  for (let element of array) {
    const last = chunked[chunked.length-1]; // get the last element of the chunked array
    
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

module.exports = chunk;
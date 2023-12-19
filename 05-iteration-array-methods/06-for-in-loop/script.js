// For...In Loop
const colorObject = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green'
};

for (const key in colorObject) {
  console.log(key, colorObject[key]);
}

// For...In Loop with Array
const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const key in colorArr) {
  console.log(colorArr[key]);
}


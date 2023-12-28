// Event Key Codes Project
const keys = document.querySelectorAll('.key');

// my solution (doesn't work)
function onKeyPress(e) {
  // console.log('key pressed');
  
  // console.dir(keys[0]);

  // keys[0].firstChild.innerText = e.key.toString();
  
  // keys[1].querySelector('small').innerText = e.keyCode;
  
  // keys[2].querySelector('small').innerText = e.code;
}

window.addEventListener('keydown', onKeyPress);
// end my solution


// video solution
// method 1
// window.addEventListener('keydown', (e) => {
//   const insert = document.getElementById('insert');
//   insert.innerHTML = `
//     <div class="key">
//       ${e.key === ' ' ? 'Space' : e.key}
//       <small>e.key</small>
//     </div>

//     <div class="key">
//       ${e.keyCode}
//       <small>e.keyCode</small>
//     </div>
    
//     <div class="key">
//       ${e.code}
//       <small>e.code</small>
//     </div>
//   `;

// });

// method 2
window.addEventListener('keydown', (e) => {
  const insert = document.getElementById('insert');
  insert.innerHTML = '';

  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code,
  };

  console.log(keyCodes);

  for(let key in keyCodes) {
    const div = document.createElement('div');
    div.className = 'key';
    const small = document.createElement('small');

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }
});

// Speech Synthesis
// - used to type text through voice

const synth = window.speechSynthesis;


function onSubmit(e) {
  e.preventDefault();
  const textInput = document.getElementById('text-input');
  
  const utterThis = new SpeechSynthesisUtterance(textInput.value);
  
  synth.speak(utterThis); // Get synth to speak the text input 
}

document.getElementById('form').addEventListener('submit', onSubmit);





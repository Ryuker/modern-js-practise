// Speech Synthesis
// - used to type text through voice


const voiceSelect = document.getElementById('voice-select');
const synth = window.speechSynthesis;
let voices;

// available voices differ per operating system
function addVoicesToSelect() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++){
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} - ${voices[i].lang}l`;

    if (voices[i].default) {
      option.textContent += ' - default';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function onSubmit(e) {
  e.preventDefault();
  const textInput = document.getElementById('text-input');
  
  const utterThis = new SpeechSynthesisUtterance(textInput.value);
  
  // use the selected voice
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for (let i  = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }

  synth.speak(utterThis); // Get synth to speak the text input 
}

addVoicesToSelect();

// If the voices changed, repopulate the select
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = addVoicesToSelect;
}

document.getElementById('form').addEventListener('submit', onSubmit);





// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const inputTxt = document.querySelector("textarea");
  const voiceSelect = document.querySelector("select");
  const talkButton = document.querySelector("button");
  let smileImg = document.querySelector("img");

  let voices = [];

  // load all available voices and populate select voice dropdown
  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // click "Press to talk" button -> text spoken in selected voice
  talkButton.onclick = (event) => {
    event.preventDefault();

    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);

    // open smile when talking
    if(synth.speaking){
      smileImg.src = "assets/images/smiling-open.png";
    }
    
    // closed smile when not talking
    utterThis.onend = (event) => {
      smileImg.src = "assets/images/smiling.png";
    };
  };
}
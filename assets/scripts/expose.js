// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  let selectElement = document.getElementById("horn-select");
  const airHornSelect = document.querySelector("air-horn");
  const carHornSelect = document.querySelector("car-horn");
  const partyHornSelect = document.querySelector("party-horn");

  let hornImg = document.querySelector("img");
  let hornSound = document.querySelector("audio");

  // select horn from drop down -> display correct image and set correct audio
  selectElement.addEventListener("change", changeHorn);
  function changeHorn(event){
    if(event.target.value == "air-horn"){
      hornImg.src = "/assets/images/air-horn.svg";
      hornSound.src = "/assets/audio/air-horn.mp3"
    }

    else if(event.target.value == "car-horn"){
      hornImg.src = "/assets/images/car-horn.svg";
      hornSound.src = "assets/audio/car-horn.mp3";
    }
    
    else if(event.target.value == "party-horn"){
      hornImg.src = "/assets/images/party-horn.svg";
      hornSound.src = "/assets/audio/party-horn.mp3"
    }
  }

  let volumeRange = document.getElementById("volume-controls");
  let volumeImg = document.querySelector("#volume-controls img");

  // change volume on slider -> display correct volume icon and set correct volume
  volumeRange.addEventListener("change", changeVolume);
  function changeVolume(event){    
    if(event.target.value == 0){
      volumeImg.src = "/assets/icons/volume-level-0.svg";
    }
    
    else if(event.target.value >= 1 && event.target.value < 33){
      volumeImg.src = "/assets/icons/volume-level-1.svg";
    }

    else if(event.target.value >= 33 && event.target.value < 67){
      volumeImg.src = "/assets/icons/volume-level-2.svg";
    }

    else if(event.target.value >= 67){
      volumeImg.src = "/assets/icons/volume-level-3.svg";
    }
    hornSound.volume = (event.target.value)/100;

  }

  // click play sound button -> horn sounds
  const playSoundButton = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  playSoundButton.addEventListener("click", playSound);
  function playSound(event){
    hornSound.play();
    if(selectElement.value == "party-horn"){
      jsConfetti.addConfetti();
    }
  }
};
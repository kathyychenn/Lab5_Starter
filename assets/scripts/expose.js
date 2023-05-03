// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement = document.getElementById("horn-select");
  const airHornSelect = document.querySelector("air-horn");
  const carHornSelect = document.querySelector("car-horn");
  const partyHornSelect = document.querySelector("party-horn");

  let hornImg = document.querySelector("img");
  let hornSound = document.querySelector("audio");

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
};
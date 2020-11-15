// Making Beat Object
beats = {
    "a": {
        beat: "./Audio And Background/Piano Chord 331.mp3",
        color: "#00FFFF"
    },
    "s": {
        beat: "./Audio And Background/Piano Chord 209.mp3",
        color: "#00FFFF"
    },
    "d": {
        beat: "./Audio And Background/Piano Chord 208.mp3",
        color: "#00FFFF"
    },
    "f": {
        beat: "./Audio And Background/Musical Orches 4.mp3",
        color: "#FF00FF"
    },
    "g": {
        beat: "./Audio And Background/PREL Musical 57.mp3",
        color: "#FF00FF"
    },
    "h": {
        beat: "./Audio And Background/Musical Compos 33.mp3",
        color: "#FF00FF"
    },
    "j": {
        beat: "./Audio And Background/Drum Sticks Hit 3.mp3",
        color: "#FF00FF"
    },
    "k": {
        beat: "./Audio And Background/Drum Snare Roll.mp3",
        color: "#FFFFFF"
    },
    "l": {
        beat: "./Audio And Background/Cymbal Suspended 2.mp3",
        color: "#FFFFFF"
    }
};

// Basic Function Which Important to run as the HTML Code load
window.onload = () =>{
   SetButton();
}

// Add keydown Event Listener And also fire up transitionend eventListener To give effect to the button Of UI
document.addEventListener("keydown", (event) => {
    AudioPlayer(event.key);
    document.addEventListener("transitionend",() =>{
        let element = document.getElementById(event.key)
        element.style.backgroundColor = "transparent";
        element.style.boxShadow = "none"; 
    })
});

//AudioPlayer Function To play Corresponding Audio And Set up background color boxshadow
AudioPlayer = (ButtonKey) => {
    let audio = new Audio(beats[ButtonKey].beat);
    audio.currentTime = 0;
    audio.play();
    let element = document.getElementById(ButtonKey);
    element.style.backgroundColor = beats[ButtonKey].color;
    element.style.boxShadow = `0px 0px 17px ${beats[ButtonKey].color}`;
}

// Setting Up The Button OF UI 
SetButton = () => {
    for(key in beats){
      let element = document.getElementById(key);
      element.style.borderColor = beats[key].color;
    }
}
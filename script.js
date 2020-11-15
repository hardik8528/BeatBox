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
        color: "#FF00FF"
    },
    "l": {
        beat: "./Audio And Background/Cymbal Suspended 2.mp3",
        color: "#FF00FF"
    }
};

// Add keydown Event Listener
document.addEventListener("keydown", (event) => {
    AudioPlayer(event.key);
    SetButton();
});

//AudioPlayer Function To play Corresponding Audio
AudioPlayer = (ButtonKey) => {
    let audio = new Audio(beats[ButtonKey].beat);
    audio.currentTime = 0;
    audio.play();
}


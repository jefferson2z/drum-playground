function removeTransition(e) {

    if (e.propertyName != "transform") return //only continue when the transform event finishes

    this.classList.remove("playing");
};

function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
        
    if (!audio) return; // exit the script if no audio selected

    audio.currentTime = 0; // rewinds the audio
    audio.play();
    key.classList.add("playing");
}

document.addEventListener("keydown", playAudio);

const keys = document.querySelectorAll(".key");

keys.forEach(key =>  key.addEventListener("transitionend", removeTransition));
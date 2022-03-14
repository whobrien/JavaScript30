window.addEventListener('keydown', playsound);

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('playing');
}

const allKeys = document.querySelectorAll('.key');
allKeys.forEach(
    key => key.addEventListener("transitionend", removeTransition) // remove playing class if found keyup.
);

function playsound(e) {
    const audio = document.querySelector(`audio[data-key='${e.code}']`);
    const key = document.querySelector(`.key[data-key='${e.code}']`);
    //console.log(e.code);
    //console.log(audio);
    //console.log(key);
    if (!audio) return; //No audio return nothing.
    audio.currentTime = 0; //Rewind to start of sound.
    audio.play();
    key.classList.add('playing');
    
}
//console.log(allKeys);
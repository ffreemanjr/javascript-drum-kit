function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) return; //This will stop the functon from running all together.
  audio.currentTime = 0; //This rewind to the start. This is good to apply to audio
  audio.play();
  key.classList.add('playing');
}
  
function removeTransition(e) {
  if(e.propertyName !== 'transform') return; //Skip it if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
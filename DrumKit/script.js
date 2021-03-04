document.addEventListener('DOMContentLoaded', () => {
  function removeTransition(event) {
  	// console.log(event);
    if (event.propertyName !== 'transform') return;
    // console.log(event.propertyName);
    // console.log(this);
    event.target.classList.remove('playing');
  }

  function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!audio) return console.log("Something had broken!!!");

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  // console.log(keys);
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
});
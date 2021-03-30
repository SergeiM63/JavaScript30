document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.panel');
  console.log(panels);

  function toggleOpen() {
    console.log(this);
    this.classList.toggle('open');
  }

  function toggleActive(event) {
    console.log(event.propertyName); // Покажет для чего был transition
    if(event.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }

  panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

});
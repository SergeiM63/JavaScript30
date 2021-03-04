document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.controls input');

  function handlerUpdate() {
    // console.log(this.value);
    // console.log(this.dataset);
    const suffix = this.dataset.sizing || '';
    // console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

  }

  inputs.forEach(input => input.addEventListener('change', handlerUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', handlerUpdate));
});
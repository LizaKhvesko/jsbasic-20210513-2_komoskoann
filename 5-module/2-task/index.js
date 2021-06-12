function toggleText() {
<<<<<<< HEAD
  let button = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');

  button.addEventListener('click', () => text.toggleAttribute('hidden'));
=======
  let elem = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');

  elem.addEventListener('click', function() {
    if (text.hasAttribute('hidden')) {
      text.removeAttribute('hidden');
    } else {
    text.setAttribute('hidden', 'hidden');
    }
  });
>>>>>>> beeb2a95d0b812ff3930af7789b4103634923630
}

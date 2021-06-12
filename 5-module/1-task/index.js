function hideSelf() {
<<<<<<< HEAD
  let buttonHide = document.querySelector('.hide-self-button')
  buttonHide.addEventListener ('click', () => buttonHide.hidden = true);
=======
  let elem = document.querySelector('.hide-self-button');
  elem.addEventListener('click', function() {
      elem.setAttribute('hidden', 'hidden');
    }
  );
>>>>>>> beeb2a95d0b812ff3930af7789b4103634923630
}

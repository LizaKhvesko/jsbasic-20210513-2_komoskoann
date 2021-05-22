/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
<<<<<<< HEAD
  if (name == null || name.length < 4 || name == '' || name.includes(' '))
  {
return false; 
  } return true;
=======
  if ((typeof name === 'object') || (name.length < 4) || name.includes(" ")) return false;
  return true;
>>>>>>> 9e4d356e790b6ac55abe5f67f465c2ad02154b1c
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

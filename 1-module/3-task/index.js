function ucFirst(str) {
<<<<<<< HEAD

=======
>>>>>>> 9e4d356e790b6ac55abe5f67f465c2ad02154b1c
  if (str.length == 0) {
      return "";
  } else {
      let firstLetter = str[0].toUpperCase();
      let otherLetters = str.slice(1);
      return firstLetter + otherLetters;
  }
}


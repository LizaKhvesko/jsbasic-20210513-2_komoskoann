function ucFirst(str) {

  if (str.length == 0) {
      return "";
  } else {
      let firstLetter = str[0].toUpperCase();
      let otherLetters = str.slice(1);
      return firstLetter + otherLetters;
  }
}



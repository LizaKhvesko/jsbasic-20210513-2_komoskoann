function ucFirst(str) {
<<<<<<< HEAD
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}


=======
  if (str.length == 0) {
      return "";
  } else {
      let firstLetter = str[0].toUpperCase();
      let otherLetters = str.slice(1);
      return firstLetter + otherLetters;
  }
}

>>>>>>> 8d3550e9606511cf147e87bb2eca930d96f7d3b3

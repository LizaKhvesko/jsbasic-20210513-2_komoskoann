function camelize(str) {
<<<<<<< HEAD
  return str
  .split('-') 
  .map(
    (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  )
  .join('');
=======
  let arr = str.split('-');
  // let tail = arr.slice(1);
  // let result = [arr[0]];
  // tail.map(el => result.push(el[0].toUpperCase() + el.slice(1)));
  // return result.join('');
  let arrUppercase = arr.map(function(word, index) {
    if (index == 0)
    return word;
    return word[0].toUpperCase() + word.slice(1); 
  })
  return arrUppercase.join('');
>>>>>>> 535b4ecb440a3b90b7acc190cc74c862f5639612
}

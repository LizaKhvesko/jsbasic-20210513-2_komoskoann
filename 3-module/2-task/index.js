function filterRange(arr, a, b) {
<<<<<<< HEAD
  let range = [];
  for (number of arr) {
if (number >= a && number <= b) {
  range.push(number);
}
  }
  return range;
=======
  return arr.filter(function(item) {
   return (a <= item && item <= b);
  });
>>>>>>> 535b4ecb440a3b90b7acc190cc74c862f5639612
}

function getMinMax(str) {
<<<<<<< HEAD
let task = str.split(' ').join(',').split(',')
.filter(number => parseFloat(number))
.map(number => Number(number))

let result = {};
result.min = Math.min(...task);
result.max = Math.max(...task);
return result;
=======

  let arrs = str.split(/[ ,]/);
  let result = arrs
    .map(item => Number(item))
    .filter(item => !isNaN(item));
    
  return {
    min: Math.min.apply(null, result),
    max: Math.max.apply(null, result)
  };
>>>>>>> 535b4ecb440a3b90b7acc190cc74c862f5639612
}


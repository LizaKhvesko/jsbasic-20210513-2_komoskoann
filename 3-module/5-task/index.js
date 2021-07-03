function getMinMax(str) {

let task = str.split(' ').join(',').split(',')
.filter(number => parseFloat(number))
.map(number => Number(number))

let result = {};
result.min = Math.min(...task);
result.max = Math.max(...task);
return result;

}


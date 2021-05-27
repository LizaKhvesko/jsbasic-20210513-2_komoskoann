function sumSalary(salaries) {
<<<<<<< HEAD
=======

>>>>>>> 127d1f2efa2cceedcce1c04c825a075aae988b4a
  let sum = 0;

  for (let key in salaries) {
    if (typeof salaries[key] === 'number' && isFinite(salaries[key])) {
      sum += salaries[key];
    }
  }
  return sum;
<<<<<<< HEAD
}
=======
}
>>>>>>> 127d1f2efa2cceedcce1c04c825a075aae988b4a

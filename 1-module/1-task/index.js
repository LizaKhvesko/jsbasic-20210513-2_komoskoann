function factorial(n) {

  let result = 1;

  if (n == 0 || n == 1) {
    return 1;
  } else {
    for (let i = 0; i < n; i++) {

      result *= (n - i);
    }
    return result;
  }
}



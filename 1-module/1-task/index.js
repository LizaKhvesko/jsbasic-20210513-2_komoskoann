function factorial(n) {
  let fn = 1;

  if (n == 0 || n == 1) {
    return 1;
  } else {
    for (let i = 0; i < n; i++) {
      fn *= (n - i);
   }
    return fn;
  }
}

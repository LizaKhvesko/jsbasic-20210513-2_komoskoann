function factorial(n) {
<<<<<<< HEAD
  let fn = 1;
=======
  let result = 1;
>>>>>>> 9e4d356e790b6ac55abe5f67f465c2ad02154b1c

  if (n == 0 || n == 1) {
    return 1;
  } else {
    for (let i = 0; i < n; i++) {
<<<<<<< HEAD
      fn *= (n - i);
   }
    return fn;
  }
}
=======
      result *= (n - i);
    }
    return result;
  }

}

>>>>>>> 9e4d356e790b6ac55abe5f67f465c2ad02154b1c

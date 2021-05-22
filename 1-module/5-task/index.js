function truncate(str, maxlength) {
<<<<<<< HEAD
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;}
=======
  const strEnd = "…";
  if (maxlength < str.length) 
  return str.slice(0, (maxlength - strEnd.length)) + strEnd;
  return str;
}
>>>>>>> 9e4d356e790b6ac55abe5f67f465c2ad02154b1c

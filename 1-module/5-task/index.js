function truncate(str, maxlength) {

  const strEnd = "…";
  if (maxlength < str.length) 
  return str.slice(0, (maxlength - strEnd.length)) + strEnd;
  return str;
}


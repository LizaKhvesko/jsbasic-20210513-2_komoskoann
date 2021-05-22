

function checkSpam(str) {
<<<<<<< HEAD
  let lowerCase = str.toLowerCase();
  const spam1 = '1xBet'.toLowerCase();
  const spam2 = 'XXX'.toLowerCase();
  
=======

  let lowerCase = str.toLowerCase();
  const spam1 = '1xBet'.toLowerCase();
  const spam2 = 'XXX'.toLowerCase();

>>>>>>> 9e4d356e790b6ac55abe5f67f465c2ad02154b1c
  if (lowerCase.includes(spam1) || lowerCase.includes(spam2)) return true;
  return false;
}

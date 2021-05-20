

function checkSpam(str) {
  let lowerCase = str.toLowerCase();
  const spam1 = '1xBet'.toLowerCase();
  const spam2 = 'XXX'.toLowerCase();
  
  if (lowerCase.includes(spam1) || lowerCase.includes(spam2)) return true;
  return false;
}

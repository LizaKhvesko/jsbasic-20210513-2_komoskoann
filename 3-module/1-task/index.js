function namify(users) {
<<<<<<< HEAD
  let userName = users.map((user) => user.name);
  return userName;
=======
  let userNames = users.map(function(user) {
    return user.name;
  });
  return userNames;
>>>>>>> 535b4ecb440a3b90b7acc190cc74c862f5639612
}

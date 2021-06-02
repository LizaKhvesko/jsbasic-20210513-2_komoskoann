function showSalary(users, age) {
<<<<<<< HEAD

  let result = users
  .filter((user) => user.age <= age)
  .map((user) => user.name + ', ' + user.balance)
  .join('\n');
  console.log(result);
=======
  let result = users
    .filter((user) => user.age <= age)
    .map((user) =>  user.name + ', ' + user.balance)
    .join('\n');
>>>>>>> 535b4ecb440a3b90b7acc190cc74c862f5639612
  return result;
}

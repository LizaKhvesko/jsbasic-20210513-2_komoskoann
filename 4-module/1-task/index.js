function makeFriendsList(friends) {
<<<<<<< HEAD
let ul = document.createElement('ul');
document.body.appendChild(ul);
for (i = 0; i < friends.length; i++) {
    let li = friends[i].firstName + ' ' + friends[i].lastName;
    ul.innerHTML += '<li>' + li + '</li>';
}
console.log(ul);
return ul;
=======
  
  let list = document.createElement('ul');

  for (let i = 0; i < friends.length; i++) {
    
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(friends[i].firstName + ' ' + friends[i].lastName));
    list.appendChild(item);
    
  }
return list;
>>>>>>> f6294b6535db9bd7edc2dd52759c7b5141ea17a3
}

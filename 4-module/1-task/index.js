function makeFriendsList(friends) {

let ul = document.createElement('ul');
document.body.appendChild(ul);
for (i = 0; i < friends.length; i++) {
    let li = friends[i].firstName + ' ' + friends[i].lastName;
    ul.innerHTML += '<li>' + li + '</li>';
}
console.log(ul);
return ul;

}

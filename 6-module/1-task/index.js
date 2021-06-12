/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('div');
    this.elem.classList.add('table');
    this.render(rows);
    this.elem.addEventListener('click', (event) => this.onclick(event) )
  }
render(rows) {

  let user1 = rows[0];
  let user2 = rows[1];
  let user3 = rows[2];
  let user4 = rows[3];

  this.elem.innerHTML = `
  <table>
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
    <tr class = 'tr'>
    <td>${user1.name}</td>
    <td>${user1.age}</td>
    <td>${user1.salary}</td>
    <td>${user1.city}</td>
    <td><button class = 'button' data-name="remove-button">X</button></td>
</tr>
<tr class = 'tr'>
    <td>${user2.name}</td>
    <td>${user2.age}</td>
    <td>${user2.salary}</td>
    <td>${user2.city}</td>
    <td><button class = 'button' data-name="remove-button">X</button></td>
</tr>
<tr class = 'tr'>
    <td>${user3.name}</td>
    <td>${user3.age}</td>
    <td>${user3.salary}</td>
    <td>${user3.city}</td>
    <td><button class = 'button' data-name="remove-button">X</button></td>
</tr>
<tr class = 'tr'>
    <td>${user4.name}</td>
    <td>${user4.age}</td>
    <td>${user4.salary}</td>
    <td>${user4.city}</td>
    <td><button class = 'button' data-name="remove-button">X</button></td>
</tr>
</tbody>
</table>
        `
}

onclick(event) {
  let target = event.target;
  if (target.dataset.name === 'remove-button') {
    let trDelete = target.closest('.tr');
    trDelete.remove();
  }
}

}
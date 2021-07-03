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
    this.elem = document.createElement('table');
    this.render(rows);
    this.remove(this.elem);
  }

  render(rows) {
    const list = rows.map(value => `
      <tr><td>${value.name}</td>
      <td>${value.age}</td>
      <td>${value.salary}</td>
      <td>${value.city}</td>
      <td><button>X</button></td></tr>
    `).join('');

    this.elem.innerHTML = `
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
        ${list}
      </tbody>
    `;
  }

  remove(element) {
    let trs = element.querySelectorAll('tr');
    for(let tr of trs) {
      let removeButton = tr.querySelector('button');
      if (removeButton) {
        removeButton.addEventListener('click', function() {
          tr.remove();
        });
      }
    }
  }
  
}
"use strict";

let link = document.querySelector('.calendar');
let container1 = document.querySelector('.container1');
let container2 = document.querySelector('.container2');

function clearContainer(container) {
  let elem  = container.children[0];
  if (elem) elem.remove();
}

link.onclick = () => {
  clearContainer(container1);
  clearContainer(container2);

  let yearField = document.createElement('input');
  let monthField = document.createElement('input');
  yearField.classList.add('calField');
  monthField.classList.add('calField');

  yearField.textContent = 'Год';
  monthField.textContent = 'Месяц';

  container2.append(yearField);
  container2.append(monthField);

  let table = createCalendar(container1,
                             yearField.textContent,
                             monthField.textContent);


};


function createCalendar(elem, year, month) {
  let table = document.createElement('table');
  table.classList.add('calendar');

  let week = {'Пн','Вт','Ср','Чт','Пт','Сб','Вс'};

  let row = table.insertRow(0);

  for (let i = 0; i<7; i++) {
    let cell = row.insertCell(i);
    let text = document.createTextNode(week[i]);
    cell.appendChild(text);
  }

  elem.append(table);
}
/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/

// 1. З форми забрати обʼєкт {title, description}
// 2. Додати обʼєкт до масива тасок
// 3. Зарендерити таски
// 4. Зберігти в локалсторадж масив тасок

import { saveInLs } from './js/local-storage-api';
import { getFromLs } from './js/local-storage-api';

import { form, list } from './js/refs';

import { TASKS } from './js/tasks';

renderMarkup(TASKS);

form.addEventListener('submit', addTask);
list.addEventListener('click', deleteTask);

function addTask(event) {
  event.preventDefault();
  const formEv = event.target;
  const title = formEv.elements.taskName.value.trim();
  const description = formEv.elements.taskDescription.value.trim();
  if (title === '' || description === '') {
    alert('Fill all fields');
    return;
  }
  const newTask = { title, description };

  TASKS.push(newTask);
  saveInLs('tasks', TASKS);
  renderMarkup(TASKS);
}

function createMarkup(arr) {
  return arr
    .map(
      element => `<li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${element.title}</h3>
      <p>${element.description}</p>
  </li>`
    )
    .join('');
}

function renderMarkup(arr) {
  list.innerHTML = createMarkup(arr);
}

function deleteTask(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const titleForDelete = event.target.nextElementSibling.textContent;
  const filteredTasks = TASKS.filter(task => task.title !== titleForDelete);
  saveInLs('tasks', filteredTasks);
  renderMarkup(filteredTasks);
}

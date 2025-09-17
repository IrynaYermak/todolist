import { getFromLs } from './local-storage-api';
import { saveInLs } from './local-storage-api';
import { renderMarkup } from './render-tasks';
import { form } from './refs';
import iziToast from 'izitoast';

export let TASKS = getFromLs('tasks') || [];

export function addTask(event) {
  event.preventDefault();
  const formEv = event.target;
  const title = formEv.elements.taskName.value.trim();
  const description = formEv.elements.taskDescription.value.trim();
  if (title === '' || description === '') {
    iziToast.warning({
      message: 'Fill all fields',
      position: 'topRight',
      timeout: 5000,
      progressBar: false,
      close: false,
    });
    return;
  }
  const newTask = { title, description };

  TASKS.push(newTask);
  saveInLs('tasks', TASKS);
  renderMarkup(TASKS);

  form.reset('');
}

export function deleteTask(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const titleForDelete = event.target.nextElementSibling.textContent;
  TASKS = TASKS.filter(task => task.title !== titleForDelete);
  saveInLs('tasks', TASKS);
  renderMarkup(TASKS);
}

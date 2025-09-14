import { form, list, themeSwitcher } from './js/refs';
import { TASKS, addTask, deleteTask } from './js/tasks';
import { renderMarkup } from './js/render-tasks';

renderMarkup(TASKS);

form.addEventListener('submit', addTask);
list.addEventListener('click', deleteTask);
themeSwitcher.addEventListener('click', switchTheme);

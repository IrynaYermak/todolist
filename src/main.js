import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { form, list, themeSwitcher } from './js/refs';
import { TASKS, addTask, deleteTask } from './js/tasks';
import { renderMarkup } from './js/render-tasks';
import { initTheme, switchTheme } from './js/theme-switcher';

renderMarkup(TASKS);

form.addEventListener('submit', addTask);
list.addEventListener('click', deleteTask);
initTheme();

themeSwitcher.addEventListener('click', switchTheme);

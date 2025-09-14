import { createMarkup } from './markup-tasks';
import { list } from './refs';
import { TASKS } from './tasks';

export function renderMarkup(arr) {
  if (TASKS.length === 0) {
    list.innerHTML = 'Sorry, you have no tasks yet';
    return;
  }

  list.innerHTML = createMarkup(arr);
}

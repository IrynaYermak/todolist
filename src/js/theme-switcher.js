import { getFromLs, saveInLs } from './local-storage-api';

export const switchTheme = () => {
  const theme = getFromLs('theme');
  if (theme === 'theme-dark') {
    document.body.classList.remove('theme-dark');
    document.body.classList.add('theme-light');
    saveInLs('theme', 'theme-light');
  } else {
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
    saveInLs('theme', 'theme-dark');
  }
};

export const initTheme = () => {
  const theme = getFromLs('theme');
  if (theme === 'theme-light') {
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark');
  } else {
    saveInLs('theme', 'theme-dark');
  }
};

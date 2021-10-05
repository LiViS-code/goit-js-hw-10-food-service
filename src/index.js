import './sass/main.scss';
import menu from './templates/menu-item.hbs';
import menuList from './menu.json';

// варианты тем
const theme = {
  light: 'light-theme',
  dark: 'dark-theme',
};

const ref = {
  menu: document.querySelector('.js-menu'),
  themeSwitchToggle: document.querySelector('#theme-switch-toggle'),
};

// создать разметку меню
const makeMenuList = list => menu(list);

// вставить разметку на страничку
ref.menu.insertAdjacentHTML('beforeend', makeMenuList(menuList));

const toggleTheme = () => {
  // переключить темы
  switch (document.body.className) {
    case theme.dark:
      document.body.classList.remove(theme.dark);
      document.body.classList.add(theme.light);
      break;

    default:
      document.body.classList.remove(theme.light);
      document.body.classList.add(theme.dark);
      break;
  }

  // сохранить выбор темы
  localStorage.setItem('theme', document.body.className);
};

// слушать переключатель тем
ref.themeSwitchToggle.addEventListener('change', toggleTheme);

// прочитать сохраненную тему, если есть
if (localStorage.getItem('theme')) document.body.classList.add(localStorage.getItem('theme'));

// проверить корректность положения переключателя тем
if (localStorage.getItem('theme') === theme.dark)
  ref.themeSwitchToggle.setAttribute('checked', true);

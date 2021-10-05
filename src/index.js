import './sass/main.scss';
import menu from './templates/menu-item.hbs';
import menuList from './menu.json';

// варианты тем
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const ref = {
  menu: document.querySelector('.js-menu'),
  themeSwitchToggle: document.querySelector('#theme-switch-toggle'),
};

// вставить разметку на страничку
ref.menu.insertAdjacentHTML('beforeend', menu(menuList));

const toggleTheme = () => {
  // переключить темы
  switch (document.body.className) {
    case Theme.DARK:
      document.body.classList.remove(Theme.DARK);
      document.body.classList.add(Theme.LIGHT);
      break;

    default:
      document.body.classList.remove(Theme.LIGHT);
      document.body.classList.add(Theme.DARK);
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
if (localStorage.getItem('theme') === Theme.DARK)
  ref.themeSwitchToggle.setAttribute('checked', true);

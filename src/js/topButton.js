import refs from './refs';

refs.top_button.addEventListener('click', () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  }),
);

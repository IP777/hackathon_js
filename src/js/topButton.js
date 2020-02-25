import refs from './refs';

const go_to_bottom = () => myHttpRequest.goOnTop();

refs.top_button.addEventListener(
  'click',
  () => (document.documentElement.scrollTop = 0),
);

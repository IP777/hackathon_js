import imageCardTemplate from '../template/card.hbs';
import mainTemplate from '../template/main-page.hbs';
import similarTemplate from '../template/similar-movies.hbs';
import cardTemplate from '../template/card.hbs';
import libraryCardTemplate from '../template/library-card.hbs';
import testTemplate from '../template/test.hbs';
//-----------------------------------------------------
import refs from './refs';
import btn from './btn';
import render from './api';
import storage from './localStorageJS';

render.popularMovie(mainTemplate, refs.cardList);

console.log(location.href);
document.location.replace('#main');
btn.offSidebar();

refs.serchForm.addEventListener('submit', e => {
  e.preventDefault();
  const text = refs.textArea.value;
  render.createMarkup(text, mainTemplate, refs.cardList);
  document.location.replace(`#${text}`);
  console.log(refs.itemCard);
});

refs.libraryBtn.addEventListener('click', () => {
  btn.offSearchForm();
  btn.onSidebar();

  refs.cardList.innerHTML = '';
  document.location.replace('#library');
});

refs.cardList.addEventListener('click', e => {
  if (e.target.className === 'grid-img') {
    btn.offSearchForm();
    btn.onSidebar();
    const id = e.target.getAttribute('id');
    storage.setWatchedMovieIdToLocalStorage(id);
    render.createMarkupId(id, cardTemplate, refs.cardList);
  }
});

refs.sidebarWatchBtn.addEventListener('click', () => {
  const idArr = storage.getWatchedMovieIdToLocalStorage();
  idArr.forEach(e => render.createLocalMarkup(e, mainTemplate, refs.cardList));
});

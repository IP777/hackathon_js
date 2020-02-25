import mainTemplate from '../template/main-page.hbs';
import cardTemplate from '../template/card.hbs';
import watchQWTemplate from '../template/watch-queue-page.hbs';
//-----------------------------------------------------
import refs from './refs';
import btn from './btn';
import render from './api';
import storage from './localStorageJS';
import observer from './observer';

render.popularMovie(mainTemplate, refs.cardList);
//render.popularMovie(watchQWTemplate, refs.cardList);
//render.createMarkupId('419704', cardTemplate, refs.cardList);

//console.log(location.href);
document.location.replace('#main');
btn.offSidebar();
//btn.offLoadMoreBtn();

refs.homeBtn.addEventListener('click', e => {
  btn.onSearchForm();
  btn.offSidebar();
  e.preventDefault();
  //console.log(storage.getRequest());
  refs.cardList.innerHTML = '';
  const text = storage.getRequest();
  if (text) {
    render.createMarkup(text, mainTemplate, refs.cardList);
    observer();
  } else {
    render.popularMovie(mainTemplate, refs.cardList);
  }

  refs.textArea.value = text;
});

refs.serchForm.addEventListener('submit', e => {
  e.preventDefault();
  refs.cardList.innerHTML = '';
  const text = refs.textArea.value;
  if (text) {
    render.createMarkup(text, mainTemplate, refs.cardList);
    observer();
  } else {
    render.popularMovie(mainTemplate, refs.cardList);
  }

  document.location.replace(`#${text}`);
  storage.setRequest(text);
});

const watchFunc = () => {
  refs.sidebarWatchBtn.style.color = 'white';
  document.location.replace('#watch');

  const idArr = storage.getWatchedMovieIdToLocalStorage();
  if (idArr != null) {
    refs.cardList.innerHTML = '';
    idArr.forEach(e =>
      render.createLocalMarkup(e, watchQWTemplate, refs.cardList),
    );
  } else {
    refs.cardList.innerHTML = '';
  }
  document.location.replace('#watch');
};

refs.libraryBtn.addEventListener('click', () => {
  btn.offSearchForm();
  btn.onSidebar();
  refs.sidebarWatchBtn.style.color = 'white';
  watchFunc();
});

refs.sidebarWatchBtn.addEventListener('click', () => {
  refs.sidebarQueueBtn.style.color = 'rgb(156, 156, 156)';
  watchFunc();
});

refs.sidebarQueueBtn.addEventListener('click', () => {
  const idArr = storage.getQueueMovieIdToLocalStorage();
  if (idArr != null) {
    refs.cardList.innerHTML = '';
    idArr.forEach(e =>
      render.createLocalMarkup(e, watchQWTemplate, refs.cardList),
    );
  } else {
    refs.cardList.innerHTML = '';
  }
  refs.sidebarQueueBtn.style.color = 'white';
  refs.sidebarWatchBtn.style.color = 'rgb(156, 156, 156)';
  document.location.replace('#queue');
});

refs.cardList.addEventListener('click', e => {
  switch (e.target.className) {
    case 'grid-img':
      observer('off');
      btn.offSearchForm();
      btn.onSidebar();
      render.createMarkupId(
        e.target.getAttribute('id'),
        cardTemplate,
        refs.cardList,
      );
      break;
    case 'closeBtn':
      refs.cardList.removeChild(e.target.parentElement);
      const id = e.target.parentElement.dataset.movieid;
      if (location.href != 'http://localhost:4040/#queue') {
        storage.deleteWatchedMovieIdFromLocalStorage(id);
      } else {
        storage.deleteQueueMovieIdFromLocalStorage(id);
      }
      break;
    case 'btnAddWatch':
      storage.setWatchedMovieIdToLocalStorage(e.target.dataset.movieid);
      break;
    case 'btnAddQueue':
      storage.setQueueMovieIdToLocalStorage(e.target.dataset.movieid);
      break;
  }
});

// console.log(refs.body);
// refs.top_button.addEventListener(
//   'click',
//   () => (document.documentElement.scrollTop = 0),
// );

//------------------------------------------
// const movieId = location.hash;

// if (movieId == '#main') {
//   console.log('main');
//   //reloadInt.card(movieId);
// } else {
//   console.log(location.hash);
//   //reloadInt.mainPage();
// }
//-----------------------------------------

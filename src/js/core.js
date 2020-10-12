import mainTemplate from '../template/main-page.hbs';
import cardTemplate from '../template/card.hbs';
import watchQWTemplate from '../template/watch-queue-page.hbs';
import swiperTemplate from '../template/swiper.hbs';
//-----------------------------------------------------
import refs from './refs';
import btn from './btn';
import render from './api';
import storage from './localStorageJS';
import observer from './observer';
//import swiperJS from './mySwiper';

render.popularMovie(mainTemplate, refs.cardList);
//render.popularMovie(watchQWTemplate, refs.cardList);
//render.createMarkupId('416119', cardTemplate, refs.cardList);

//console.log(location.href);
document.location.replace('#main');
btn.offSidebar();

refs.logo.addEventListener('click', e => {
  e.preventDefault();
  btn.onSearchForm();
  btn.offSidebar();
  btn.offLoadBtn();
  btn.onTopBtn();

  refs.textArea.value = '';
  refs.cardList.innerHTML = '';
  refs.swiperContainer.innerHTML = '';
  render.popularMovie(mainTemplate, refs.cardList);
});

refs.homeBtn.addEventListener('click', e => {
  e.preventDefault();
  btn.onSearchForm();
  btn.offSidebar();
  //console.log(storage.getRequest());
  refs.cardList.innerHTML = '';
  const text = storage.getRequest();
  if (text) {
    render.createMarkup(text, mainTemplate, refs.cardList);
  } else {
    render.popularMovie(mainTemplate, refs.cardList);
  }

  refs.swiperContainer.innerHTML = '';
  btn.onTopBtn();
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
    observer('off');
  }

  document.location.replace(`#${text}`);
  storage.setRequest(text);
});

const watchFunc = () => {
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
  refs.swiperContainer.innerHTML = '';
  btn.onTopBtn();
  document.location.replace('#watch');
};

refs.libraryBtn.addEventListener('click', () => {
  btn.offSearchForm();
  btn.onSidebar();
  btn.offLoadBtn();
  watchFunc();
  refs.swiperContainer.innerHTML = '';
});

refs.sidebarWatchBtn.addEventListener('click', () => {
  watchFunc();
  refs.swiperContainer.innerHTML = '';
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

  refs.swiperContainer.innerHTML = '';
  btn.onTopBtn();
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
      btn.offTopBtn();
      render.createSwipeMarkup(
        e.target.getAttribute('id'),
        swiperTemplate,
        refs.swiperContainer,
      );
      break;
    case 'closeBtn':
      refs.cardList.removeChild(e.target.parentElement);
      const id = e.target.parentElement.dataset.movieid;
      //console.log(location.hash);
      if (location.hash != '#queue') {
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

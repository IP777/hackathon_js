import refs from './refs';
import storage from './localStorageJS';
import render from './api';
import mainTemplate from '../template/main-page.hbs';
import btn from './btn';

function observer(type) {
  let iterator = 1;
  const options = {
    rootMargin: '30px',
    threshold: 0.5,
  };

  const onEntry = (entries, observer) => {
    entries.forEach(entry => {
      console.log('main', iterator);
      iterator = iterator + 1;
      const text = storage.getRequest();
      render.createMarkup(text, mainTemplate, refs.cardList, iterator);
    });
  };

  const observer = new IntersectionObserver(onEntry, options);

  observer.observe(refs.loadMoreBtn);

  if (type === 'off') {
    observer.unobserve(refs.loadMoreBtn, observer);
    btn.offLoadMoreBtn();
  }
}
export default observer;

import refs from './refs';
const btn = {
  offSidebar() {
    refs.sidebar.classList.add('hide');
  },
  onSidebar() {
    refs.sidebar.classList.remove('hide');
  },
  offLoadBtn() {
    refs.loadMoreBtn.classList.add('hide');
  },
  onLoadBtn() {
    refs.loadMoreBtn.classList.remove('hide');
  },
  offCloseBtn() {
    const markup = document.querySelectorAll('.close');
    console.log(markup);
    for (const li of markup) {
      li.classList.add('hide');
      console.log(li);
    }
  },
  onCloseBtn() {
    Array.from(refs.closeBtn).map(item => item.classList.remove('hide'));
  },
  onWatchBtn() {
    refs.sidebarWatchBtn.classList.add('active');
  },
  offWatchBtn() {
    refs.sidebarWatchBtn.classList.remove('active');
  },
  onQueueBtn() {
    refs.sidebarQueueBtn.classList.add('active');
  },
  offQueueBtn() {
    refs.sidebarQueueBtn.classList.remove('active');
  },
  offSearchForm() {
    refs.serchForm.classList.add('hide');
    refs.textArea.classList.add('hide');
  },
  onSearchForm() {
    refs.serchForm.classList.remove('hide');
    refs.textArea.classList.remove('hide');
  },
  offLoadMoreBtn() {
    refs.loadMoreBtn.classList.add('hide');
  },
  onLoadMoreBtn() {
    refs.loadMoreBtn.classList.remove('hide');
  },
  offTopBtn() {
    refs.top_button.classList.add('hide');
  },
  onTopBtn() {
    refs.top_button.classList.remove('hide');
  },
};

export default btn;

import Swiper from 'swiper';
import css from 'swiper/css/swiper.min.css';
//-------------------------------------------------------------
import cardTemplate from '../template/card.hbs';
import swiperTemplate from '../template/swiper.hbs';
//-------------------------------------------------------------
import render from './api';
import refs from './refs';
import btn from './btn';

//https://swiperjs.com/api/#methods

function swiperJS() {
  const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
      slideToClickedSlide: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  swiper.on('click', function(e) {
    const id = e.originalTarget.getAttribute('id');
    render.createMarkupId(id, cardTemplate, refs.cardList);
    //render.createSwipeMarkup(id, swiperTemplate, refs.swiperContainer);
  });
}

export default swiperJS;

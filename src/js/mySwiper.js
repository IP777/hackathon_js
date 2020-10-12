import Swiper from 'swiper';
//-------------------------------------------------------------
import cardTemplate from '../template/card.hbs';
//-------------------------------------------------------------
import render from './api';
import refs from './refs';

//https://swiperjs.com/

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
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  swiper.on('click', function (e) {
    const id = e.originalTarget.getAttribute('id');
    render.createMarkupId(id, cardTemplate, refs.cardList);
  });
}

export default swiperJS;

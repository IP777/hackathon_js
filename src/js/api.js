import axios from 'axios';
import refs from './refs';


import refs from './refs';
import btn from './btn';
import swiperJS from './mySwiper';
import pnotify from './pnotifyAlerts';

const myHttpRequest = {
  baseUrl: 'https://api.themoviedb.org/3/',
  API_KEY: '8b49236e6b82eb62c6f5cab7126e8684',
  request: 'flower',
  //pagination: 1,

  createMarkup(condition, template, container, pagination = 1) {
    //debugger;
    this.request = condition;
    fetch(
      `${this.baseUrl}search/movie?api_key=${this.API_KEY}&page=${pagination}&query=${this.request}&include_adult=false&language=en-US`,
    )
      .then(response => {
        //console.log(response);
        return response.json();
      })
      .then(data => {
        //console.log(data);
        if (data.total_pages > 1) {
          btn.onLoadMoreBtn();
          //pnotify.pError('Упс', `По запросу <${condition}> нечего не найдено`);
          btn.offLoadBtn();
        }

        const markup = data.results
          .map(img_card => template(img_card))
          .join('');

        container.insertAdjacentHTML('beforeend', markup);
      })
      .catch(error => {
        console.log(`Oh no, erorr ${error}`);
      });
  },

  createMarkupId(id, template, container) {
    fetch(`${this.baseUrl}movie/${id}?api_key=${this.API_KEY}&language=en-US`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(data);
        container.innerHTML = template(data);
      })
      .catch(error => {
        console.log(`Oh no, erorr ${error}`);
      });
  },

  createLocalMarkup(id, template, container) {
    fetch(`${this.baseUrl}movie/${id}?api_key=${this.API_KEY}&language=en-US`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(container);
        container.insertAdjacentHTML('beforeend', template(data));
      })
      .catch(error => {
        console.log(`Oh no, erorr ${error}`);
      });
  },

  popularMovie(template, container) {
    fetch(
      `https://cors-anywhere.herokuapp.com/${this.baseUrl}movie/popular/?api_key=${this.API_KEY}`,
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(data.results);
        const markup = data.results
          .map(img_card => template(img_card))
          .join('');
        container.innerHTML = markup;
      })
      .catch(error => {
        console.log(`Oh no, erorr ${error}`);
      });
  },

  createSwipeMarkup(id, template, container) {
    fetch(
      `${this.baseUrl}movie/${id}/similar?api_key=${this.API_KEY}&language=en-US`,
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        //console.log(container);
        container.insertAdjacentHTML('beforeend', template(data));
        swiperJS();
      })
      .catch(error => {
        console.log(`Oh no, erorr ${error}`);
      });
  },
};

export default myHttpRequest;

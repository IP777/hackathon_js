(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/l+y":function(e,t,n){},"5qlM":function(e,t,n){},KgNg:function(e,t,n){},L1EO:function(e,t,n){},QTlZ:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var r,i=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,c="function",d=e.escapeExpression;return'        <li class="itemCard" data-movieID="'+d(typeof(r=null!=(r=n.id||(null!=t?t.id:t))?r:l)===c?r.call(i,{name:"id",hash:{},data:o,loc:{start:{line:3,column:43},end:{line:3,column:49}}}):r)+'">\r\n                <a href="#" class="close hide" data-movieID="'+d(typeof(r=null!=(r=n.id||(null!=t?t.id:t))?r:l)===c?r.call(i,{name:"id",hash:{},data:o,loc:{start:{line:4,column:61},end:{line:4,column:67}}}):r)+'"></a>\r\n                <a href="#id='+d(typeof(r=null!=(r=n.id||(null!=t?t.id:t))?r:l)===c?r.call(i,{name:"id",hash:{},data:o,loc:{start:{line:5,column:29},end:{line:5,column:35}}}):r)+'" onclick="location.replace(\'#id='+d(typeof(r=null!=(r=n.id||(null!=t?t.id:t))?r:l)===c?r.call(i,{name:"id",hash:{},data:o,loc:{start:{line:5,column:68},end:{line:5,column:74}}}):r)+'\')">\r\n                        <img src="https://cors-anywhere.herokuapp.com/https://image.tmdb.org/t/p/w500'+d(typeof(r=null!=(r=n.backdrop_path||(null!=t?t.backdrop_path:t))?r:l)===c?r.call(i,{name:"backdrop_path",hash:{},data:o,loc:{start:{line:6,column:101},end:{line:6,column:118}}}):r)+'"\r\n                                alt="filmImg">\r\n                        <h2>'+d(typeof(r=null!=(r=n.title||(null!=t?t.title:t))?r:l)===c?r.call(i,{name:"title",hash:{},data:o,loc:{start:{line:8,column:28},end:{line:8,column:37}}}):r)+" ("+d(typeof(r=null!=(r=n.release_date||(null!=t?t.release_date:t))?r:l)===c?r.call(i,{name:"release_date",hash:{},data:o,loc:{start:{line:8,column:39},end:{line:8,column:55}}}):r)+")</h2>\r\n                </a>\r\n        </li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var r;return'<ul class="movie-cards">\r\n'+(null!=(r=n.each.call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:2,column:8},end:{line:11,column:17}}}))?r:"")+"</ul>"},useData:!0})},QfWi:function(e,t,n){"use strict";n.r(t);n("L1EO"),n("lfAJ"),n("KgNg"),n("W62a"),n("5qlM"),n("/l+y"),n("m6Dc"),n("M5ur"),n("9va6"),n("dcBu"),n("PzF0");var a=n("RK3n"),o=n.n(a),r={anti_cors:"https://cors-anywhere.herokuapp.com/",body:document.querySelector("body"),logo:document.querySelector(".site-logo"),intro:document.querySelector(".intro"),container:document.querySelector("#container"),serchForm:document.querySelector(".search-form"),textArea:document.querySelector("#search-form"),cardContainer:document.querySelector("#container"),cardList:document.querySelector(".card_list"),library:document.querySelector("#nav-libery"),sidebar:document.querySelector(".sidebar"),sidebarWatchBtn:document.querySelector(".sidebar_watch"),sidebarQueueBtn:document.querySelector(".sidebar_queue"),loadMoreBtn:document.querySelector(".loadMoreBtn")};n("Y4kN"),n("dIfx"),n("UOjr"),n("mNaS");n("iPZ8"),n("kypl"),n("pCzD"),n("IlJM"),n("4owi"),n("/YXa"),n("lmye"),n("fp7Y"),n("JBxO"),n("Muwe"),n("WoWj"),n("aZFp"),n("U00V");var i=n("QTlZ"),l=n.n(i),c=n("b5mA"),d=n.n(c),s=n("czhI"),u=n.n(s);u.a.defaults.baseURL=r.anti_cors+"https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/";var m="8b49236e6b82eb62c6f5cab7126e8684",h={currPage:1,getPopularFilms:function(){return u.a.get("/movie/popular/?api_key="+m).then((function(e){return e.data}))},getInfoById:function(e){return e=this.getMovieIdFromLink()?this.getMovieIdFromLink():e,u.a.get("/movie/"+e+"?api_key="+m).then((function(e){return e.data}))},getMoviesByQuery:function(e){var t=this;return this.currPage=this.getPageFromLink()?this.getPageFromLink():this.currPage,u.a.get("/search/movie?api_key="+m+"&page="+this.currPage+"&query="+e+"&include_adult=false&language=en-US").then((function(e){return t.currPage+=1,e.data}))},getPageFromLink:function(){return location.hash.split("#page=")[1]},getMovieIdFromLink:function(){return location.hash.split("#id=")[1]},getSimilarMovies:function(e){return e=this.getMovieIdFromLink()?this.getMovieIdFromLink():e,u.a.get("/movie/"+e+"/similar?api_key="+m).then((function(e){return e.data}))}},f=(n("uQK7"),n("Xlt+"),{setWatchedMovieIdToLocalStorage:function(e){var t=localStorage.getItem("watched"),n=t?JSON.parse(t):[];n.find((function(t){return t.id===e.id}))||(n.push(e),localStorage.setItem("watched",JSON.stringify(n)))},getWatchedMovieIdToLocalStorage:function(){var e=localStorage.getItem("watched");return JSON.parse(e)},deleteWatchedMovieIdFromLocalStorage:function(e){var t=localStorage.getItem("watched"),n=t?JSON.parse(t):[],a=n.find((function(t){return t.id===Number(e)}));if(a){var o=n.indexOf(a);n.splice(o,1)}localStorage.setItem("watched",JSON.stringify(n))},setQueueMovieIdToLocalStorage:function(e){var t=localStorage.getItem("queue"),n=t?JSON.parse(t):[];n.find((function(t){return t.id===e.id}))||(n.push(e),localStorage.setItem("queue",JSON.stringify(n)))},getQueueMovieIdToLocalStorage:function(){var e=localStorage.getItem("queue");return JSON.parse(e)},deleteQueueMovieIdFromLocalStorage:function(e){var t=localStorage.getItem("queue"),n=t?JSON.parse(t):[],a=n.find((function(t){return t.id===Number(e)}));if(console.log(a),a){var o=n.indexOf(a);n.splice(o,1)}localStorage.setItem("queue",JSON.stringify(n))}}),p={offSidebar:function(){r.sidebar.classList.add("hide")},onSidebar:function(){r.sidebar.classList.remove("hide")},offLoadBtn:function(){r.loadMoreBtn.classList.add("hide")},onLoadBtn:function(){r.loadMoreBtn.classList.remove("hide")},offCloseBtn:function(){var e=document.querySelectorAll(".close");console.log(e);var t=e,n=Array.isArray(t),a=0;for(t=n?t:t[Symbol.iterator]();;){var o;if(n){if(a>=t.length)break;o=t[a++]}else{if((a=t.next()).done)break;o=a.value}var r=o;r.classList.add("hide"),console.log(r)}},onCloseBtn:function(){Array.from(r.closeBtn).map((function(e){return e.classList.remove("hide")}))},onWatchBtn:function(){r.sidebarWatchBtn.classList.add("active")},offWatchBtn:function(){r.sidebarWatchBtn.classList.remove("active")},onQueueBtn:function(){r.sidebarQueueBtn.classList.add("active")},offQueueBtn:function(){r.sidebarQueueBtn.classList.remove("active")}},v={mainPage:function(){var e=this;h.getPopularFilms().then((function(t){t.results.map((function(e){return e.release_date=e.release_date.split("-")[0]}));var n=l()(t.results);r.cardList.innerHTML="",e.insertCardsToMainPage(n),e.setOnclick()}))},card:function(e){var t=this;h.getInfoById(e).then((function(n){p.offLoadBtn();var a=o()(n);t.insertCardToMain(a),t.rerenderButtons(),t.setOnclickAddWatch(),t.setOnclickAddQueue(),h.getSimilarMovies(e).then((function(e){var n=d()(e.results);t.insertSimilarMoviesToCard(n),$(".similarMovies").slick({dots:!0,infinite:!0,speed:300,slidesToShow:1,centerMode:!0,variableWidth:!0,centerPadding:"60px",arrows:!0,autoplay:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}))}))},buildCartTemplate:function(e){return o()(e)},buildSimilarMoviesTemplate:function(e){return d()(e)},insertSimilarMoviesToCard:function(e){r.cardList.insertAdjacentHTML("beforeend",e)},insertCardToMain:function(e){r.cardList.innerHTML="",r.cardList.innerHTML=e,r.textArea.hidden=!0},insertCardsToMainPage:function(e){r.cardList.insertAdjacentHTML("beforeend",e)},showCardsByquery:function(e){var t=this;h.getMoviesByQuery(e).then((function(e){e.results.map((function(e){return e.release_date=e.release_date.split("-")[0]}));var n=l()(e.results);t.insertCardsToMainPage(n),t.setOnclick()}))},setOnclick:function(){var e=this,t=document.querySelectorAll(".itemCard"),n=Array.isArray(t),a=0;for(t=n?t:t[Symbol.iterator]();;){var o;if(n){if(a>=t.length)break;o=t[a++]}else{if((a=t.next()).done)break;o=a.value}o.addEventListener("click",(function(t){if("A"!=t.target.nodeName){var n=t.currentTarget.dataset.movieid;e.card(n)}}))}},setOnclickAddWatch:function(){var e=this,t=document.querySelector(".btnAddWatch");t.addEventListener("click",(function(n){var a=n.currentTarget.dataset.movieid;if("add"===t.dataset.action){var o=f.setWatchedMovieIdToLocalStorage;h.getInfoById(a).then(o).then(e.rerenderButtons)}else"remove"===t.dataset.action&&h.getInfoById(a).then(f.deleteWatchedMovieIdFromLocalStorage).then(e.rerenderButtons)}))},rerenderButtons:function(){var e=document.querySelector(".btnAddWatch"),t=document.querySelector(".btnAddQueue"),n=f.getWatchedMovieIdToLocalStorage(),a=!1,o=!1;n&&(a=n.find((function(t){return t.id===Number(e.dataset.movieid)})));var r=f.getQueueMovieIdToLocalStorage();r&&(o=r.find((function(e){return e.id===Number(t.dataset.movieid)}))),a?(e.textContent="Remove from watched",e.dataset.action="remove"):(e.textContent="Add to watched",e.dataset.action="add"),o?(t.textContent="Remove from queue",t.dataset.action="remove"):(t.textContent="Add to queue",t.dataset.action="add")},setOnclickAddQueue:function(){var e=this,t=document.querySelector(".btnAddQueue");t.addEventListener("click",(function(n){var a=n.currentTarget.dataset.movieid;if("add"===t.dataset.action){var o=f.setQueueMovieIdToLocalStorage;h.getInfoById(a).then(o).then(e.rerenderButtons)}else"remove"===t.dataset.action&&h.getInfoById(a).then(f.deleteQueueMovieIdFromLocalStorage).then(e.rerenderButtons)}))},renderLibrary:function(e){void 0===e&&(e="watched"),p.offLoadBtn();var t="";"watched"===e?t=f.getWatchedMovieIdToLocalStorage():"queue"===e&&(t=f.getQueueMovieIdToLocalStorage()),r.textArea.hidden=!0,r.cardList.innerHTML="";var n=l()(t);this.insertCardsToMainPage(n),this.setOnclick(),Array.from(document.querySelectorAll(".close")).map((function(t){t.classList.remove("hide"),t.addEventListener("click",(function(t){t.preventDefault();var n=t.currentTarget.dataset.movieid;if(console.log(n),"watched"===e){f.deleteWatchedMovieIdFromLocalStorage(n);var a=t.currentTarget.parentNode;a.parentNode.removeChild(a)}else if("queue"===e){f.deleteQueueMovieIdFromLocalStorage(n);var o=t.currentTarget.parentNode;o.parentNode.removeChild(o)}Array.from(document.querySelectorAll(".close")).map((function(e){return e.classList.remove("hide")}))}))}))}};p.offSidebar(),p.offLoadBtn(),p.offCloseBtn(),r.serchForm.addEventListener("submit",(function(e){p.onLoadBtn(),h.currPage=1,e.preventDefault(),r.cardList.innerHTML="";var t=r.textArea.value;v.showCardsByquery(t)}));var g=h.getMovieIdFromLink();g?v.card(g):v.mainPage(),r.library.addEventListener("click",(function(){v.renderLibrary(),p.onSidebar(),p.onWatchBtn()})),r.loadMoreBtn.addEventListener("click",(function(){v.showCardsByquery(r.textArea.value)})),r.sidebarWatchBtn.addEventListener("click",(function(){v.renderLibrary("watched"),p.onWatchBtn(),p.offQueueBtn()})),r.sidebarQueueBtn.addEventListener("click",(function(){v.renderLibrary("queue"),p.offWatchBtn(),p.onQueueBtn()}))},RK3n:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){return'\r\n            <li class="genre">'+e.escapeExpression(e.lambda(null!=t?t.name:t,t))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var r,i,l=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,d="function",s=e.escapeExpression;return'<div class="film-card container">\r\n    <img src="https://cors-anywhere.herokuapp.com/https://image.tmdb.org/t/p/w500'+s(typeof(i=null!=(i=n.poster_path||(null!=t?t.poster_path:t))?i:c)===d?i.call(l,{name:"poster_path",hash:{},data:o,loc:{start:{line:2,column:81},end:{line:2,column:96}}}):i)+'" alt="filmImg"\r\n        class="img-film-card">\r\n\r\n    <div class="movieInfo">\r\n        <h2>'+s(typeof(i=null!=(i=n.title||(null!=t?t.title:t))?i:c)===d?i.call(l,{name:"title",hash:{},data:o,loc:{start:{line:6,column:12},end:{line:6,column:21}}}):i)+'</h2>\r\n        <p class="bgrn-p ">vote / votes <span class="spase">'+s(typeof(i=null!=(i=n.vote_average||(null!=t?t.vote_average:t))?i:c)===d?i.call(l,{name:"vote_average",hash:{},data:o,loc:{start:{line:7,column:60},end:{line:7,column:76}}}):i)+" / "+s(typeof(i=null!=(i=n.vote_count||(null!=t?t.vote_count:t))?i:c)===d?i.call(l,{name:"vote_count",hash:{},data:o,loc:{start:{line:7,column:79},end:{line:7,column:93}}}):i)+'</span></p>\r\n        <p>popularity <span class="spase"></span>'+s(typeof(i=null!=(i=n.popularity||(null!=t?t.popularity:t))?i:c)===d?i.call(l,{name:"popularity",hash:{},data:o,loc:{start:{line:8,column:49},end:{line:8,column:63}}}):i)+'</span></p>\r\n        <p class="bgrn-p">origin title<span class="spase"></span>'+s(typeof(i=null!=(i=n.original_title||(null!=t?t.original_title:t))?i:c)===d?i.call(l,{name:"original_title",hash:{},data:o,loc:{start:{line:9,column:65},end:{line:9,column:83}}}):i)+'</span></p>\r\n        <p class="float-p-genre">genre</p>\r\n        <ul>'+(null!=(r=n.each.call(l,null!=t?t.genres:t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:11,column:12},end:{line:13,column:21}}}))?r:"")+"        </ul>\r\n        <article class='about-film'>\r\n            <h3>About</h3>\r\n            <p>"+s(typeof(i=null!=(i=n.overview||(null!=t?t.overview:t))?i:c)===d?i.call(l,{name:"overview",hash:{},data:o,loc:{start:{line:17,column:15},end:{line:17,column:27}}}):i)+'</p>\r\n        </article>\r\n\r\n        <button class="btnAddWatch" data-action="add" data-movieID="'+s(typeof(i=null!=(i=n.id||(null!=t?t.id:t))?i:c)===d?i.call(l,{name:"id",hash:{},data:o,loc:{start:{line:20,column:68},end:{line:20,column:74}}}):i)+'">Add to watched</button>\r\n        <button class="btnAddQueue" data-action="add" data-movieID="'+s(typeof(i=null!=(i=n.id||(null!=t?t.id:t))?i:c)===d?i.call(l,{name:"id",hash:{},data:o,loc:{start:{line:21,column:68},end:{line:21,column:74}}}):i)+'">Add to queue</button>\r\n\r\n    </div>\r\n\r\n</div>'},useData:!0})},W62a:function(e,t,n){},b5mA:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var r,i=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,c=e.escapeExpression;return'\r\n    <div class="slider-item">\r\n        <a href="#id='+c("function"==typeof(r=null!=(r=n.id||(null!=t?t.id:t))?r:l)?r.call(i,{name:"id",hash:{},data:o,loc:{start:{line:6,column:21},end:{line:6,column:27}}}):r)+'" onclick="location.replace(\'#id='+c("function"==typeof(r=null!=(r=n.id||(null!=t?t.id:t))?r:l)?r.call(i,{name:"id",hash:{},data:o,loc:{start:{line:6,column:60},end:{line:6,column:66}}}):r)+'\');location.reload();">\r\n            <img src="https://cors-anywhere.herokuapp.com/https://image.tmdb.org/t/p/w500'+c("function"==typeof(r=null!=(r=n.backdrop_path||(null!=t?t.backdrop_path:t))?r:l)?r.call(i,{name:"backdrop_path",hash:{},data:o,loc:{start:{line:7,column:89},end:{line:7,column:106}}}):r)+'" alt="" />\r\n            <h2>'+c("function"==typeof(r=null!=(r=n.title||(null!=t?t.title:t))?r:l)?r.call(i,{name:"title",hash:{},data:o,loc:{start:{line:8,column:16},end:{line:8,column:25}}}):r)+"</h2>\r\n        </a>\r\n    </div>\r\n\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var r;return'<h2 class="similarTitle">Similar movies</h2>\r\n<div class="similarMovies" data-slick=\'{"slidesToShow": 4, "slidesToScroll": 4}\'>\r\n'+(null!=(r=n.each.call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:3,column:4},end:{line:13,column:13}}}))?r:"")+"\r\n</div>"},useData:!0})},lfAJ:function(e,t,n){},m6Dc:function(e,t,n){}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.05c240f5144eab215af8.js.map
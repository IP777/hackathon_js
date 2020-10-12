const movieLocalStorage = {
  setWatchedMovieIdToLocalStorage(id) {
    let watchedArray = localStorage.getItem('watched');
    let parsedWatchedArray = watchedArray ? JSON.parse(watchedArray) : [];

    let isContain = parsedWatchedArray.find(movie => movie === id);

    if (isContain) {
      return;
    }

    parsedWatchedArray.push(id);

    localStorage.setItem('watched', JSON.stringify(parsedWatchedArray));
  },

  getWatchedMovieIdToLocalStorage() {
    const savedArrayOfId = localStorage.getItem('watched');
    const parsedArrayOfid = JSON.parse(savedArrayOfId);

    return parsedArrayOfid;
  },

  deleteWatchedMovieIdFromLocalStorage(id) {
    let watchedArray = localStorage.getItem('watched');

    let parsedWatchedArray = watchedArray ? JSON.parse(watchedArray) : [];

    let isContain = parsedWatchedArray.find(movie => movie === id);

    if (isContain) {
      const positionId = parsedWatchedArray.indexOf(isContain);

      parsedWatchedArray.splice(positionId, 1);
    }

    localStorage.setItem('watched', JSON.stringify(parsedWatchedArray));
  },

  setQueueMovieIdToLocalStorage(id) {
    let queueArray = localStorage.getItem('queue');
    let parsedQueueArray = queueArray ? JSON.parse(queueArray) : [];

    let isContain = parsedQueueArray.find(movie => movie === id);

    if (isContain) {
      return;
    }

    parsedQueueArray.push(id);

    localStorage.setItem('queue', JSON.stringify(parsedQueueArray));
  },

  getQueueMovieIdToLocalStorage() {
    const savedArrayOfId = localStorage.getItem('queue');
    const parsedArrayOfid = JSON.parse(savedArrayOfId);

    return parsedArrayOfid;
  },

  deleteQueueMovieIdFromLocalStorage(id) {
    let queueArray = localStorage.getItem('queue');
    let parsedQueueArray = queueArray ? JSON.parse(queueArray) : [];

    let isContain = parsedQueueArray.find(movie => movie === id);
    //console.log(parsedQueueArray, isContain);
    if (isContain) {
      const positionId = parsedQueueArray.indexOf(isContain);

      parsedQueueArray.splice(positionId, 1);
    }

    localStorage.setItem('queue', JSON.stringify(parsedQueueArray));
  },

  setRequest(text) {
    localStorage.setItem('request', JSON.stringify(text));
  },
  getRequest() {
    const savedArrayOfId = localStorage.getItem('request');
    const parsedArrayOfid = JSON.parse(savedArrayOfId);

    return parsedArrayOfid;
  },
};

export default movieLocalStorage;

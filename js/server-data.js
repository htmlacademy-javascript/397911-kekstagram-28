import { insertPhotos } from './photos.js';

fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((res) => res.json())
  .then((json) => {
    insertPhotos(json);
  });

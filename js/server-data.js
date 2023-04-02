import { insertPhotos } from './photos.js';

const ERROR_SHOW_TIME = 5000;

const errorTemplate = document.querySelector('#fetch-error')
  .content
  .querySelector('.fetch-error');

fetch('https://28.javascript.pages.academy/kekstagram/data')
  .then((res) => {
    if (res.status !== 200) {
      throw new Error(`Response status ${res.status}`);
    }
    return res;
  })
  .then((res) => res.json())
  .then((json) => {
    insertPhotos(json);
  })
  .catch((e) => {
    const errorElement = errorTemplate.cloneNode(true);
    errorElement.innerText = e.message;
    document.body.appendChild(errorElement);

    setTimeout(() => {
      errorElement.remove();
    }, ERROR_SHOW_TIME);
  });

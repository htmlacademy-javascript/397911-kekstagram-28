import {renderComments} from './comments.js';

const bigPicture = document.querySelector('.big-picture');
const likesCount = bigPicture.querySelector('.likes-count');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const commentsCountContainer = bigPicture.querySelector('.social__comment-count');
const commentsCount = commentsCountContainer.querySelector('.comments-count');
const cancelBtn = document.querySelector('.big-picture__cancel');
const description = bigPicture.querySelector('.social__caption');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');

cancelBtn.addEventListener('click',() => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});

body.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
  }
});

export const showBigPhoto = (photo) => {
  bigPicture.classList.remove('hidden');
  bigPictureImg.setAttribute('src', photo.url);
  likesCount.textContent = photo.likes;
  description.textContent = photo.description;
  commentsCount.textContent = photo.comments.length;

  renderComments(photo.comments);

  commentsCountContainer.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
};

import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';

const MAX_HASHTAGS_COUNT = 5;
const ERROR_TEXT = 'Неправильно заполнено поле';
const REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;

const formElement = document.querySelector('.img-upload__form');
const uploadFile = formElement.querySelector('#upload-file');
const overlayElement = formElement.querySelector('.img-upload__overlay');
const previewCancelBtn = formElement.querySelector('#upload-cancel');
const hashtagsElement = formElement.querySelector('.text__hashtags');
const descriptionElement = formElement.querySelector('.text__description');

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const openPreviewModal = () => {
  overlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  resetScale();
};

const closePreviewModal = () => {
  overlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  formElement.reset();
  resetScale();
  resetEffects();
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagsElement ||
  document.activeElement === descriptionElement;

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    closePreviewModal();
  }
}

overlayElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

const onCancelButtonClick = () => {
  closePreviewModal();
};

const onFileInputChange = () => {
  openPreviewModal();
};

const isTagValid = (tag) => REGEXP.test(tag);

const isLenghtValid = (tags) => tags.length <= MAX_HASHTAGS_COUNT;

const isCaseValid = (tags) => {
  const lowerCase = tags.map((tag) => tag.toLowerCase());
  return lowerCase.length === new Set(lowerCase).size;
};

const areTagsValid = (text) => {
  const tags = text.split(' ').filter((tag) => tag !== '');

  return tags.every(isTagValid) && isLenghtValid(tags) && isCaseValid(tags);

};

pristine.addValidator(
  hashtagsElement,
  areTagsValid,
  ERROR_TEXT
);

const onFormSubmit = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};

uploadFile.addEventListener('change', onFileInputChange);
previewCancelBtn.addEventListener('click',onCancelButtonClick);
formElement.addEventListener('submit', onFormSubmit);

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
};

const closePreviewModal = () => {
  overlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  formElement.reset();
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

const onCancelButtonClick = () => {
  closePreviewModal();
};

const onFileInputChange = () => {
  openPreviewModal();
};

// pristine.addValidator(

// );

const onFormSubmit = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};

uploadFile.addEventListener('change', onFileInputChange);
previewCancelBtn.addEventListener('click',onCancelButtonClick);
formElement.addEventListener('submit', onFormSubmit);

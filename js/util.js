const ERROR_SHOW_TIME = 5000;

const errorTemplate = document.querySelector('#fetch-error')
  .content
  .querySelector('.fetch-error');

const showAlert = (message) => {
  const errorElement = errorTemplate.cloneNode(true);
  errorElement.textContent = message;
  document.body.appendChild(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, ERROR_SHOW_TIME);
};

export {showAlert};

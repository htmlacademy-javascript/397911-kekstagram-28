const DEFAULT_VALUE_SCALE = 100;
const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const scaleSmallerButtonElement = document.querySelector('.scale__control--smaller');
const scaleBiggerButtonElement = document.querySelector('.scale__control--bigger');
const scaleInputElement = document.querySelector('.scale__control--value');
const scaleElement = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  scaleElement.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}%`;
};

const resetScale = () => scaleImage(DEFAULT_VALUE_SCALE);

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  let newValue = currentValue + STEP_SCALE;
  if(newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  let newValue = currentValue - STEP_SCALE;
  if(newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

scaleBiggerButtonElement.addEventListener('click', onBiggerButtonClick);
scaleSmallerButtonElement.addEventListener('click', onSmallerButtonClick);

export {resetScale};

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const BIG_SCALE = 100;
const DEFAULT_SCALE = 100;
const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
const buttonScaleBigger = document.querySelector('.scale__control--bigger');
const fieldScale = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview');

const scaleImage = (newScaleValue) => {
  image.style.transform = `scale(${newScaleValue / 100})`;
  fieldScale.value = `${newScaleValue}%`;
};

const onSmallerButtonClick = () => {
  const newScaleValue = parseInt(fieldScale.value, 10) - SCALE_STEP;
  if (newScaleValue >= MIN_SCALE){
    scaleImage(newScaleValue);
  }
};

const onBiggerButtonClick = () => {
  const newScaleValue = parseInt(fieldScale.value, 10) + SCALE_STEP;
  if (newScaleValue <= BIG_SCALE) {
    scaleImage(newScaleValue);
  }
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

buttonScaleSmaller.addEventListener('click', onSmallerButtonClick);
buttonScaleBigger.addEventListener('click', onBiggerButtonClick);

export {resetScale};

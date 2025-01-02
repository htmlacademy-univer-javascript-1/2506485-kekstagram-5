const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    max: 100,
    min: 0,
    step: 1,
    unit: ''
  },
  {
    name: 'chrome',
    style: 'grayscale',
    max: 1,
    min: 0,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    max: 1,
    min: 0,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    max: 100,
    min: 0,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    max: 3,
    min: 0,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    max: 3,
    min: 1,
    step: 0.1,
    unit: '',
  }
];
const DEFAULT_EFFECT = EFFECTS[0];

const slider = document.querySelector('.effect-level__slider');
const img = document.querySelector('.img-upload__preview');
const effects = document.querySelector('.effects');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const effectsLevel = document.querySelector('.effect-level__value');
let chosenEffect = DEFAULT_EFFECT;

const isDefault = () => DEFAULT_EFFECT === chosenEffect;
const showSlider = () => sliderContainer.classList.remove('hidden');
const hideSlider = () => sliderContainer.classList.add('hidden');

const initSlider = () => {
  noUiSlider.create(slider, {
    range: {
      min: DEFAULT_EFFECT.min,
      max: DEFAULT_EFFECT.max,
    },
    start: DEFAULT_EFFECT.max,
    step: DEFAULT_EFFECT.step,
    connect: 'lower',
  });
};

const updateSlider = () => {
  slider.noUiSlider.updateOptions({
    range:{
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    start: chosenEffect.max,
    step: chosenEffect.step,
  });

  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const onEffectsChange = (evt) => {
  if(!evt.target.classList.contains('effects__radio')){
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  img.className = `effects__preview--${chosenEffect.name}`;
  img.width = 600;
  img.height = 600;
  updateSlider();
};

const onSliderUpdate = () => {
  const sliderValue = slider.noUiSlider.get();
  img.style.filter = isDefault() ? DEFAULT_EFFECT.style : `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  effectsLevel.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

const setEffectsSlider = () => {
  initSlider();
  hideSlider();
  effects.addEventListener('change', onEffectsChange);
  slider.noUiSlider.on('update', onSliderUpdate);
};
export {resetEffects, setEffectsSlider};

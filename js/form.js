import { resetScale } from './scale.js';
import {resetEffects, setEffectsSlider} from './effect.js';
const fileInput = document.querySelector('.img-upload__input');
const body = document.querySelector('body');
const overlay = document.querySelector('.img-upload__overlay');
const buttonCloseForm = document.querySelector('.img-upload__cancel');
const hashtagsField = document.querySelector('.text__hashtags');
const comments = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const hashtagRegex = /^#[a-zа-яё0-9]{1,19}$/i;
const messageError = {
  errorCountHashtag: 'превышено количество хэш-тегов',
  errorNotValidateHastag: 'введён невалидный хэш-тег',
  errorUniqueHashtag: 'хэш-теги повторяются'};

const onDocumentKeydown = (evt) =>{
  if (evt.key === 'Escape'){
    evt.preventDefault();
    closeForm();
  }
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

const normalizationHashtag = (hashtags) => hashtags.trim().split(' ').filter((tag) => Boolean(tag.length));

const validateHashtags = (hashtags) => {
  const hashtagArray = normalizationHashtag(hashtags);
  return hashtagArray.every((tag) => hashtagRegex.test(tag));
};

const validateHashtagsCount = (hashtags) =>{
  const hashtagArray = normalizationHashtag(hashtags);
  return hashtagArray.length <= 5;
};

const validateHashtagsUnique = (hashtags) =>{
  const hashtagArray = normalizationHashtag(hashtags).map((tag) => tag.toLowerCase());
  return hashtagArray.length === new Set(hashtagArray).size;
};

pristine.addValidator(hashtagsField, validateHashtagsCount, messageError.errorCountHashtag, 3, true);
pristine.addValidator(hashtagsField, validateHashtags, messageError.errorNotValidateHastag, 2, true);
pristine.addValidator(hashtagsField, validateHashtagsUnique, messageError.errorUniqueHashtag, 1, true);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

fileInput.addEventListener('change',() =>{
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
});

buttonCloseForm.addEventListener('click', () => {
  closeForm();
});

hashtagsField.addEventListener('keydown', (evt) =>{
  if (evt.key === 'Escape'){
    evt.stopPropagation();
  }
});

comments.addEventListener('keydown', (evt) =>{
  if (evt.key === 'Escape'){
    evt.stopPropagation();
  }
});

setEffectsSlider();

function closeForm (){
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  form.reset();
  pristine.reset();
  document.removeEventListener('keydown', onDocumentKeydown);
  resetScale();
  resetEffects();
}

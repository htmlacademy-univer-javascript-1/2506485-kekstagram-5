import { resetScale } from './scale.js';
import {resetEffects, setEffectsSlider} from './effect.js';
import {sendForm} from './api.js';
import { isShowMessage } from './message.js';

const fileInput = document.querySelector('.img-upload__input');
const body = document.querySelector('body');
const overlay = document.querySelector('.img-upload__overlay');
const buttonCloseForm = document.querySelector('.img-upload__cancel');
const submitButton = document.querySelector('.img-upload__submit');
const hashtagsField = document.querySelector('.text__hashtags');
const comments = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const previewPhoto = form.querySelector('.img-upload__preview img');
const effectPreview = form.querySelectorAll('.effects__preview');
const hashtagRegex = /^#[a-zа-яё0-9]{1,19}$/i;

const messageError = {
  errorCountHashtag: 'превышено количество хэш-тегов',
  errorNotValidateHastag: 'введён невалидный хэш-тег',
  errorUniqueHashtag: 'хэш-теги повторяются'};

const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((it) => fileName.endsWith(it));
};

const onDocumentKeydown = (evt) =>{
  if (evt.key === 'Escape' && !isShowMessage){
    evt.preventDefault();
    closeForm();
  }
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

const onFileInputChange = () => {
  const file = fileInput.files[0];

  if (file && isValidType(file)){
    previewPhoto.src = URL.createObjectURL(file);
    effectPreview.forEach((preview) => {
      preview.style.backgroundImage = `url('${previewPhoto.src}')`;
    });
    previewPhoto.width = 600;
    previewPhoto.height = 600;
  }
};

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


fileInput.addEventListener('change',() =>{
  onFileInputChange();
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

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'СОХРАНЯЮ...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'ОПУБЛИКОВАТЬ';
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid){
    const formDate = new FormData(evt.target);
    blockSubmitButton();
    sendForm(formDate, closeForm);
    unblockSubmitButton();
  }
});

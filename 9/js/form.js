const fileInput = document.querySelector('.img-upload__input');
const body = document.querySelector('body');
const overlay = document.querySelector('.img-upload__overlay');
const buttonCloseForm = document.querySelector('.img-upload__cancel');
const hashtagsField = document.querySelector('.text__hashtags');
const comments = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const hashtagRegex = /#[a-zа-яё0-9]{1,19}$/i;
let messageError = '';

const onDocumentKeydown = (evt) =>{
  if (evt.key === 'Escape'){
    evt.preventDefault();
    closeForm();
  }
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
});

const validateHashtags = (hashtags) => {
  let isValid = true;
  const hashtagArray = hashtags.split(' ');
  if (hashtagArray.length > 5) {
    isValid = false;
    messageError = 'превышено количество хэш-тегов';
  }
  for (const hashtag in hashtags){
    if (!hashtagRegex.test(hashtag) || hashtag.length > 20){
      isValid = false;
      messageError = 'введён невалидный хэш-тег';
    }
    if (hashtags.indexOf(hashtag) !== hashtags.lastIndexOf(hashtag)) {
      isValid = false;
      messageError = 'хэш-теги повторяются';
    }
  }
  return isValid;
};

pristine.addValidator(hashtagsField, validateHashtags, messageError);

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

function closeForm (){
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  fileInput.value = '';
  hashtagsField.value = '';
  comments.value = '';
  messageError = '';

  document.removeEventListener('keydown', onDocumentKeydown);
}

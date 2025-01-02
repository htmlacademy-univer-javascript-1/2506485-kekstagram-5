import { renderPictures } from './picture.js';
import { showAlert } from './util.js';
import { showSuccessMessage } from './message.js';
import { showErrorMessage } from './message.js';
import { putFilter } from './filter.js';
import { getfilteredPictures } from './filter.js';
import { debounce } from './util.js';

const loadPictures = () =>{
  fetch('https://29.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((pictures) => {
      renderPictures(getfilteredPictures(pictures));
      putFilter(pictures, debounce(renderPictures));
    })
    .catch(() => showAlert('Не удалось загрузить данные'));
};

const sendForm = (form, onSuccess) =>{
  fetch(
    'https://29.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      body: form,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        showSuccessMessage();
      } else{
        throw new Error();
      }
    })
    .catch(() => showErrorMessage());
};

export {loadPictures, sendForm};

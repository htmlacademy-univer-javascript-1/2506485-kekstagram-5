import { renderingPictures } from './picture.js';
import { showAlert } from './util.js';
import { showSuccessMessage } from './message.js';
import { showErrorMessage } from './message.js';

const loadPictures = () =>{
    fetch('https://29.javascript.htmlacademy.pro/kekstagram/data')
        .then((response) => response.json())
        .then((ob) => {
            renderingPictures(ob);
        })
        .catch(() => showAlert('Не удалось загрузить данные'));
}

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
        }
        else{
            throw new Error();
        }
    })
    .catch(() => showErrorMessage());
};

export {loadPictures, sendForm};

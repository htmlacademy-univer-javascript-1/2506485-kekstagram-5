const body = document.querySelector('body');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

const hideMessage = () => {
    const messageElement = document.querySelector('.success') || document.querySelector('.error');
    messageElement.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    body.removeEventListener('click', onBodyClick);
}

const showMessage = (messageElement, closeButtonClass) => {
    body.append(messageElement);
    document.addEventListener('keydown', onDocumentKeydown);
    body.addEventListener('click', onBodyClick);
    messageElement.querySelector(closeButtonClass).addEventListener('click', hideMessage);
}

const onDocumentKeydown = (evt) => {
    if (evt.key === 'Escape'){
        evt.preventDefault();
        hideMessage();
    }
}

const onBodyClick = (evt) =>{
    if(evt.target.closest('.success_inner') || evt.target.closest('.success_inner')){
        return;
    }
    hideMessage();
}

const showErrorMessage = () => {
    showMessage(errorMessage, '.error__button');
}

const showSuccessMessage = () => {
    showMessage(successMessage, '.success__button');
}

export {showErrorMessage, showSuccessMessage};

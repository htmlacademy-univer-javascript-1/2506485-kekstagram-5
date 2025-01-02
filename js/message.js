const body = document.querySelector('body');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
let isShowMessage = false;

const hideMessage = () => {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  isShowMessage = false;
  document.removeEventListener('keydown', onDocumentKeydown);
  body.removeEventListener('click', onBodyClick);
};

function onDocumentKeydown (evt){
  if (evt.key === 'Escape'){
    evt.preventDefault();
    hideMessage();
  }
}

function onBodyClick (evt) {
  if(evt.target.closest('.success_inner') || evt.target.closest('.success_inner')){
    return;
  }
  hideMessage();
}

const showMessage = (messageElement, closeButtonClass) => {
  body.append(messageElement);
  isShowMessage = true;
  document.addEventListener('keydown', onDocumentKeydown);
  body.addEventListener('click', onBodyClick);
  messageElement.querySelector(closeButtonClass).addEventListener('click', hideMessage);
};

const showErrorMessage = () => {
  showMessage(errorMessage, '.error__button');
};

const showSuccessMessage = () => {
  showMessage(successMessage, '.success__button');
};

export {showErrorMessage, showSuccessMessage, isShowMessage};

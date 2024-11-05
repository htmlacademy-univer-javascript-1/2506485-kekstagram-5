import {similarDescriptionPhoto} from './data';
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const similarListElement = document.querySelector('.pictures');
const similarPictures = similarDescriptionPhoto();
similarPictures.forEach(() => {
  const elementPictures = templatePicture.cloneNode(true);
  similarListElement.appendChild(elementPictures);
});

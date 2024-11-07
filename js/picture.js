import {similarDescriptionPhoto} from './data';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const similarListElement = document.querySelector('.pictures');
const similarPictures = similarDescriptionPhoto();
const similarListFragment = document.createDocumentFragment();

similarPictures.forEach((picture) => {
  const elementPictures = templatePicture.cloneNode(true);
  elementPictures.querySelector('.picture__img').scr = picture.url;
  elementPictures.querySelector('.picture__img').alt = picture.description;
  elementPictures.querySelector('.picture__likes').textContent = picture.likes;
  elementPictures.querySelector('.picture__comments').textContent = picture.comments.length;
  similarListFragment.appendChild(elementPictures);
});
similarListElement.appendChild(similarListFragment);

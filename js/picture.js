const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const similarListElement = document.querySelector('.pictures');
const similarListFragment = document.createDocumentFragment();

const renderingPictures = (pictures) =>{
  similarListElement.querySelectorAll('.picture').forEach((oldPicture) => (oldPicture.remove()));
  pictures.forEach((picture) => {
    const elementPictures = templatePicture.cloneNode(true);
    elementPictures.querySelector('.picture__img').src = picture.url;
    elementPictures.querySelector('.picture__img').alt = picture.description;
    elementPictures.querySelector('.picture__likes').textContent = picture.likes;
    elementPictures.querySelector('.picture__comments').textContent = picture.comments.length;
    elementPictures.querySelector('.picture__comments').dataset.array = JSON.stringify(picture.comments);
    similarListFragment.appendChild(elementPictures);
})
  similarListElement.appendChild(similarListFragment);
};
export {renderingPictures};

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const similarListElement = document.querySelector('.pictures');
const similarListFragment = document.createDocumentFragment();

const renderPictures = (pictures) =>{
  similarListElement.querySelectorAll('.picture').forEach((oldPicture) => (oldPicture.remove()));
  pictures.forEach((picture) => {
    const elementPictures = templatePicture.cloneNode(true);
    const img = elementPictures.querySelector('.picture__img');
    const comments = elementPictures.querySelector('.picture__comments');
    img.src = picture.url;
    img.alt = picture.description;
    elementPictures.querySelector('.picture__likes').textContent = picture.likes;
    comments.textContent = picture.comments.length;
    comments.dataset.array = JSON.stringify(picture.comments);
    similarListFragment.appendChild(elementPictures);
  });
  similarListElement.appendChild(similarListFragment);
};
export {renderPictures};

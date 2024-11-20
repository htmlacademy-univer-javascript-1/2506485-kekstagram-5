import './picture.js';
const userFullPhoto = document.querySelector('.big-picture');
const similarListElement = document.querySelector('.pictures');
const closeButton = userFullPhoto.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const commentContainer = userFullPhoto.querySelector('.social__comments');
const fullPicturesImg = userFullPhoto.querySelector('.big-picture__img img');
const fullPicturesLikes = userFullPhoto.querySelector('.likes-count');
const fullPicturesCommentsCount = userFullPhoto.querySelector('.comments-count');
const fullPicturesDescription = userFullPhoto.querySelector('.social__caption')

const addComments = (array) => {
  for (let i = 0; i < array.length; i++){
    const element = document.createElement('li');
    element.classList.add('social__comment');
    const image = document.createElement('img');
    image.classList.add('social__picture');
    image.src = array[i].avatar;
    image.alt = array[i].name;
    image.width = 35;
    image.height = 35;
    const text = document.createElement('p');
    text.classList.add('social__text');
    text.textContent = array[i].message;
    element.appendChild(image);
    element.appendChild(text);
    commentContainer.appendChild(element);
  }
};

similarListElement.addEventListener('click', (evt) => {
  userFullPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  const target = evt.target.closest('.picture');
  const imageSrc = target.querySelector('.picture__img').src;
  const likes = target.querySelector('.picture__likes').textContent;
  fullPicturesImg.src = imageSrc;
  fullPicturesLikes.textContent = likes;
  fullPicturesCommentsCount.textContent = target.querySelector('.picture__comments').textContent;
  fullPicturesDescription.textContent = target.querySelector('.picture__img').alt;
  const array = JSON.parse(target.querySelector('.picture__comments').dataset.array);
  commentContainer.innerHTML = '';
  addComments(array);
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape'){
    evt.preventDefault();
    userFullPhoto.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

closeButton.addEventListener('click', () => {
  userFullPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
});

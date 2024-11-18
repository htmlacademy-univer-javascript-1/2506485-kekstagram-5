import './picture.js';
const userFullPhoto = document.querySelector('.big-picture');
const similarListElement = document.querySelector('.pictures');
const closeButton = userFullPhoto.querySelector('.big-picture__cancel');
const body = document.querySelector('.body');

similarListElement.addEventListener('click', (evt) => {
  userFullPhoto.classList.remove('hidden');
  body.classList.add('.modal-open');
  const target = evt.target.closest('.picture');
  const imageSrc = target.querySelector('.picture__img').src;
  const likes = target.querySelector('.picture__likes').textContent;
  userFullPhoto.querySelector('.social__comment-count').classList.add('hidden');
  userFullPhoto.querySelector('.comments-loader').classList.add('hidden');
  userFullPhoto.querySelector('.big-picture__img img').src = imageSrc;
  userFullPhoto.querySelector('.likes-count').textContent = likes;
  userFullPhoto.querySelector('.comments-count').textContent = target.querySelector('.picture__comments').textContent;
  userFullPhoto.querySelector('.social__caption').textContent = target.querySelector('.picture__img').alt;
  const array = JSON.parse(target.dataset.myArray);
  const commentContainer = userFullPhoto.querySelector('.social__comments');
  commentContainer.innerHTML = '';
  array.forEach((comment) => {
    const element = document.createElement('li');
    element.classList.add('social__comment');
    const image = document.createElement('img');
    image.classList.add('social__picture');
    image.src = comment.avatar;
    image.alt = comment.name;
    image.width = 35;
    image.height = 35;
    const text = document.createElement('p');
    text.classList.add('social__text');
    text.textContent = comment.message;
    element.appendChild(image);
    element.appendChild(text);
    commentContainer.appendChild(element);
  });
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape'){
    evt.preventDefault();
    userFullPhoto.classList.add('hidden');
    body.classList.remove('.modal-open');
  }
});

closeButton.addEventListener('click', () => {
  userFullPhoto.classList.add('hidden');
  body.classList.remove('.modal-open');
});

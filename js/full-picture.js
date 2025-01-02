const COMMENTS_PER_PORTION = 5;

const userFullPhoto = document.querySelector('.big-picture');
const pictureElementList = document.querySelector('.pictures');
const closeButton = userFullPhoto.querySelector('.big-picture__cancel');
const body = document.querySelector('body');
const commentContainer = userFullPhoto.querySelector('.social__comments');
const fullPicturesImg = userFullPhoto.querySelector('.big-picture__img img');
const fullPicturesLikes = userFullPhoto.querySelector('.likes-count');
const fullPicturesCommentsCount = userFullPhoto.querySelector('.comments-count');
const fullPicturesDescription = userFullPhoto.querySelector('.social__caption');
const addCommentsButton = document.querySelector('.social__comments-loader');
const commentsCount = userFullPhoto.querySelector('.social__comment-count');

const renderComments = (arrayComments, i, countClickOnButton) =>{
  const element = document.createElement('li');
  element.classList.add('social__comment');
  const image = document.createElement('img');
  image.classList.add('social__picture');
  image.src = arrayComments[countClickOnButton * COMMENTS_PER_PORTION + i].avatar;
  image.alt = arrayComments[countClickOnButton * COMMENTS_PER_PORTION + i].name;
  image.width = 35;
  image.height = 35;
  const text = document.createElement('p');
  text.classList.add('social__text');
  text.textContent = arrayComments[countClickOnButton * 5 + i].message;
  element.appendChild(image);
  element.appendChild(text);
  commentContainer.appendChild(element);
};

const addComments = (arrayComments, countClickOnButton) => {
  const length = arrayComments.length;
  for (let i = 0; i < 5; i++){
    if (length > (countClickOnButton * COMMENTS_PER_PORTION + i)){
      renderComments(arrayComments, i, countClickOnButton);
    }
    const socialComments = document.querySelectorAll('.social__comment');
    commentsCount.textContent = `${socialComments.length} из ${length} комментариев`;
    if (length === socialComments.length){
      addCommentsButton.classList.add('hidden');
    }
  }
};

const renderFullFoto = (target) => {
  const image = target.querySelector('.picture__img');
  const likes = target.querySelector('.picture__likes').textContent;
  const comment = target.querySelector('.picture__comments');
  fullPicturesImg.src = image.src;
  fullPicturesLikes.textContent = likes;
  fullPicturesCommentsCount.textContent = comment.textContent;
  fullPicturesDescription.textContent = image.alt;
  const arrayComments = JSON.parse(comment.dataset.array);
  commentContainer.innerHTML = '';
  let countClickOnButton = 0;
  addComments(arrayComments, countClickOnButton);
  addCommentsButton.addEventListener('click', () => {
    countClickOnButton += 1;
    addComments(arrayComments, countClickOnButton);
  });
};

const onDocumentKeydown = (evt) =>{
  if (evt.key === 'Escape'){
    evt.preventDefault();
    closeFullFoto();
  }
};

function closeFullFoto (){
  userFullPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  addCommentsButton.classList.remove('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

pictureElementList.addEventListener('click', (evt) =>{
  const picture = evt.target.closest('.picture');
  if (picture){
    renderFullFoto(picture);
    userFullPhoto.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
  }
});

closeButton.addEventListener('click', () => {
  closeFullFoto();
});

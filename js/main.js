const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const DESCRIPTION = [
  'Очень красивое небо',
  'Жизнь - это суп и ты в ней вилка',
  'Я кот по жизни'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME = [
  'Артём',
  'Ксения',
  'Влад',
  'Алина',
  'Вера',
  'Регина'
];
const idCommentsArray = [];
const idArray = [];
const numbersPhotoArray = [];
const getRandomUniqueNumberGenerate = (a, b, usedArray) => {
  const generator = () => {
    const newNumber = getRandomInt(a, b);
    if (usedArray.includes(newNumber)){
      return generator ();
    }
    usedArray.push(newNumber);
    return newNumber;
  };

  return generator();
};

const descriptionPhotoCount = 25;

const createDescriptionPhoto = () =>{
  const comments = [];
  for (let i = 0; i < getRandomInt(0, 30); i++){
    comments.push({
      id: getRandomUniqueNumberGenerate(1, 10000, idCommentsArray),
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: MESSAGE[getRandomInt(0, MESSAGE.length - 1)],
      name: NAME[getRandomInt(0, NAME.length - 1)],
    });
  }
  return {
    id: getRandomUniqueNumberGenerate(1, descriptionPhotoCount, idArray),
    url: `photos/${getRandomUniqueNumberGenerate(1, descriptionPhotoCount, numbersPhotoArray)}.jpg`,
    description: DESCRIPTION[getRandomInt(0, DESCRIPTION.length - 1)],
    likes: getRandomInt(15, 200),
    comments: comments,
  };
};

const similarDescriptionPhoto = () => Array.from({length: descriptionPhotoCount}, createDescriptionPhoto);
similarDescriptionPhoto();

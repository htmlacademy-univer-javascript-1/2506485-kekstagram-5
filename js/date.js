import {GetRandomInt, GetRandomUniqueNumberGenerate} from './util.js';

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

const CreateDescriptionPhoto = () =>{
  const comments = [];
  for (let i = 0; i < GetRandomInt(0, 30); i++){
    comments.push({
      id: GetRandomUniqueNumberGenerate(1, 10000, idCommentsArray),
      avatar: `img/avatar-${GetRandomInt(1, 6)}.svg`,
      message: MESSAGE[GetRandomInt(0, MESSAGE.length - 1)],
      name: NAME[GetRandomInt(0, NAME.length - 1)],
    });
  }
  return {
    id: GetRandomUniqueNumberGenerate(1, 25, idArray),
    url: `photos/${GetRandomUniqueNumberGenerate(1, 25, numbersPhotoArray)}.jpg`,
    description: DESCRIPTION[GetRandomInt(0, DESCRIPTION.length - 1)],
    likes: GetRandomInt(15, 200),
    comments: comments,
  };
};

const CreateDescriptionPhotos = () => Array.from({length: 25}, CreateDescriptionPhoto);
export {CreateDescriptionPhotos};

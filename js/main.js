const GetRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.min(Math.abs(a), Math.abs(b)));
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

const GetRandomUniqueNumberGenerate = (a, b) => {
  const usedArray = [];

  const generator = () => {
    const newNumber = GetRandomInt(a, b);
    if (usedArray.includes(newNumber)){
      return generator ();
    }
    usedArray.push(newNumber);
    return newNumber;
  };

  return generator();
};

const GreatDescriptinPhoto = () => ({
  id: GetRandomUniqueNumberGenerate(1, 25),
  url: `photos/${GetRandomUniqueNumberGenerate(1, 25)}.jpg`,
  description: DESCRIPTION[GetRandomUniqueNumberGenerate(0, DESCRIPTION.length - 1)],
  likes: GetRandomUniqueNumberGenerate(15, 200),
  comments: {
    id: Math.round(Math.random() * 1000),
    avatar: `img/avatar-${GetRandomUniqueNumberGenerate(1, 6)}.svg`,
    message: MESSAGE[GetRandomUniqueNumberGenerate(0, MESSAGE.length - 1)],
    name: NAME[GetRandomUniqueNumberGenerate(0, NAME.length - 1)],
  }
});
const similarDescriptionPhoto = Array.from({length: 25}, GreatDescriptinPhoto);


console.log(similarDescriptionPhoto);

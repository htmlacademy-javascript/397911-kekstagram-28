const AUTHOR_NAMES = [
  'Ivan',
  'Anna',
  'Irina',
  'Andrei',
  'Sergey',
  'Anton',
  'Karina',
  'Ekaterina',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Это просто красиво',
  'Хороший был день',
  'Лучшие моменты',
  'Живи и радуйся',
  'Каникулы',
  'Будь добрым',
  'Мир прекрасен',
  'Мир и свободу',
];

const PHOTO_COUNT = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let id = 0;
  const getNextId = () => {
    id++;
    return id;
  };
  return getNextId;
};

const getPhotoId = createIdGenerator();
const getCommentId = createIdGenerator();

const createCommentMessage = () => getRandomArrayElement(MESSAGES);

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: Array.from({length: getRandomInteger(1,2)}, createCommentMessage).join(' '),
  name: getRandomArrayElement(AUTHOR_NAMES),
});

const createPhoto = () => {
  const id = getPhotoId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15,200),
    comments: Array.from({length: getRandomInteger(1,7)}, createComment),
  };
};

const photos = Array.from({length: PHOTO_COUNT}, createPhoto);

// eslint-disable-next-line no-console
console.log(photos);


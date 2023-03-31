import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';

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
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 115;
const COMMENT_COUNT = 7;

const getPhotoId = createIdGenerator();
const getCommentId = createIdGenerator();

const createCommentMessage = () => getRandomArrayElement(MESSAGES);

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: Array.from({length: getRandomInteger(1,2)}, createCommentMessage).join(' '),
  name: getRandomArrayElement(AUTHOR_NAMES),
});

const createPhoto = () => {
  const id = getPhotoId();
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(LIKE_MIN_COUNT,LIKE_MAX_COUNT),
    comments: Array.from({length: getRandomInteger(1,COMMENT_COUNT)}, createComment),
  };
};

const createPhotos = () => Array.from({length: PHOTO_COUNT}, createPhoto);

export { createPhotos };

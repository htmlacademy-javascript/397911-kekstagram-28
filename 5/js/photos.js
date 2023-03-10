const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

export const insertPhotos = (photos) => {
  const pictures = document.createDocumentFragment();

  const insertPhoto = ({ url, likes, comments }) => {
    const picture = pictureTemplate.cloneNode(true);

    const image = picture.querySelector('.picture__img');
    image.src = url;

    const likesContainer = picture.querySelector('.picture__likes');
    likesContainer.textContent = likes;

    const commentsContainer = picture.querySelector('.picture__comments');
    commentsContainer.textContent = comments.length;

    pictures.append(picture);
  };

  photos.forEach(insertPhoto);

  picturesContainer.appendChild(pictures);
};

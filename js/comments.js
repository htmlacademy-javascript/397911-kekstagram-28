const commentTemplate = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');
const socialComments = document.querySelector('.social__comments');

const createCommentElement = ({avatar, message, name}) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

export const renderComments = (comments) => {
  socialComments.innerHTML = '';

  const commentElements = comments.map((comment) => createCommentElement(comment));
  socialComments.append(...commentElements);
};

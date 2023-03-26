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
  let lastRenderedCommentsCount = 0;
  const PAGE_SIZE = 5;
  const commentsLoader = document.querySelector('.comments-loader');
  const commentsCount = document.querySelector('.comments-count');
  const commentsShown = document.querySelector('.comments-shown');

  commentsLoader.classList.remove('hidden');
  socialComments.innerHTML = '';
  commentsCount.textContent = comments.length;

  const showNextComments = () => {
    const start = lastRenderedCommentsCount;
    let end = lastRenderedCommentsCount + PAGE_SIZE;
    if (end > comments.length) {
      end = comments.length;
    }

    const commentElements = comments.slice(start, end).map((comment) => createCommentElement(comment));
    socialComments.append(...commentElements);

    lastRenderedCommentsCount = end;

    if (lastRenderedCommentsCount >= comments.length) {
      commentsLoader.classList.add('hidden');
    }
    commentsShown.textContent = lastRenderedCommentsCount;
  };

  showNextComments();

  commentsLoader.addEventListener('click', showNextComments);
};

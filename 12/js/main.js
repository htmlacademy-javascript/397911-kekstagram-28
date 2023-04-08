import {setOnFormSubmit, closePreviewModal} from './form.js';
import {insertPhotos} from './photos.js';
import './scale.js';
import './effect.js';
import {showAlert, debounce} from './util.js';
import {getData, sendData} from './server-data.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';
import {init, getSortedPictures} from './filter.js';
import './avatar.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData (data);
    closePreviewModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const createPhotos = await getData();
  insertPhotos(createPhotos);
  const debouncedRenderThumbnails = debounce(insertPhotos);
  init(createPhotos, debouncedRenderThumbnails);
  insertPhotos(getSortedPictures());
} catch (err) {
  showAlert(err.message);
}

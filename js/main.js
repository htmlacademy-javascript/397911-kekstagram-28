import { createPhotos } from './data.js';
import { insertPhotos } from './photos.js';
import './form.js';
import './scale.js';
import './effect.js';

const photos = createPhotos();
insertPhotos(photos);

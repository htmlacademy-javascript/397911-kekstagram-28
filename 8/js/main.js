import { createPhotos } from './data.js';
import { insertPhotos } from './photos.js';
import './form.js';

const photos = createPhotos();
insertPhotos(photos);

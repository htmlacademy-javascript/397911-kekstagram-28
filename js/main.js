import { createPhotos } from './data.js';
import { insertPhotos } from './photos.js';

const photos = createPhotos();
insertPhotos(photos);

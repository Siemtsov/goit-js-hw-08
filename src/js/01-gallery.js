// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const list = document.querySelector('.gallery');
const markup = arr => {
  return arr
    .map(
      ({ preview, original, description }) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${preview}">
                <img class="gallery__image" src="${original}" alt="${description}" loading="lazy"/>
            </a>
        </li>`
    )
    .join('');
};
list.insertAdjacentHTML('afterbegin', markup(galleryItems));
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  close: false,
  enableKeyboard: true,
});
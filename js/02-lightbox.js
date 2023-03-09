import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createGalleryMarkup (galleryItems) {
  return galleryItems
  .map(({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
    <img 
    class="gallery__image" 
    src="${preview}" 
    alt="${description}" />
    </a>`
  )
  .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay:	250,
  enableKeyboard:	true,
  });

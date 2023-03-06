import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);
galleryEl.addEventListener('click', handleItemClick);

function createGalleryMarkup (galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) =>
			`<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
      </a>
      </div>`
		)
		.join('');
}

function handleItemClick(event) {
	event.preventDefault();

	if (event.target.nodeName !== 'IMG') {
    return;
  }

	const instance = basicLightbox.create(
		`<img src="${event.target.dataset.source}">`,
		{
			onShow: () => document.addEventListener('keydown', handleInstanceClose),
			onClose: () => document.removeEventListener('keydown', handleInstanceClose),
		}
	);

	instance.show();

	function handleInstanceClose(event) {
		if (event.code === 'Escape') 
    instance.close();
	};
}


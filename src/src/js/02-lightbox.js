import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.innerHTML = renderGallery(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function renderGallery(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                 <a class="gallery__link" href="${original}">
                   <img class="gallery__image" src="${preview}" alt="${description}" />
               </a>
            </li>`;
    })
    .join("");
}

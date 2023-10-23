import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulRef = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `<li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" 
              src="${item.preview}" 
              data-source="${item.original}" 
              alt="${item.description}"
            />
          </a>
        </li>`
    )
    .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);

ulRef.innerHTML = addGalleryMarkup;

ulRef.addEventListener("click", onImageClick);

function onImageClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  e.preventDefault();

  const instance = basicLightbox.create(
    `
  <img src="${e.target.dataset.source}" width="800" height="600">
  `,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModal); // додавання слухача подій
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModal); // знімання слухача подій
      },
    }
  );
  instance.show();

  function closeModal(e) {
    if (e.key === "Escape") {
      instance.close();
    }
  }
}

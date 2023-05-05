
import { galleryItems } from "./gallery-items.js";
// Change code below this line


const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = galleryItems
	.map((item) => {
		return `<li>
    <a class="gallery__item" href="${item.original}">
    <img 
    class="gallery__image" 
    src="${item.preview}" 
    alt="${item.description}" 
    />
  </a></li>`;
	})
	.join("");

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

const imageFromLightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 350,
	showCounter: true,
	scrollbarWidth: 20,
});
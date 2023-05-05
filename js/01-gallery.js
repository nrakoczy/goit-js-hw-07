import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
let galleryView;

for (const item of galleryItems) {
	const imageEl = document.createElement("li");
	imageEl.classList.add("gallery__item");
	imageEl.insertAdjacentHTML(
		"afterbegin",
		`
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
    </a>
    `,
	);
	galleryEl.append(imageEl);
}

const imageContainer = (event) => {
	if (event.target.nodeName !== "IMG") {
		return;
	} else {
		event.preventDefault();
		galleryView = basicLightbox.create(
			`<img src="${event.target.dataset.source}">`,
		);
		galleryView.show();
	}
};

const imageSource = (event) => {
	if (event.key === "Escape" || event.keyCode === 27) {
		galleryView.close();
	}
};

galleryEl.addEventListener("click", imageContainer);
document.addEventListener("keydown", imageSource);




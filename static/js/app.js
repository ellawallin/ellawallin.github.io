import PhotoSwipe from "./photoswipe/photoswipe.esm.min.js";
import PhotoSwipeLightbox from "./photoswipe/photoswipe-lightbox.esm.min.js";

function loadMasonry() {
  const stack = document.querySelector(".stack--sketch");

  if (stack) {
    const masonry = new Masonry(stack, {
      itemSelector: ".item--sketch",
      columnWidth: ".grid-sizer",
      gutter: ".gutter-sizer"
    });

    // layout after each image loads
    masonry.on("layoutComplete", () => {
      stack.style.opacity = 1;
    });

    masonry.layout();
  }
}

function loadPhotoSwipe() {
  const lightbox = new PhotoSwipeLightbox({
    gallery: ".stack--sketch",
    children: ".item--sketch",
    pswpModule: PhotoSwipe,
    loop: false
  });

  lightbox.init();
}

window.onload = () => {
  loadMasonry();
  loadPhotoSwipe();
};

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
  const icClose = '<svg aria-hidden="true" class="pswp__icn" width="32" height="32" viewBox="0 0 32 32"><path d="M22.7042 6.7041C23.4202 5.98814 24.5801 5.98814 25.296 6.7041C26.0119 7.42007 26.0119 8.57997 25.296 9.2959L18.5919 16L25.296 22.7041C26.0119 23.4201 26.0119 24.58 25.296 25.2959C24.5801 26.0118 23.4202 26.0118 22.7042 25.2959L16.0001 18.5918L9.29602 25.2959C8.58009 26.0118 7.42019 26.0118 6.70422 25.2959C5.98826 24.5799 5.98826 23.4201 6.70422 22.7041L13.4083 16L6.70422 9.2959C5.98826 8.57994 5.98826 7.42006 6.70422 6.7041C7.42018 5.98814 8.58006 5.98814 9.29602 6.7041L16.0001 13.4082L22.7042 6.7041Z" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const icLeft = '<svg aria-hidden="true" class="pswp__icn" width="60" height="60" viewBox="0 0 60 60"><path d="M18.7042 20.7041C19.4202 19.9881 20.5801 19.9881 21.296 20.7041C22.0119 21.4201 22.0119 22.58 21.296 23.2959L14.5919 30L21.296 36.7041C22.0119 37.4201 22.0119 38.58 21.296 39.2959C20.5801 40.0118 19.4202 40.0118 18.7042 39.2959L10.7042 31.2959C9.98826 30.5799 9.98826 29.4201 10.7042 28.7041L18.7042 20.7041Z" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const lightbox = new PhotoSwipeLightbox({
    gallery: ".stack--sketch, .article--project",
    children: ".item--sketch, .figure__link",
    pswpModule: PhotoSwipe,
    loop: false,
    zoom: false,
    closeSVG: icClose,
    arrowPrevSVG: icLeft,
    arrowNextSVG: icLeft
  });

  lightbox.init();
}

window.onload = () => {
  loadMasonry();
  loadPhotoSwipe();
};

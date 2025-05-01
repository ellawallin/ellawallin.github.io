function loadMasonry() {
  var stack = document.querySelector(".stack--sketch");

  if (stack) {
    let masonry = new Masonry(stack, {
      itemSelector: ".item--sketch",
      columnWidth: ".grid-sizer",
      gutter: ".gutter-sizer"
    });

    // layout after each image loads
    masonry.on("layoutComplete", function() {
      stack.style.opacity = 1;
    });

    masonry.layout();
  }
}

function loadMediumZoom() {
  let zoom = mediumZoom(".zoomable", {
    margin: 0,
    scrollOffset: 40
  });
}

window.onload = () => {
  loadMasonry();
  loadMediumZoom();
};

window.onload = () => {
  var stack = document.querySelector(".stack--sketch");

  if (stack) {
    let masonry = new Masonry(stack, {
      itemSelector: ".item--sketch",
      columnWidth: ".grid-sizer",
      gutter: ".gutter-sizer"
    });

    // layout Masonry after each image loads
    imagesLoaded(stack).on("progress", function() {
      masonry.layout();
      console.log("img loaded")
    });
  }
};

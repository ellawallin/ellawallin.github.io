window.onload = () => {
  var stack = document.querySelector(".stack--art");

  if (stack) {
    let masonry = new Masonry(stack, {
      itemSelector: ".item--art",
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

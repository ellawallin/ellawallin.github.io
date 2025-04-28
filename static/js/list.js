window.onload = () => {
  var stack = document.querySelector(".stack--sketch");

  if (stack) {
    console.log("loading masonry ...");

    let masonry = new Masonry(stack, {
      itemSelector: ".item--sketch",
      columnWidth: ".grid-sizer",
      gutter: ".gutter-sizer"
    });

    // layout after each image loads
    masonry.on("layoutComplete", function() {
      console.log("masonry layout complete");

      stack.style.opacity = 1;
    });

    masonry.layout();
  }
};

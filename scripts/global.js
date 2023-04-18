let viewportHeight;
let maxPageHeight;

window.addEventListener("load", setPageScroll);
window.addEventListener("resize", setPageScroll, { passive: true });

function setPageScroll() {
  viewportHeight = document.body.clientHeight / 5;
  maxPageHeight = 0;
  document.querySelectorAll(".page").forEach((page) => {
    const pageHeight = page.clientHeight;
    if (maxPageHeight < pageHeight) {
      maxPageHeight = pageHeight;
    }
  });

  console.log(viewportHeight, maxPageHeight);
  if (maxPageHeight <= viewportHeight) {
    document.documentElement.style.scrollSnapType = "y proximity";
  } else {
    document.documentElement.style.scrollSnapType = "none";
  }
}

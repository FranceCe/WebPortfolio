const sliderElt = document.querySelector(".navbar ul .slider");

const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second-page");
const thirdPage = document.querySelector(".third-page");
const fourthPage = document.querySelector(".fourth-page");
const fifthPage = document.querySelector(".fifth-page");

let firstBreakPoint;
let secondBreakPoint;
let thirdBreakPoint;
let fourthBreakPoint;

let currentPage = 1;

const pages = {
  1: "first",
  2: "second",
  3: "third",
  4: "fourth",
  5: "fifth",
};
window.addEventListener("scroll", updateSlider, { passive: true });
window.addEventListener(
  "resize",
  () => {
    updateBreakPoints();
    updateSlider();
  },
  { passive: true }
);
window.addEventListener(
  "load",
  () => {
    updateBreakPoints();
    updateSlider();
  },
  { passive: true }
);

function updateBreakPoints() {
  let firstHeight = firstPage.clientHeight;
  firstBreakPoint = firstHeight / 2;
  let secondHeight = secondPage.clientHeight;
  secondBreakPoint = firstHeight + secondHeight / 2;
  let thirdHeight = thirdPage.clientHeight;
  thirdBreakPoint = firstHeight + secondHeight + thirdHeight / 2;
  let fourthHeight = fourthPage.clientHeight;
  fourthBreakPoint =
    firstHeight + secondHeight + thirdHeight + fourthHeight / 2;
}

function updateSlider() {
  const offset =
    window.pageYOffset ||
    window.scrollY ||
    window.scrollTop ||
    document.querySelector("html").scrollTop;

  if (offset >= fourthBreakPoint) {
    changeSliderPage(5);
  } else if (offset >= thirdBreakPoint) {
    changeSliderPage(4);
  } else if (offset >= secondBreakPoint) {
    changeSliderPage(3);
  } else if (offset >= firstBreakPoint) {
    changeSliderPage(2);
  } else {
    changeSliderPage(1);
  }
}

function changeSliderPage(n) {
  if (currentPage != n) {
    sliderElt.classList.remove(pages[currentPage]);
    sliderElt.classList.add(pages[n]);
    currentPage = n;
  }
}

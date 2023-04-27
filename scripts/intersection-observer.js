const optionsAppear = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const observer = new IntersectionObserver(makeElementsAppear, optionsAppear);

function makeElementsAppear(elements, observer) {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.remove("before-appear");
      observer.unobserve(element.target);
    }
  });
}

const transitionDelay = 100;
document.querySelectorAll(".icon-container").forEach((elt, i) => {
  elt.classList.add("before-appear");
  requestAnimationFrame(() => {
    elt.style["transition"] = "all .3s ease-in-out";
    elt.style["transition-delay"] = transitionDelay * (i + 1) + "ms";
  });
  observer.observe(elt);
});
document.querySelectorAll(".point-container").forEach((elt, i) => {
  elt.classList.add("before-appear");
  requestAnimationFrame(() => {
    elt.style["transition"] = "all .3s ease-in-out";
    elt.style["transition-delay"] = transitionDelay * (i + 1) + "ms";
  });
  observer.observe(elt);
});



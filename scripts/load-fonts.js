document.body.style.visibility = "hidden";

document.fonts.ready.then(() => {
  document.body.style.visibility = "visible";
});

setTimeout(() => {
  document.body.style.visibility = "visible";
}, 5000);

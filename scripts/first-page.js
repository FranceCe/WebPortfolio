const presentationTextElt = document.querySelector(".presentation-hello");

let helloLoaded = false;
document.fonts.ready.then(() => {
  if (helloLoaded) return;
  helloLoaded = true;
  setTimeout(() => {
    insertLikeTyping(presentationTextElt, " Hello!");
  }, 0);
});

setTimeout(() => {
  if (helloLoaded) return;
  helloLoaded = true;
  setTimeout(() => {
    insertLikeTyping(presentationTextElt, " Hello!");
  }, 0);
}, 5000);



let helloLoaded = false;
document.fonts.ready.then(() => {
  if (helloLoaded) return;
  helloLoaded = true;
  setTimeout(() => {
    insertLikeTyping(presentationTextElt, language == 'en' ? ' Hello!' : " Ciao!");
  }, 0);
});

setTimeout(() => {
  if (helloLoaded) return;
  helloLoaded = true;
  setTimeout(() => {
    insertLikeTyping(presentationTextElt, language == 'en' ? ' Hello!' : " Ciao!");
  }, 0);
}, 5000);

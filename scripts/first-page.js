const presentationTextElt = document.querySelector(".presentation-hello");

setTimeout(() => {
  insertLikeTyping(presentationTextElt, "Hello!");
}, 200);

function insertLikeTyping(targetElt, text, speed = 100, characters = 1) {
  if (typeof text == "string") {
    text = text.split("");
  }
  targetElt.classList.add("typing");
  if (!text.length) {
    targetElt.classList.remove("typing");
    return;
  }
  targetElt.innerHTML += text.splice(0, characters).join("");
  setTimeout(() => {
    insertLikeTyping(targetElt, text, speed, characters);
  }, speed);
}

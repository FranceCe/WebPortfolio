const italianFlag = document.querySelector(".flag.italian");
italianFlag.onclick = () => {
  changeToLang("it");
};
const englishFlag = document.querySelector(".flag.english");
englishFlag.onclick = () => {
  changeToLang("en");
};

let language =
  (localStorage.getItem("language") ||
    navigator.language ||
    navigator.userLanguage) == "it-IT"
    ? "it"
    : "en";

changeToLang(language, true);

function changeToLang(lang, isPageLanding) {
  if (lang == "it") {
    localStorage.setItem("language", "it-IT");
    language = "it";
    makeInvisible("en");
    makeVisible("it");
    italianFlag.classList.add("selected");
    englishFlag.classList.remove("selected");

    if (isPageLanding) return;
    presentationTextElt.innerHTML = " Ciao!";
    return;
  }

  localStorage.setItem("language", "en");
  language = "en";
  makeInvisible("it");
  makeVisible("en");
  italianFlag.classList.remove("selected");
  englishFlag.classList.add("selected");

  if (isPageLanding) return;
  presentationTextElt.innerHTML = " Hello!";
}

function makeInvisible(lang) {
  document.querySelectorAll(`[lang='${lang}']`).forEach((elt) => {
    elt.style.display = "none";
  });
}

function makeVisible(lang) {
  document.querySelectorAll(`[lang='${lang}']`).forEach((elt) => {
    elt.style.display = "";
  });
}

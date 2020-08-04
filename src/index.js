// JS Goes here - ES6 supported

import "./css/main.scss";

Array.from(document.querySelectorAll(".js-toggles-mobile-nav")).forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".main-nav").classList.toggle("main-nav--mobile-opened");
  });
});

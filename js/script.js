import Slide from "./slide.js";

const slide = new Slide(".slide", ".slide-wrapper");
slide.init();

slide.changeSlide(0);
// slide.activeNextSlide();

const proximoSlide = document.querySelector(".next");
const anteriorSlide = document.querySelector(".prev");

function proximoSlideF() {
  slide.activeNextSlide();
}

function anteriorSlideF() {
  slide.activePrevSlide();
}
proximoSlide.addEventListener("click", proximoSlideF);
anteriorSlide.addEventListener("click", anteriorSlideF);

import gsap from "gsap";
import anime from "animejs/lib/anime.es.js";

class Landing {
  constructor() {
    this.dom = {};
    this.dom.textWrappers = document.querySelectorAll(".header__item");
    this.dom.loader = document.querySelector(".loader");
    this.dom.loaderItem = document.querySelector(".loader__item");
    this.dom.heroImageBox = document.querySelector(".hero-image__box");
  }

  wrapLettersInSpan(element) {
    element.innerHTML = element.textContent.replace(
      /\S/g,
      '<span class="letter">$&</span>'
    );
  }

  animeteLetters(element) {
    anime.timeline().add({
      targets: element.querySelectorAll(".letter"),
      translateY: [200, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: (el, i) => 4800 + 50 * i,
    });
  }

  init() {
    [...this.dom.textWrappers].forEach((textWrapper) => {
      this.wrapLettersInSpan(textWrapper);
      this.animeteLetters(textWrapper);
    });

    gsap.to(this.dom.loader, {
      top: "-100%",
      duration: 2,
      ease: "expo.easeInOut",
      delay: 3.6,
    });

    let tl = gsap.timeline({ duration: 1.6, ease: "expo.easeInOut" });

    tl.from(this.dom.loaderItem, {
      height: "0vh",
      y: 200,
      opacity: 1,
    }).to(
      this.dom.loaderItem,
      {
        height: "0vh",
        y: -200,
        opacity: 0,
      },
      "+=0.4"
    );

    gsap.to(this.dom.heroImageBox, {
      y: "-100%",
      duration: 2.4,
      ease: "expo.easeInOut",
      delay: 3.8,
    });
  }
}

export default Landing;

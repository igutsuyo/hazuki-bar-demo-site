function stars() {
  let count = 200;
  let scene = document.querySelector(".message");
  let i = 0;
  while (i < count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let duration = Math.random() * 10;
    let size = Math.random() * 10;

    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";

    star.style.animationDuration = 5 + duration + "s";
    star.style.animationDelay = duration + "s";

    scene.appendChild(star);
    i++;
  }
}
stars();



class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true,
    };
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this._init();
  }
  _init() {
    const callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true);
          if (this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      });
    };

    this.io = new IntersectionObserver(callback.bind(this), this.options);

    this.io.POLL_INTERVAL = 100;

    this.els.forEach((el) => this.io.observe(el));
  }

  destroy() {
    this.io.disconnect();
  }
}

const header = document.querySelector(".header");




const _navAnimation = function (el, inview) {
  if (inview) {
    header.classList.remove("triggered");
  } else {
    header.classList.add("triggered");
  }
};

const so3 = new ScrollObserver(".nav-trigger", _navAnimation, { once: false });

var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  loopAdditionalSlides: 4,
  centeredSlides: true,
  allowTouchMove: false,
  speed: 5000,
  // slidesPerView: 2,
  spaceBetween: 60,
  autoplay: {
    delay: 0,
  },
});

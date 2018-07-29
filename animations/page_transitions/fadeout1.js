export default function fadeout1(selector) {
  requestAnimationFrame(() => {
    TweenMax.to(selector, 1, {opacity: 0});
  });
};

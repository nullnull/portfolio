export default function fadeout1(selector) {
  requestAnimationFrame(() => {
    TweenMax.to(selector, 1, {opacity: 0});
    TweenMax.to("#menu-button", 1, {opacity: 0});
    TweenMax.to("#header-logo", 1, {opacity: 0});
  });
};

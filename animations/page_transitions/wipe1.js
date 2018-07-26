export default function wipe1(el, done, rootIndexSelector) {
  TweenMax.set(el, { 'z-index': 1 });
  requestAnimationFrame(() => {
    TweenMax.to('.wipe1-box1', 1, {height: '100vh'});
    TweenMax.to('.wipe1-box2', 1, {height: '100vh', delay: 0.4 });
    TweenMax.to('.wipe1-box3', 1, {height: '100vh', delay: 0.8 });
    TweenMax.to(rootIndexSelector, 1, {height: '0vh', delay: 2.0, onComplete() {
      TweenMax.set(el, { 'z-index': 0 });
      TweenMax.to('#about .fade-in-fade-out', 1, {opacity: 1, y: -5, delay: 0.5});
      done()
    }});
  });
}

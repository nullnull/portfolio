export default function wipe1(el, done, rootIndexSelector) {
  requestAnimationFrame(() => {
    TweenMax.to('.wipe1-box1', 1, {height: '100vh'});
    TweenMax.to('.wipe1-box2', 1, {height: '100vh', delay: 0.4 });
    TweenMax.to('.wipe1-box3', 1, {height: '100vh', delay: 0.8 });
    TweenMax.set('.next-page', { 'opacity': 1 });
    TweenMax.to(rootIndexSelector, 1, {height: '0vh', delay: 2.0, onComplete() {
      done()
    }});
  });
}

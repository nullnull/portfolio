const nextPathToEyecatchTitle = {
  'index': 'TOP',
  'about': 'ABOUT ME',
  'lovegraph': '2016-2018',
  'dena': '2014-2016',
  'univ': '2012-2014',
  'photography': 'PHOTOGRAPHY',
};

export default function wipe1(el, done, rootIndexSelector, nextPath) {
  requestAnimationFrame(() => {
    TweenMax.to('.wipe1-box1', 0.8, {height: '100%'});
    TweenMax.to('.wipe1-box2', 0.8, {height: '100%', delay: 0.3, onComplete() {
      document.querySelector(".wipe1-text1").textContent = nextPathToEyecatchTitle[nextPath];
      TweenMax.set('.wipe1-text1', { 'top': window.innerHeight / 2 - 30 });
      TweenMax.to('.wipe1-text1', 0.1, {opacity: 1, delay: 0.2});
    }});
    TweenMax.to('.wipe1-box3', 0.8, {height: '100%', delay: 0.6 });
    TweenMax.to(rootIndexSelector, 1, {height: '0%', delay: 2.5, onComplete() {
      done()
    }});
  });
}

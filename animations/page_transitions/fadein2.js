import TweenMax from 'gsap'

export default function fadein2(selector, done, delay) {
  requestAnimationFrame(() => {
    TweenMax.staggerTo(selector, 0.8, {
      ease: 'ease',
      delay: delay,
      startAt: { opacity: 0, y: 5, },
      opacity: 0.9, y: 0,
      onComplete() { done() }
    }, 0.8);
    TweenMax.to("#menu-button", 1.0, {
      ease: 'ease',
      delay: delay + 1.0,
      startAt: { opacity: 0, y: 10, },
      opacity: 0.7, y: 0,
      onComplete() { done() }
    });
  });
};

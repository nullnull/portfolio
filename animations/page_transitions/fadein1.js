import TweenMax from 'gsap'

export default function fadein1(selector, done, delay) {
  requestAnimationFrame(() => {
    TweenMax.staggerTo(selector, 1.0, {
      ease: 'ease',
      delay: delay,
      startAt: { opacity: 0, y: 5, },
      opacity: 0.9, y: 0,
      onComplete() { done() }
    }, 1.7);
    TweenMax.to("#menu-button", 1.0, {
      ease: 'ease',
      delay: delay + 1.5,
      startAt: { opacity: 0, y: 10, },
      opacity: 0.7, y: 0,
      onComplete() { done() }
    });
    TweenMax.to("#header-logo", 1.0, {
      ease: 'ease',
      delay: delay + 1.0,
      startAt: { opacity: 0, y: 10, },
      opacity: 0.7, y: 0,
      onComplete() { done() }
    });
  });
};

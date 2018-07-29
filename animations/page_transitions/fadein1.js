import TweenMax from 'gsap'

export default function fadein1(selector, done, delay) {
  requestAnimationFrame(() => {
    TweenMax.staggerTo(selector, 1.0, {
      ease: 'ease',
      delay: delay,
      startAt: { opacity: 0, y: 5, },
      opacity: 0.9, y: 0,
      onComplete() { done() }
    }, 0.1)
  });
};

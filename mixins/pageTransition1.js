import wipe1 from '~/animations/page_transitions/wipe1'
import fadein1 from '~/animations/page_transitions/fadein1'
import fadeout1 from '~/animations/page_transitions/fadeout1'
import TweenMax from 'gsap'

export default {
  transition: {
    appear: true,
    async enter (el, done) {
      const pageId = document.querySelector('.page-root').children[0].id;
      fadein1(`#${pageId} .fade-in-fade-out-on-page`, done, 0.4);
    },
    leave (el, done) {
      const pageId = document.querySelector('.page-root').children[0].id;
      fadeout1(`#${pageId} .fade-in-fade-out-on-page`);
      wipe1(el, done, `#${pageId}`, this.$router.currentRoute.name);
    }
  }
};

import draggable from '~/mixins/draggable';
import wheelable from '~/mixins/wheelable';
import pageHandler from '~/mixins/pageHandler';

export default {
  created() {
    if (process.browser) {
      window.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowDown') {
          this.goNextPage();
        }
      });
    }
  },
  methods: {
    eventWhenDraggingUp() {
      this.goNextPage();
    },
    eventWhenDraggingDown() {
      this.goPrevPage();
    },
    eventWhenWheelingDown() {
      this.goNextPage(); // see https://github.com/nullnull/portfolio/pull/21
    },
    eventWhenWheelingUp() {
      this.goNextPage();
    },
  },
  mixins: [
    draggable,
    wheelable,
    pageHandler,
  ],
};

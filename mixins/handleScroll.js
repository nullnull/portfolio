import draggable from '~/mixins/draggable';
import wheelable from '~/mixins/wheelable';
import pageHandler from '~/mixins/pageHandler';

const currentPathToNextPath = {
  'index': 'about',
  'about': 'lovegraph',
  'lovegraph': 'dena',
  'dena': 'univ',
  'univ': 'photography',
  'photography': 'contact',
  'contact': '/',
};

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
    eventWhenWheelingDown() {
      this.goNextPage();
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

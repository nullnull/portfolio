import draggable from '~/mixins/draggable';
import wheelable from '~/mixins/wheelable';

const currentPathToNextPath = {
  'index': 'about',
  'about': 'lovegraph',
  'lovegraph': 'dena',
  'dena': 'univ',
  'univ': '/',
};

export default {
  created() {
    if (process.browser) {
      window.addEventListener('keyup', (e) => {
        this.goNextPage();
      });
    }
  },
  methods: {
    eventWhenDraggedUp() {
      this.goNextPage();
    },
    eventWhenWheeledDown() {
      this.goNextPage();
    },
    goNextPage() {
      if (this.$store.state.menuVisibility) {
        return;  // Do not go to next page when opening menu.
      }
      const currentPath = this.$router.currentRoute.name;
      const nextPath = currentPathToNextPath[currentPath];
      this.$router.push(nextPath);
    },
  },
  mixins: [
    draggable,
    wheelable,
  ],
};

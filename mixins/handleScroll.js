import draggable from '~/mixins/draggable';
import wheelable from '~/mixins/wheelable';

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
    goNextPage() {
      if (this.$store.state.menuVisibility) {
        return;  // Do not go to next page when opening menu.
      }
      const currentPath = this.$router.currentRoute.name;
      if (currentPath === 'contact') {
        return;
      }
      const nextPath = currentPathToNextPath[currentPath];
      this.$router.push(nextPath);
    },
  },
  mixins: [
    draggable,
    wheelable,
  ],
};

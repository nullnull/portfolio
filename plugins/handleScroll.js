import draggable from '~/plugins/draggable';
import wheelable from '~/plugins/wheelable';

const currentPathToNextPath = {
  'index': 'about',
  'about': '/',
};

export default {
  created() {
    if (process.browser) {
      window.addEventListener('keyup', (e) => {
        this.goNextPage();
      });
    }
  },
  data() {
    return {
      currentPage: 'index',
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

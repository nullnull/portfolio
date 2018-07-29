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
  methods: {
    goNextPage() {
      if (this.$store.state.menuVisibility || this.$store.state.isPageTransitioning) {
        return;
      }
      const currentPath = this.$router.currentRoute.name;
      if (currentPath === 'contact') {
        return;
      }
      const nextPath = currentPathToNextPath[currentPath];
      this.$store.commit('startPageTransition');
      this.$router.push(nextPath);
      setTimeout(() => this.$store.commit('stopPageTransition'), 3000); // NOT GOOD IMPLEMENTATION
    },
  },
};

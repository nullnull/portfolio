const paths = ['/', '/about', '/lovegraph', '/dena', '/univ', '/photography', '/contact']
const pathsWithFallback = [null, ...paths, null]

function getNextPath(targetPath) {
  const index = pathsWithFallback.findIndex(path => path === targetPath);
  return pathsWithFallback[index + 1];
}

function getPrevPath(targetPath) {
  const index = pathsWithFallback.findIndex(path => path === targetPath);
  return pathsWithFallback[index - 1];
}

function moveTo(vue, path) {
  vue.$store.commit('startPageTransition');
  vue.$router.push(path);
  setTimeout(() => vue.$store.commit('stopPageTransition'), 3000); // NOT GOOD IMPLEMENTATION
}

export default {
  methods: {
    goNextPage() {
      if (this.$store.state.menuVisibility || this.$store.state.isPageTransitioning) {
        return;
      }
      const nextPath = getNextPath(this.$router.currentRoute.path);
      if (nextPath) {
        moveTo(this, nextPath);
      }
    },
    goPrevPage() {
      if (this.$store.state.menuVisibility || this.$store.state.isPageTransitioning) {
        return;
      }
      const prevPath = getPrevPath(this.$router.currentRoute.path);
      if (prevPath) {
        moveTo(this, prevPath);
      }
    },
  },
};

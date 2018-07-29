import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    menuVisibility: false,
    isPageTransitioning: false,
    numberOfLoadedImage: 0,
    allImageLoaded: false,
  },
  mutations: {
    hideMenu (state) {
      state.menuVisibility = false;
    },
    showMenu (state) {
      state.menuVisibility = true;
    },
    startPageTransition(state) {
      state.isPageTransitioning = true;
    },
    stopPageTransition(state) {
      state.isPageTransitioning = false;
    },
    incrementNumberOfLoadedImage(state) {
      state.numberOfLoadedImage++;
    },
    loadedAllImage(state) {
      state.allImageLoaded = true;
    },
  }
})

export default store

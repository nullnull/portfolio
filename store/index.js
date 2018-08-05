import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    menuVisibility: false,
    isPageTransitioning: false,
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
  }
})

export default store

import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    menuVisibility: false,
  },
  mutations: {
    hideMenu (state) {
      state.menuVisibility = false;
    },
    showMenu (state) {
      state.menuVisibility = true;
    },
  }
})

export default store

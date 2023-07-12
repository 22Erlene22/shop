import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: [
      { id: 1, name: 'Item 1', img: 'proc.png'},
      { id: 2, name: 'Item 2', img: 'proc.png' },
      { id: 3, name: 'Item 3', img: 'proc.png' },
      { id: 4, name: 'Item 4', img: 'proc.png' },
      { id: 5, name: 'Item 5', img: 'proc.png' },
      { id: 6, name: 'Item 6', img: 'proc.png' },
      { id: 7, name: 'Item 7', img: 'proc.png' },
      { id: 8, name: 'Item 8', img: 'proc.png' },
      { id: 9, name: 'Item 9', img: 'proc.png' },
    ],
  },
  getters: {
    computedItems() {
      return this.items;
    },
  }
  });


 export default store;
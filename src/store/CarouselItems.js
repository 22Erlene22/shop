import { createStore } from "vuex"

const store = createStore({
  state: {
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ],
  }
  });


 export default store;
import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: [
      { id: 1, name: 'Процессоры', img: 'proc.png',placename:'процессорах'},
      { id: 2, name: 'Материнские платы', img: 'proc.png' ,placename:'мат. платах'},
      { id: 3, name: 'Охлаждение', img: 'proc.png' ,placename:'охлаждении'},
      { id: 4, name: 'Видеокарты', img: 'proc.png' ,placename:'видеокартах'},
      { id: 5, name: 'SSD', img: 'proc.png' ,placename:'ssd'},
      { id: 6, name: 'HDD', img: 'proc.png' ,placename:'hdd'},
      { id: 7, name: 'Блоки питания', img: 'proc.png' ,placename:'блоках питания'},
      { id: 8, name: 'Мониторы', img: 'proc.png' ,placename:'мониторах'},
      { id: 9, name: 'Корпуса', img: 'proc.png' ,placename:'корпусах'},
      { id: 10, name: 'Периферия', img: 'proc.png' ,placename:'периферии'},
    ],
  },
  getters: {
    computedItems() {
      return store.items;
    },
  }
  });


 export default store;
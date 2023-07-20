import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: [
      { id: 1, name: 'Процессоры', img: 'proc.png',placename:'процессорах'},
      { id: 2, name: 'Материнские платы', img: 'matpl.png' ,placename:'мат. платах'},
      { id: 3, name: 'Охлаждение', img: 'cool.jpg' ,placename:'охлаждении'}, 
      { id: 4, name: 'Видеокарты', img: 'vcard.png' ,placename:'видеокартах'},
      { id: 5, name: 'SSD', img: 'disk.png' ,placename:'ssd'},
      { id: 6, name: 'HDD', img: 'disk.png' ,placename:'hdd'},
      { id: 7, name: 'Блоки питания', img: 'bpit.png' ,placename:'блоках питания'},
      { id: 8, name: 'Мониторы', img: 'monik.png' ,placename:'мониторах'},
      { id: 9, name: 'Корпуса', img: 'corp.png' ,placename:'корпусах'},
      { id: 10, name: 'Периферия', img: 'periph.png' ,placename:'периферии'},
    ],
  },
  getters: {
    computedItems() {
      return store.items;
    },
  }
  });


 export default store;
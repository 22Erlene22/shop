<template lang="pug">
div
  div.kaka

    span {{item.name}}
    
    img(width="50%" height="auto" :src="require(`@/assets/photoCarousel/${URL}`)")
    
    button.btn(@click='openForm') Подробнее о {{item.placename}}

    div.overlay(v-if="showForm" @click="closeForm")
    InfoForm(v-if="showForm" @closeForm="closeForm" :img="URL")

</template>

<script>
import InfoForm from '../form/FormView.vue'
export default {
  components: {
    InfoForm
  },

  props: ['item', 'URL',],

  data() {
    return {
      showForm: false // Флаг для отображения диалогового окна
    };
  },

  methods: {
    openForm() {
      this.showForm = true; // При клике на кнопку отображаем диалоговое окно
    },
    closeForm() {
      this.showForm = false; // Метод для закрытия диалогового окна из дочернего компонента InfoForm
    }
  }
}
</script>

<style scoped>
.btn {
  margin: 5px 0;
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #333;
  border-radius: 5px;
  background-color: rgba(0,0,0,0.3);
  box-shadow: 0 1px 4px rgb(36, 39, 41);
  color: #333;
  cursor: pointer;
}
.kaka {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(118, 185, 0);
  margin: 0 15px;
  min-height: 195px;
}
span {
  top: 5%
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
}
</style>

<template lang='pug'>
vue-scroll-snap( :fullscreen="true")
  div( class="item")
    section( class="sl-1") Компания ABOBA - производитель компонентов для вашей печки.
  div(class="item")
    section(class="sl-2") Занимаемся произвоством с 2007 года. Закончены 100+ контрактов и продолжаем работу
  div(class="item")
    TheCarousel
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";
import TheCarousel from '@/components/Carousel/TheCarousel.vue';

export default {
  name: 'MainPage',
  components: {
    VueScrollSnap,
    TheCarousel,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.item {
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vw;
  }
  
  .scroll-snap-container {
    height: 500px;
    width: auto;
  }
  .item:first-child{
    background-image: url(../assets/sl-1.jpg);
  }
  .item:nth-child(2){
    background-image: url(../assets/sl-2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .item:last-child{
    background-image: url(../assets/sl-3.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .sl-1 {
    color: aliceblue;
  }
  .sl-2 {
    color: aliceblue;
  }
</style>
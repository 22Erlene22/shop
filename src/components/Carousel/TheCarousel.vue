<template lang="pug">
div.carousel
  hooper(:settings="hooperSettings")
    slide.item(v-for="item in items" :key="item.id")
      CarouselItem(:item='item' :URL='item.img')
</template>

<script>
import { mapState } from 'vuex'
import "hooper/dist/hooper.css"
import { Hooper, Slide } from "hooper"
import CarouselItem from './CarouselItem.vue'

export default {
  name:"TheCarousel",
  data() {
    return {
      hooperSettings: {
      itemsToShow: 3,
      infiniteScroll: true,
      keysControl:true,
      }
    }
  },
  components: {
    Hooper,
    Slide,
    CarouselItem
  },
  computed: {
    ...mapState(['items'])
  },
}
</script>

<style>
/* @import '../assets/carousel.css'; */
/* .img {
  width: 10%;
  height: auto;
} */
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: auto;
}
/* .item {
  width: 100%;
  height: 30%;
} */
.hooper {
  height: 500px;
}
/* .np-slider {
  border: 10px solid #000000;
  color: #ffffff;
  padding: 24px;
  font-size: 40px;
  height: 400px;
  width: 800px;
  text-shadow: 1px 1px 2px #000000;
  font-family: Arial, Helvetica, sans-serif;
} */
</style>
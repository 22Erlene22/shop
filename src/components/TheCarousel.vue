<template>
  <div class="item">
    <hooper :settings="hooperSettings">
    <slide v-for="item in items" :key="item"> {{ item.name }}
    <img :src="require(`@/assets/${item.img}`)"/>
    </slide>
  </hooper> 
    <!-- <section class="sl-3" v-for="item in items" :key="item">
      <p>{{ item.name }}</p>
    </section> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import "hooper/dist/hooper.css"
import { Hooper, Slide } from "hooper"

export default {
  name:"TheCarousel",
  data() {
    return {
      hooperSettings: {
      itemsToShow: 2,
      }
    }
  },
  components: {
    Hooper,
    Slide
  },
  computed: {
    ...mapState(['items'])
  },
}
</script>

<style>
/* @import '../assets/carousel.css'; */

.hooper {
  height: 50%;
  width: 600px;
}
.np-slider {
  border: 10px solid #000000;
  color: #ffffff;
  padding: 24px;
  font-size: 40px;
  height: 400px;
  width: 800px;
  text-shadow: 1px 1px 2px #000000;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
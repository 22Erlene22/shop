<template>
  <!-- <div class="item">
    <Carousel :visible-slides="3" :step="2" :infinite="true">
      <slide v-for="item in items" :key="item.id">
        <div class="click">
          <span>
            {{ item.name }}
            *ПЕРЕДЕЛАТЬ НАХУЙ
          </span>
          <img :src="require(`@/assets/StoreItems/${item.img}`)">
        </div>
      </slide>
  </Carousel>
    <!-- <section class="sl-3" v-for="item in items" :key="item">
      <p>{{ item.name }}</p>
    </section> -->
  </div> -->
</template>
<script>
import {Carousel, Slide} from 'vue-snap'
import { mapState } from 'vuex'

export default {
  name:"TheCarousel",
  components: {
    Carousel,
    Slide
  },
  computed: {
    ...mapState(['items'])
  },
}
</script>

<style>
@import '../assets/carousel.css';
.Carousel {
  display: flex;
  height: 50px;
  width: 100px;
  
}
.Slide {
  flex: 0 0 100%;
}
</style>
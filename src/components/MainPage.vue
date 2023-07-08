<template>
<vue-scroll-snap :fullscreen="true">
  <div class="item">
    <section>
      мейн фото
    </section>
  </div>
  <div class="item">
    <section>
      инфа
    </section>
  </div>
  <div class="item">
    <section>
      галерея с товарами и скроллом
    </section>
  </div>
  </vue-scroll-snap>
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";

export default {
  name: 'MainPage',
  components: {
    VueScrollSnap,
  }
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
    font-size: 40px;
  }

  .scroll-snap-container {
    height: 500px;
    width: auto;
  }
</style>
<template>
<div>
  <p>текст с инфой адреса</p>
  <div>
    <yandex-map :coords="[55.751244, 37.618423]" :zoom="10"></yandex-map>
  </div>
  <p style="position: absolute; right: 0;">карта о_0</p>
  <p>доп инфа</p>
</div>  
</template>

<script>
import Vue from 'vue'
import VueYandexMaps from 'vue-yandex-maps'

Vue.use('VueYandexMaps', {
  apikey: 'd206d31f-8cef-4065-adbc-9c8daadf398d'
})

export default {
  components: 
  VueYandexMaps
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
</style>
<template lang='pug'>
div( id="App")
  Header
  router-view
  Footer
</template>

<script>
import Header from './components/TheHeader.vue';
import Footer from './components/TheFooter.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
::-webkit-scrollbar {
  width: 0;
}
</style>
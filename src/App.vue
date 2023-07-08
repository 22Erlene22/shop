<template>
<div id="App">
  <Header></Header>
  <router-view/>
  <Footer></Footer>
</div>
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
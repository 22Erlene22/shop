<template>
<div id="App">
  <Header></Header>
  <MainPage></MainPage>
  <Footer></Footer>
</div>
</template>

<script>
import MainPage from './components/MainPage.vue';
import Header from './components/TheHeader.vue';
import Footer from './components/TheFooter.vue'
export default {
  name: 'App',
  components: {
    MainPage,
    Header,
    Footer,
  }
}
</script>
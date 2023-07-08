import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import route from './router/route'
import store from './store/CarouselItems'
Vue.config.productionTip = false
Vue.use('VueRouter')
Vue.use('VueSnap')

const router = new VueRouter({
  routes: route,
})
App.use(store)
new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')

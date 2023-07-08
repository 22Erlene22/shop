import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Main = () => import('@/Pages/MainPage')
const About = () => import('@/Pages/TheAbout')
const Contact = () => import('@/Pages/TheContacts')

export default [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    }
  ]
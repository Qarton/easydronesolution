import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutDrone from '../components/AboutDrone.vue'
import HomePhoto from '../components/HomePhoto.vue'
import ContactMe from '../components/ContactMe.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: AboutDrone
  },
  {
    path: '/photo',
    name: 'photo',
    component: HomePhoto
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactMe
  },
  {
    path: '*',
    redirect: 'home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

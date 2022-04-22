import Vue from 'vue'
import VueRouter from 'vue-router'
import Frontpage from '../views/Frontpage.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Creations from '../views/Creations.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Frontpage',
    component: Frontpage,
    meta: { hide: true },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { hide1:true }
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }, 
  {
    path: '/creations',
    name: 'Creations',
    component: Creations
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router

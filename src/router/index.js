import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// import Root from '../page/Root'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/contact', name: 'Contact', component: () => import('@/views/Contact.vue')
  },
  {
    path: '/works', name: 'Works', component: () => import('@/views/Works.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

let dataLayer = window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
router.afterEach((to) => {
  console.log(to.path)
  gtag('config', 'G-P1ZLFB7PL2', {'page_path': to.path});
})

export default router

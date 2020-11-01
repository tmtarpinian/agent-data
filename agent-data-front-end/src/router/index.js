import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ShoppingCart from '../views/Cart.vue'
import AgentsIndex from '../views/agents/Index.vue'
import AgentsShow from '../views/agents/Show.vue'

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
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // omponent: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/agents',
    name: 'Agents',
    component: AgentsIndex
  },

  {
    path: '/agents/:id',
    name: 'Agent',
    component: AgentsShow
  },

  {
    path: '/cart',
    name: 'Shopping Cart',
    component: ShoppingCart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

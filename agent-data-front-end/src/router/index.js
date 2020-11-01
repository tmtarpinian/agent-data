import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ShoppingCart from '../views/Cart.vue'
import ProductsIndex from '../views/products/Index.vue'
import ProductsShow from '../views/products/Show.vue'

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
    path: '/products',
    name: 'Products',
    component: ProductsIndex
  },

  {
    path: '/product/:id',
    name: 'Product',
    component: ShoppingCart
  },

  {
    path: '/cart',
    name: 'Shopping Cart',
    component: ProductsShow
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

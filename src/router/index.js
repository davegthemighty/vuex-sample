import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cats',
    name: 'cats',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cats.vue')
  },
  {
    path: '/dogs',
    name: 'dogs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dogs.vue')
  },
  {
    path: '/pets/:id',
    name: 'pet',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Pet.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

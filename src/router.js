import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Articles from './components/Articles.vue'
import Create from './components/Create.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/articles/create',
      name: 'create',
      component: Create
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      // component: Register
      component: () => import(/* webpackChunkName: "register" */ './components/Register.vue')
    }
  ]
})

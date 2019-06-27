import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserSignup from "./views/UserSignup.vue"
import AdminSignup from "./views/AdminSignup.vue"
import AdminLogin from "./views/AdminLogin.vue"
import UserLogin from "./views/UserLogin.vue"
import Dashboard from "./components/Dashboard.vue"

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/register/admin',
      name: 'register-admin',
      component: AdminSignup
    },
    {
      path: '/register/user',
      name: 'register-user',
      component: UserSignup
    },
    {
      path: '/login/admin',
      name: 'login-admin',
      component: AdminLogin
    },
    {
      path: '/login/user',
      name: 'login-user',
      component: UserLogin
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  mode: 'history'
})

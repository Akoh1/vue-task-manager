import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
window.axios = axios
Vue.config.productionTip = false
// Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

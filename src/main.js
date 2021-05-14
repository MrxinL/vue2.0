import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from 'axios';

import Conponent from './components/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Conponent)
axios.defaults.baseURL ='http://127.0.0.1:3000/mock/11'
Vue.prototype.$axios =axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

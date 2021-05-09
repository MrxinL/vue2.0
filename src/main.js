import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import App from './App.vue'

// Vue.use(Antd)

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')

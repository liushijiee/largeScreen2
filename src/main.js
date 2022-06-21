import Vue from 'vue'
import App from './App.vue'
import './style/reset.css'
import * as echarts from 'echarts'
import 'lib-flexible'
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

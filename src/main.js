import Vue from 'vue'
import App from './App.vue'
import Vue2MapboxGL from 'vue2mapbox-gl';

Vue.use(Vue2MapboxGL);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

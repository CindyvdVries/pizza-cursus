import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
<<<<<<< HEAD
import Vue2MapboxGL from 'vue2mapbox-gl';

Vue.use(Vue2MapboxGL);
=======

>>>>>>> master
Vue.use(Vuetify);

import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Buefy)
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

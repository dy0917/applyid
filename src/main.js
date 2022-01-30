import Vue from 'vue'
import Vuex from 'vuex'
import service from './services'
import App from './App.vue'
import Router from 'vue-router'
import router from './router'
import storage from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import loadComponents from './tools/loadComponents';
import homeModule from './modules/home';
import userModule from './modules/user';
import Axios from './tools/axios'

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(Router);
loadComponents();
const store = new Vuex.Store(storage);
const axios = new Axios();
store.services=service(axios);
Vue.use(homeModule, { store, router});
Vue.use(userModule, { store, router});


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

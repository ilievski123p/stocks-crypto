import Vue from 'vue'

Vue.config.productionTip = false


import VueRouter from 'vue-router';
import router from './router.js';
Vue.use(VueRouter);

import Vuesax from 'vuesax'
Vue.use(Vuesax)
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';
import "tailwindcss/tailwind.css"
const axios = require('axios').default;



import App from './components/App.vue'
const app =new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')

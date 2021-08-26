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


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


import App from './components/App.vue'
const app =new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')

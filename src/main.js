// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // vuex store instance
import { sync } from 'vuex-router-sync'
import VueResource from 'vue-resource'
import * as filters from './filters'

// use http
Vue.use(VueResource)

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')

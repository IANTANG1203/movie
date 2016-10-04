// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App'
import Main from './components/Main'
import Hello from './components/Hello'
import Hi from './components/Hi'

const routes = [
  { path: '/', component: Main },
  { path: '/foo', component: Hello },
  { path: '/bar', component: Hi }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')

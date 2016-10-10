// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)

import App from './App'
import Home from './components/Home'
import Start from './components/Start'
import Dig from './components/Dig'
import Basic from './components/more/Basic'
import Community from './components/more/Community'

const routes = [
  { path: '/', component: Home },
  { path: '/start', component: Start },
  { path: '/dig', component: Dig },
  { path: '/more/basic', component: Basic },
  { path: '/more/community', component: Community }
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

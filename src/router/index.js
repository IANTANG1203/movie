import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Start from '../components/Start'
import Dig from '../components/Dig'
import Basic from '../components/more/Basic'
import Community from '../components/more/Community'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
      { path: '/', component: Home },
      { path: '/start', component: Start },
      { path: '/dig', component: Dig },
      { path: '/more/basic', component: Basic },
      { path: '/more/community', component: Community }
  ]
})

<template lang="jade">
#app
  sin
  nav.ui.four.item.menu
    router-link.item(to='/', exact='')
      img.small(src='./assets/logo.png')
    router-link.item(to='/start', exact='') 一日上手
    .ui.simple.dropdown.item
      | 其他
      i.dropdown.icon
      .menu
        router-link.item(to='/dig') 鑽研
        router-link.item(to='/more/basic') 從頭開始
        router-link.item(to='/more/community') 社群
        .divider
        router-link.item(to='/comment') 留言板
        .divider
        .gray.header 關於本站
        a.item(href='https://github.com/bestian/start-vue', target="_blank")
          | 專案頁
          i.github.icon
        a.item(href='https://github.com/bestian/start-vue/issues', target="_blank")
          | 錯誤回報
          i.github.icon
  #main
    transition(name='fade', mode='out-in')
      router-view(:items='items', :advs='advs', :p='p')
</template>

<script>

import sin from './components/sin'
import items from './data/start.js'
import advs from './data/dig.js'

export default {
  name: 'App',
  components: {
    sin
  },
  data: function () {
    return {
      p: {p: 0},
      items: items,
      advs: advs
    }
  },
  methods: {
    test: function () {
      this.$router.push('/dig')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

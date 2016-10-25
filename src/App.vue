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

export default {
  components: {
    sin
  },
  data: function () {
    return {
      p: {p: 0},
      items: [
      {t: '命令列工具(CLI)', p: '1', checked: false, h: 'https://github.com/vuejs/vue-cli'},
      {t: '初始化', p: '1', checked: false, h: 'https://vuejs.org/guide/installation.html#CLI'},
      {t: '部件(Components)', p: '1', checked: false, h: 'https://vuejs.org/guide/components.html'},
      {t: '不換頁的路由(Routing)', p: '1', checked: false, h: 'https://vuejs.org/guide/routing.html'},
      {t: '資料綁定', p: '13', checked: false, h: 'https://vuejs.org/guide/syntax.html'},
      {t: '串列呈現', p: '1', checked: false, h: 'https://vuejs.org/guide/list.html'},
      {t: '事件與方法', p: '123', h: 'https://vuejs.org/guide/components.html#Custom-Events', checked: false},
      {t: '水管算符(Pipe)', p: '34', checked: false, h: 'http://optimizely.github.io/vuejs.org/guide/filters.html'},
      {t: '跨部件溝通', p: '2', checked: false, h: 'https://vuejs.org/guide/components.html#Composing-Components'},
      {t: '用github-page發佈', p: '12', checked: false},
      {t: 'Chrome開發套件', p: '2', h: 'https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd', checked: false},
      {t: '傳送http請求', p: '2', checked: false, h: 'https://github.com/vuejs/vue-resource'},
      {t: '狀態處理與追蹤', p: '2', checked: false, h: 'https://vuex.vuejs.org/en/intro.html'},
      {t: '安裝Vue模組', p: '23', checked: false, h: 'https://github.com/vuejs/awesome-vue#libraries--plugins'},
      {t: '安裝函式庫', p: '23', checked: false},
      {t: '安裝語言編譯', p: '3', checked: false},
      {t: '安裝SASS Mixins', p: '3', checked: false},
      {t: '過渡效果與動畫', p: '3', checked: false, h: 'https://vuejs.org/guide/transitions.html'}
      ],
      advs: [
        {t: 'JS 2015', p: '4', checked: false, h: 'https://babeljs.io/docs/learn-es2015/'},
        {t: '自訂Vue部件混入子(Mixins)', p: '4', checked: false, h: 'https://vuejs.org/guide/mixins.html'},
        {t: '自訂Vue指示物', p: '4', checked: false},
        {t: 'Webpack', p: '4', checked: false, h: 'http://webpack.github.io/docs/', note: 'v1.x和v2.x的語法有不同'},
        {t: 'Webpack使用方式', p: '5', checked: false, h: 'http://webpack.github.io/docs/usage.html'},
        {t: 'Webpack載入子', p: '5', checked: false, h: 'http://webpack.github.io/docs/using-loaders.html'},
        {t: '自訂Vue模組(Modules)', p: '5', checked: false, h: 'https://vuejs.org/guide/plugins.html'},
        {t: '自訂Vue的模版(Boilerplates)', p: '5', checked: false}
      ]
    }
  },
  methods: {
    test: function () {
      this.$router.push('/dig')
    }
  }
}

</script>

<style lang="scss">

@import 'bourbon';

html {
  height: 100%;
  font-size: 18px;
  font-size: 3vm;
  font-size: 3vmin;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.ui.container {
  max-width: 600px !important;
}

#app {
  color: #2c3e50;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  font-size: 1rem;
  text-align: center;
}

#app a, #app nav .ui.dropdown.simple.item {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px;
}

#main {
  position: absolute;
  top: 150px;
  left: 0;
  width: 100%;
}

#app nav {
  position: fixed;
  z-index: 5;
  top:0;
  left:0;
  a {
    @include transition(all 0.5s ease);
    &.router-link-active {
      background-color: #ccf !important;
    }
  }
}

.ui.simple.dropdown .menu {
  @include transition(opacity 1s ease);
}

.gray {
  color: gray !important;
  font-size: 0.618em;
}


.fade-enter-active, .fade-leave-active {
  @include transition(opacity .5s ease-in);
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>

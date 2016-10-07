<template>
  <div id="app">
    <nav class="ui three item menu">
      <router-link to="/" class="item" :class="{active: $route.path=='/'}">
        <img src="./assets/logo.png" class="small">
      </router-link>
      <router-link to="/start" class="item" :class="{active: $route.path=='/start'}">一日上手</router-link>
      <div class="ui simple dropdown item" :class="{active: $route.path!=='/' && $route.path!=='/start'}">
        延伸學習
        <i class="dropdown icon"></i>
        <div class="menu">
          <router-link to="/more" class="item" :class="{active: $route.path=='/more'}">回到起點</router-link>
          <router-link to="/baz" class="item" :class="{active: $route.path=='/baz'}">baz</router-link>
        </div>
      </div>
    </nav>
    <div id="main">
      <router-view :items="items" :p="p"></router-view>
    </div>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  components: {
    Home
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
      {t: '事件與方法', p: '123', h: 'https://vuejs.org/guide/components.html#Custom-Events', checked: false},
      {t: '跨部件溝通', p: '2', checked: false, h: 'https://vuejs.org/guide/components.html#Composing-Components'},
      {t: '狀態處理與追蹤', p: '2', checked: false, h: 'https://vuex.vuejs.org/en/intro.html'},
      {t: '用github-page發佈', p: '12', checked: false},
      {t: 'Chrome開發套件', p: '23', h: 'https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd', checked: false},
      {t: 'http請求', p: '2', checked: false, h: 'https://github.com/vuejs/vue-resource'},
      {t: '安裝Vue模組', p: '23', checked: false, h: 'https://github.com/vuejs/awesome-vue#libraries--plugins'},
      {t: '安裝其他函式庫', p: '23', checked: false},
      {t: '過渡效果與動畫', p: '3', checked: false, h: 'https://vuejs.org/guide/transitions.html'},
      {t: '自訂水管算符', p: '4', checked: false},
      {t: '自訂指示物', p: '4', checked: false},
      {t: '自訂部件混入子', p: '4', checked: false, h: 'https://vuejs.org/guide/mixins.html'},
      {t: '自訂模組', p: '4', checked: false, h: 'https://vuejs.org/guide/plugins.html'}]
    }
  }
}
</script>

<style lang="scss">
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
  z-index: 999;
  top:0;
  left:0;
}
</style>

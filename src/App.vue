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
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  components: {
    Home
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
  font-size: 16px;
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
  font-size: 18px;
  font-size: 3vm;
  font-size: 3vmin;
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
  top:0;
  left:0;
}
</style>

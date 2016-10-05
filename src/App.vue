<template>
  <div id="app">
    <nav class="ui menu">
      <router-link to="/" class="item">Main</router-link>
      <router-link to="/foo" class="item">Go to Hi</router-link>
      <router-link to="/bar" class="item">Go to Hello</router-link>
    </nav>
    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
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
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px;
}

#main {
  position: absolute;
  top: 50px;
  width: 100%;
}

#app nav {
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  background-color: #3f3;
  text-align:left;
  a {
    display: inline-block;
    font-size: 22px;
    padding: 5px;
    color: black;
    background-color: #0c0;
  }
}
</style>

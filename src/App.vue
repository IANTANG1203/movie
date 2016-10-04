<template>
  <div id="app">
    <nav>
      <router-link to="/">Main</router-link>
      <router-link to="/foo">Go to Hi</router-link>
      <router-link to="/bar">Go to Hello</router-link>
    </nav>
    <router-view></router-view>
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
  margin-top: -100px;
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

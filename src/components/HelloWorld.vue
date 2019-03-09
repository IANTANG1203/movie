<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/items">
      <img src="../assets/123.png">
      <h4>由此進</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '我的影評'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  width: 50%;
}
</style>

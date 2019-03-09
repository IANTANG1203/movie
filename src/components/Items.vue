<template>
  <div class="hello">
    <h2>我的影評</h2>
    <ol>
      <li v-for="i in items" v-bind:key="i">
        {{ i }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      items: ['銀翼殺手', '八惡人']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
img {
  width: 50%;
}
</style>

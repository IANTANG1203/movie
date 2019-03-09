<template>
  <div class="hello">
    <h2>我的影評</h2>
    <ol>
      <li v-for="i in items" v-bind:key="i">
        <h4>{{ i.n }}</h4>
        <p>{{ i.d }}</p>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      items: [
        {n: '銀翼殺手', d: 'very good!'},
        {n: '八惡人', d: 'very good!'}
      ]
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

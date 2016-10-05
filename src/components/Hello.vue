<template lang="jade">
  .hello
    h1 {{ msg }}
    p it's glad to see you
    .ui.list
      .item(v-for="i in items") {{i}}
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello! This is page 2',
      items: ['aa', 'bb', 'cc']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>

<template lang="jade">
  div.hello
    h1 {{ msg }}
    p it's glad to see you
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello! This is page 2'
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

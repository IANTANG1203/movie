<template lang="jade">
  .hi
    h1 {{ msg }}
    p vallinaJS
    p jquery
    p backbone
    p angular 1
    p react*
    p riot*
    p vue 1*
    p angular 2
    p vue 2
</template>

<script>
export default {
  data () {
    return {
      msg: '從無到Vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
$c: #42b983
h1, h3 
  color: $c
  
</style>

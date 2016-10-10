<template lang="jade">
  .hi
    h1 {{ msg }}
    .ui.list
      .item vallinaJS
      .item jquery
      .item backbone
      .item angular 1
      .item react*
      .item riot*
      .item vue 1*
      .item angular 2
      .item vue 2
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

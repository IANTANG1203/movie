<template lang="jade">
  .hi
    h1 {{ msg }}
</template>

<script>
export default {
  data () {
    return {
      msg: '網頁設計簡史'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
$c: #42b983
h1 
  color: $c
  
</style>

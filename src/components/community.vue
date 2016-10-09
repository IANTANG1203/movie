<template lang="jade">
  .hi
    h1 {{ msg }}
    .ui.divider
    h3 人
    p vueJS
    p vue台灣
    .ui.divider
    h3 模組
    p awasome-vue
</template>

<script>
export default {
  data () {
    return {
      msg: 'Vue社群'
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

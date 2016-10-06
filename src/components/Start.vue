<template lang="jade">
  .hello
    h1 {{ msg }}
    p 你只需要先備html,css,javscript的知識就行了
    .ui.list
      .item(v-for="i in items") {{i}}
</template>

<script>
export default {
  data () {
    return {
      msg: '那就來開始吧！',
      items: ['安裝CLI', '起始包', '部件化', '路由', '資料綁定', '哈哈', '特效']
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

<template lang="jade">
  .hello
    h1 {{ msg }}
    p 你只需要先備html,css,javscript的知識就行了
    .ui.list
      .item(v-for="i in items") 
        input.ui.checkbox(type="checkbox", v-model="i.checked")
        a(v-if="i.h", v-href="i.h", target="_blank") {{i.t}}
        span(v-else) {{i.t}}
</template>

<script>
export default {
  data () {
    return {
      msg: '那就來開始吧！',
      items: [
      {t: '命令列工具CLI', checked: true, h: 'https://github.com/vuejs/vue-cli'},
      {t: '起始包', checked: true},
      {t: '部件化', checked: true},
      {t: '路由'},
      {t: '資料綁定'},
      {t: '跨部件溝通', h: 'https://vuejs.org/guide/components.html#Passing-Data-with-Props'},
      {t: '哈哈'},
      {t: '與github-page協同'},
      {t: 'Chrome開發套件', h:'https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd'},
      {t: '特效'}]
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

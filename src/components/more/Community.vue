<template lang="jade">
  .hi
    h1 {{ msg }}
    h3.ui.dividing.header 國際社群
    .ui.bulleted.list
      a.item(href='https://vuejs.org/guide/join.html', target="_blank") Vue Community

    h3.ui.dividing.header 台灣社群
    .ui.bulleted.list
      a.item(href='https://www.facebook.com/groups/vuejs.tw/?fref=ts', target="_blank") Vue.js 台灣
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
<style lang="scss" scoped>
$c: #42b983;
h1, h3 {
  color: $c
}


.ui.bulleted.list {

}
  
</style>

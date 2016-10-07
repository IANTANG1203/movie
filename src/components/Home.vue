<template lang="jade">
  .hello
    img.logo(src="../assets/logo.png")
    h2 {{msg}}
    p 
      | Vue本身沒有意思，讀起來像View，也就是顯示層的意思。

    .ui.segment
      p
        | 一個前端MVVM框架，
        br
        | 結合了部份Angular的寫法和類似React的虛擬DOM引擎，
        br
        | 特色是學習曲線平緩，可以快速上手，並保有將作品放大規模的潛能。
        br
        br
        router-link(to="/start") 瞭解更多

</template>

<script>
export default {
  data () {
    return {
      msg: 'Vue是什麼?'
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

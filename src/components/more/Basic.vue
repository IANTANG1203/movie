<template lang="jade">
  .basic
    h1 {{ msg }}
    
    .ui.container
      h3.ui.dividing.header 語言
      .ui.bulleted.list
        .item VallinaJS: 基本的JS
        .item commonJS: 需求(Require)
        .item nodeJS: npm, 大量模組
        .item ES2015: 導入/導出(import/export)
        .item JSX: 將HTML語法引入JS
        .item Typescript: 型別確認(Type Checking)

      h3.ui.dividing.header 函式庫與框架
      .ui.bulleted.list
        .item JQuery: 包裝(Wrapping) 
        .item Angular1: 資料綁定(Data-Binding)、表達式(Expressions)、指示物(Directives)...
        .item React + JSX: 虛擬DOM(virture DOM)、部件(Component)
        .item Webpack: 打包(Bundling)
        .item Angular2 + Typescript: 影子DOM(Shadow DOM)、型別確認(Type Checking)
        .item Vue2: 可以相容以上各部份
</template>

<script>
export default {
  name: 'basic',
  data () {
    return {
      msg: '從頭開始'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$c: #42b983;

h1, h3 {
  color: $c;
}

.ui.bulleted.list {
  font-size: 0.75rem;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}

</style>

<template lang="jade">
  .basic
    h1 {{ msg }}
    
    h3.ui.dividing.header
    .ui.bulleted.list
      .item VallinaJS: 基本的JS
      .item commonJS: 需求(Require)
      .item ES2015: 導入/導出

    h3.ui.dividing.header
    .ui.bulleted.list
      .item JQuery: 包裝(Wrapping) 
      .item Angular1: 資料綁定(Data-Binding)、表達式(Expressions)、指示物(Directives)...
      .item React + JSX: 虛擬DOM(virture DOM)、部件(Component)
      .item Webpack: 打包(Bundling)
      .item Angular2 + Typescript: 影子DOM(Shadow DOM)、型別確認(Type Checking)
      .item Vue2: 以上
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
  width: 50%;
  min-width: 300px;
  font-size: 0.75rem;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}

</style>

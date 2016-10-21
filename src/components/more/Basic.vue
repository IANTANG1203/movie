<template lang="jade">
  .basic
    h1 {{ msg }}
    
    .ui.container
      .ui.segment
        p 起初，在瀏覽器端不能跑程式。
        p 接著，有
          a(href = "https://zh.wikipedia.org/zh-tw/JavaScript") JavaScript(JS/ES)
          | 但很慢。
        p 當
          a(href = "https://zh.wikipedia.org/zh-tw/JavaScript") JS
          | 變快後，各種功能開始可以往前端移動，節省後端的運算量。
        p 接著，讓JS操作簡化，強調「寫更少，做更多」的
          a(href="https://zh.wikipedia.org/zh-tw/JQuery") jQuery
          | 函式庫，主導了泛用開發工具的生態，據
          a(href="https://zh.wikipedia.org/wiki/JQuery") 維基百科
          | ，全球前10,000個存取最高的網站中，有65%網站都用了
          a(href="https://zh.wikipedia.org/zh-tw/JQuery") jQuery
          |。
        p 但故事還沒有結束。
        p 在前端的部份，框架(framework)試圖處理超過jQuery所做的事：它們直接給設計師一個架構與規格，讓常見的工作用盡量少的力氣達成，並且讓往上蓋大的時候程式還能保有容易理解維護的結構。
        p 不同框架有不同的規格，背後的引擎不同，表面上設計師寫的語法也很不一樣。
        p 在許多框架被研發之後，AngularJS這個框架一度造成震撼性的效果。因其資料綁定、相依性嵌入等特性，讓書寫方便的同時，也讓建立、分享與安裝模組也很方便。
        p 大量的Angular模組被研發出來，放上ooxx平台。
        p test...
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

p {
  font-size: 0.75rem;
  text-align: left;
  line-height: 160%;
  margin-bottom: 1em;
}

.ui.bulleted.list {
  font-size: 0.75rem;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}

</style>

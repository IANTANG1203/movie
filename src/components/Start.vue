<template lang="jade">
  .hello
    h1 {{ msg }}
    p 你只需要先備
      | html +
      | css +
      | javascript
      | 的知識就行了
    .ui.list
      .item(v-for="i in items", :class="{active: i.checked}") 
        input.ui.checkbox(type="checkbox", v-model="i.checked")
        a(v-if="i.h", :href="i.h", target="_blank") {{i.t}}
        span(v-else) {{i.t}}
    .ui.divider
    p(:class="{red:countAll(8)}") 預計{{countAll()}}小時
      span(v-if="countAll(8)")!(超過一天了)
    .right.bar
      .door(:style="{bottom:countAll()*10+'%'}")


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
      {t: '路由', checked: false},
      {t: '資料綁定', checked: false},
      {t: '事件與方法', h: 'https://vuejs.org/guide/components.html#Custom-Events', checked: false},
      {t: '跨部件溝通', h: 'https://vuejs.org/guide/components.html#Passing-Data-with-Props', checked: false},
      {t: '狀態處理', checked: false},
      {t: '與github-page協同', checked: false},
      {t: 'Chrome開發套件', h: 'https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd', checked: false},
      {t: '安裝其他函式庫', checked: false},
      {t: '安裝Vue模組', checked: false},
      {t: '過渡與動畫', checked: false},
      {t: '呵呵', checked: true}]
    }
  },
  methods: {
    countAll: function (n) {
      var num = this.items.filter(function (o) {
        return o.checked
      }).length
      return n ? num > n : num
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  color: #42b983;
}

.red {
  color: red;
}

.list {
  width: 50%;
  font-size: 1rem;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}

.list .item:not(.active) {
  color: gray;
  a {
    color: #aca !important;
  }
}

.list .item.active a {
  text-decoration: underline !important;
}

.list .item input{
  margin-right: 5px;
}

.right.bar {
  position: fixed;
  top: 50px;
  right: 0;
  bottom: 0;
  width: 5px;
  background-color: green;
  background-image: linear-gradient(red, yellow, green);
  background-image: -webkit-linear-gradient(red, yellow, green); /* For Safari 5.1 to 6.0 */
  background-image: -o-linear-gradient(red, yellow, green); /* For Opera 11.1 to 12.0 */
  background-image: -moz-linear-gradient(red, yellow, green); /* For Firefox 3.6 to 15 */
  .door {
    position: fixed;
    z-index: 1;
    top: 50px;
    background-color: white;
    width: 100%;    
  }
}


</style>

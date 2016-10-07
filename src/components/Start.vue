<template lang="jade">
  .hello
    h1 {{ msg }}
    p.gray(v-for="(m, $idx) in ms", v-if="p.p==$idx") {{m}}
    p.choice
      span(v-for="(t, $index) in ['自訂', '起始組合', '工程師', '設計師']")
        input(type="radio", name="p", :value="$index", v-model="p.p", @change="checkP(p.p)")
        | {{t}}
    .ui.list
      .item(v-for="(i, $idx) in items", :class="{active: i.checked}")
        .ui.divider(v-if="$idx % 5 == 0") 
        input.ui.checkbox(type="checkbox", v-model="i.checked")
        a(v-if="i.h", :href="i.h", target="_blank") {{i.t}}
          i.chevron.right.icon(v-show="i.checked")
        span(v-else) {{i.t}}
    .ui.divider
    p(:class="{red:countAll(8)}") 預計{{countAll()}}小時
      span(v-if="countAll(8)")!(超過一天了)
    .right.bar
      .door(:style="{bottom:countAll()*10+'%'}")


</template>

<script>
export default {
  props: ['items', 'p'],
  data () {
    return {
      msg: '今天你要學什麼？',
      ms: ['需要html+css+js的先備知識', '需要html+css+js的先備知識', '需要進階的js知識', '需要進階的css知識']
    }
  },
  methods: {
    countAll: function (n) {
      var num = this.items.filter(function (o) {
        return o.checked
      }).length
      return n ? num > n : num
    },
    checkP: function (p) {
      this.items = this.items.map(function (o) {
        o.checked = false
        if (o.p && o.p.indexOf(p) > -1) o.checked = true
        return o
      })
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
  min-width: 300px;
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
    z-index: 9998;
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
    z-index: 9999;
    top: 50px;
    background-color: white;
    width: 100%;    
  }
}

p.choice {
  font-size: 1rem;
  input {
    margin-left: 10px;
    margin-right: 3px;
    position: relative;
    top: -1px;
  }
}

i.icon, i.icon::before {
  text-decoration: none;
}
</style>

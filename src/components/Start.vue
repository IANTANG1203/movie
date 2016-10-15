<template lang="jade">
  .hello
    measure(:list="items", :m="1")
    h1 {{ msg }}
    //p.gray(v-for="(m, $idx) in ms", v-if="p.p==$idx") {{m}}
    p.choice
      span(v-for="(t, $index) in ['歸零', '起始組合', '工程師', '設計師']")
        input(type="radio", name="p", :value="$index", v-model="p.p", @change="checkP(p.p)")
        | {{t}}
      span
        | &nbsp;&nbsp;&nbsp;          
        router-link(to='/dig') 更深...
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

</template>

<script>
import measure from './measure'

export default {
  name: 'Start',
  props: ['items', 'p'],
  components: {
    measure
  },
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
@import '../sass/start.scss';

</style>

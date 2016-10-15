<template lang="jade">
  .hello
    measure(:list="advs", :m="1")
    h1 {{ msg }}
    //p.gray(v-for="(m, $idx) in ms", v-if="p.p==$idx") {{m}}
    p.choice
      span(v-for="(t, $index) in ['工程師','黑客']")
        input(type="radio", name="p", :value="$index+4", v-model="p.p", @change="checkP(p.p)")
        | {{t}}
    .ui.list
      .item(v-for="(i, $idx) in advs", :class="{active: i.checked}")
        .ui.divider(v-if="$idx % 5 == 0") 
        input.ui.checkbox(type="checkbox", v-model="i.checked")
        a(v-if="i.h", :href="i.h", target="_blank") {{i.t}}
          span.gray(v-if="i.note") &nbsp;({{i.note}})
          i.chevron.right.icon(v-show="i.checked")
        span(v-else) {{i.t}}
          span.gray(v-if="i.note") &nbsp;({{i.note}})
    .ui.divider
    p(:class="{red:countDbl(8)}") 預計{{countDbl()}}小時
      span(v-if="countDbl(8)")!(超過一天了)
</template>

<script>
import measure from './measure'

export default {
  name: 'Dig',
  props: ['advs', 'p'],
  components: {
    measure
  },
  data () {
    return {
      msg: '今天你要鑽研什麼？',
      ms: ['需要html+css+js的先備知識', '需要html+css+js的先備知識', '需要進階的js知識', '需要進階的css知識']
    }
  },
  methods: {
    countDbl: function (n, m) {
      var num = this.advs.filter(function (o) {
        return o.checked
      }).length * 1
      return n ? num > n : num
    },
    checkP: function (p) {
      this.advs = this.advs.map(function (o) {
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

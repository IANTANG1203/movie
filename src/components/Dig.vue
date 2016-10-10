<template lang="jade">
  .hello
    measure(:list="advs", :m="2")
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
          i.chevron.right.icon(v-show="i.checked")
        span(v-else) {{i.t}}
    .ui.divider
    p(:class="{red:countDbl(8)}") 預計{{countDbl()}}小時
      span(v-if="countDbl(8)")!(超過一天了)
</template>

<script>
import measure from './measure'

export default {
  props: ['advs', 'p'],
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
    countDbl: function (n) {
      var num = this.advs.filter(function (o) {
        return o.checked
      }).length * 2
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

@import "bourbon";

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
  $w: 10px;
  $w1: 1vmax;
  $t: 0;
  position: fixed;
    z-index: 9998;
  top: $t;
  left: 0;
  //right: 0;
  bottom: 0;
  width: $w;
  width: $w1;
  border-right: 1px solid green;
  background-color: green;
  @include background-image(linear-gradient(red, yellow, green));
  .door {
    position: fixed;
    z-index: 9999;
    top: $t;
    background-color: white;
    width: $w;
    width: $w1;
    border-top: 1px solid green;
    border-right: 1px solid green;
    border-radius: 0 0 3px 3px;
    @include transition(bottom 0.5s ease); 
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

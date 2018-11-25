<template lang="jade">
  .hi
    .right.bar
      .door(:style="{bottom:countBar(list,m)*10+'%'}")
</template>

<script>
export default {
  props: ['m', 'list'],
  data () {
    return {
      // ...
    }
  },
  methods: {
    countBar: function (list, m) {
      var num = list.filter(function (o) {
        return o.checked
      }).length
      return num * m
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "bourbon";

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

</style>


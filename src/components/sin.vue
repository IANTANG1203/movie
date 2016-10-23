<template>
  <sin>
    <div class="dot" v-for="r in range" 
      :style="{top: 50+Math.sin(r*3.14/50)*47+'vh', left:r+'%'}"
      v-if="r < 33 || r > 66">
    </div>
  </sin>
</template>

<script>
export default {
  props: ['m', 'list'],
  data () {
    var rg = []
    for (var i = 0; i < 100; i++) {
      rg.push(i)
    }
    return {
      range: rg
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "bourbon";


.dot {
  display: block;
  position: fixed;
  z-index: 99999;
  width: 2px;
  height: 2px;
  border: 1px solid green;
}

</style>


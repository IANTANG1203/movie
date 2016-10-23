<template>
  <sin>
    <div class="rhyme" v-for="r in range" v-if="r < 70 || r > 130"> 
      <div class="dot" 
        :style="{top: 50+Math.sin(r*3.14/200*2)*55+'vh',
                 left:r/2+'%',
                 color: color,
                 'z-index': countZ(r, -1)}">~
      <div class="dot" 
        :style="{top: 50-Math.sin(r*3.14/200*2)*55+'vh',
                 left:r/2+'%',
                 color: color,
                 'z-index': countZ(r, 1)}">_
      </div>
    </div>
  </sin>
</template>

<script>
export default {
  props: [
    {
      name: 'color',
      type: String,
      required: false
    }
  ],
  data () {
    var rg = []
    for (var i = 0; i < 200; i++) {
      rg.push(i)
    }
    return {
      range: rg,
      color: 'green'
    }
  },
  methods: {
    countZ (r) {
      var z = 40 - Math.abs(r - 100)
      return z
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "bourbon";

.rhyme {
  position: relative;
}
.dot {
  display: block;
  position: fixed;
  width: 2px;
  height: 4px;
  border: 1px solid;
}

</style>


<template>
  <sin>
    <div class="rhyme" v-for="r in range" v-if="r < 66 || r > 134">
      <div class="dot" 
        :style="{top: 50+Math.sin(r*3.14/200*2)*55+'vh',
                 left:r/2+'%',
                 color: color}">
      <div class="dot" 
        :style="{top: 50-Math.sin(r*3.14/200*2)*55+'vh',
                 left:r/2+'%',
                 color: color}">
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "bourbon";

.rhyme {
  position: relative;
  z-index: 1;
}
.dot {
  display: block;
  position: fixed;
  width: 2px;
  height: 4px;
  border: 1px solid;
}

</style>


<template>
  <div>
    <div class="container">
      <button @click="movePage" :style="{'--color': this.btnColor}">>{{ btnText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      pageURL: String,
      btnText: String,
      btnColor: String
  },
  methods: {
    movePage () {
      this.$router.push(this.pageURL)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
    --color:rgba($color: #000000, $alpha: 0.1);
}

.selectBtn {
    padding: 10px 20px;
    border-radius: 3px;
    background: var(--color);
}
</style>
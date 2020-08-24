<template>
  <div>
      <div class="container">
        <div class="selectBtn active" @click="selectMode($event, 'easy')">easy</div>
        <div class="selectBtn" @click="selectMode($event, 'normal')">normal</div>
        <div class="selectBtn" @click="selectMode($event, 'hard')">hard</div>
      </div>
  </div>
</template>

<script>
import  { mapGetters } from 'vuex'

export default {
  methods: {
    selectMode (e, mode) {
      this.$store.dispatch('selectMode', mode)
      const elements = [...document.querySelectorAll('.selectBtn')]
      for (const element of elements) {
          element.classList.remove('active')
      }
      e.target.classList.add('active')
    }
  },
  computed: {
      ...mapGetters(["janken"])
  }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
}

.selectBtn {
    padding: 10px 20px;
    margin : 0 20px;
    border-radius: 3px;
    background: rgba($color: #000000, $alpha: 0.1);
}

.active {
    background: rgba($color: #000000, $alpha: 0.5);
    color: #fff
}
</style>
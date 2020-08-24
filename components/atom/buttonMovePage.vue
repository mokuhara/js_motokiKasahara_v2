<template>
  <div>
    <div class="container">
      <div
        @click="movePage"
        :style="{'--btnColor': this.btnColor, '--btnTextColor': this.btnTextColor}"
        class="moveBtn"
      >{{ btnText }}</div>
    </div>
  </div>
</template>

<script>
import  { mapGetters } from 'vuex'

export default {
  props: {
      pageURL: String,
      btnText: String,
      btnColor: String,
      btnTextColor: String,
      callback: Function
  },
  methods: {
    movePage () {
      if(this.callback) {
          this.callback()
      }
      if(!this.isLogin){
          const result = window.confirm('ログインしていないのでランキングにのりませんがよろしいですか？');
          if(!result) return
      }
      this.$router.push(this.pageURL)
    }
  },
  computed: {
      ...mapGetters(["isLogin"])
  }
}
</script>

<style lang="scss" scoped>
.container {
    --btnColor:rgba($color: #000000, $alpha: 0.1);
    --btnTextColor: #000;
    display: flex;
    justify-content: center;
}

.moveBtn {
    width: 200px;
    padding: 10px 20px;
    border-radius: 3px;
    background: var(--btnColor);
    color: var(--btnTextColor);
    font-weight: bold;
    text-align: center;
}
</style>
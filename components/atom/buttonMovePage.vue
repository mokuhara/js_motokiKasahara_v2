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
import  { mapGetters, mapState } from 'vuex'

export default {
  props: {
      pageURL: String,
      btnText: String,
      btnColor: String,
      btnTextColor: String,
      skipAlert: Boolean,
      callback: Function
  },
  methods: {
    movePage () {
      if(!this.janken && !this.skipAlert){
          alert('難易度を設定してください')
          return
      }
      if(!this.isLogin && !this.skipAlert){
          const result = window.confirm('ログインしていないのでランキングにのりませんがよろしいですか？');
          if(!result) return
      }
      if(this.callback) {
          this.callback()
      }
      this.$router.push(this.pageURL)
    }
  },
  computed: {
      ...mapGetters(["isLogin"]),
      ...mapState(["janken"])
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
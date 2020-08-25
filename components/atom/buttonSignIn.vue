<template>
  <div>
    <div class="container">
      <div class="signInBtn" @click="signIn">ログイン</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    signIn () {
      this.$store.dispatch('signIn')
    }
  }
}
</script>

<style lang="scss" scoped>
.signInBtn {
    padding: 20px;
    background: rgba($color: #757272, $alpha: 0.1);
}

.signInBtn:hover {
    background: rgba($color: #757272, $alpha: 0.2);
    transition: 0.2s;
}
</style>
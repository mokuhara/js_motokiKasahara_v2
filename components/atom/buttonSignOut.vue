<template>
  <div>
      <div class="container">
        <div class="signOutBtn" @click="signOut">ログアウト</div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    signOut () {
      this.$store.dispatch('singOut')
    }
  }
}
</script>

<style lang="scss" scoped>
.signOutBtn {
    padding: 20px;
    background: rgba($color: #757272, $alpha: 0.1);
}

.signOutBtn:hover {
    background: rgba($color: #757272, $alpha: 0.2);
    transition: 0.2s;
}
</style>

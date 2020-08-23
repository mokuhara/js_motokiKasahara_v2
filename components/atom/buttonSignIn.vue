<template>
  <div>
    <div class="container">
      <button @click="signIn">ログイン</button>
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
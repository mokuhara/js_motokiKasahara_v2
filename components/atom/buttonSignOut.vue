<template>
  <div>
      <div class="container">
        <button @click="signOut">ログアウト</button>
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

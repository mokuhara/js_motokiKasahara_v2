<template>
  <div>
    <div class="container">
      game画面
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
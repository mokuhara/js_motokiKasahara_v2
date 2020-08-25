<template>
  <div>
    <div class="container">
      <countDown :callback="changePage" :timeLimit="timeLimit"/>
    </div>
  </div>
</template>

<script>
import countDown from '@/components/atom/countDown'

export default {
  components: {
      countDown
  },
  data(){
      return {
        timeLimit: 3
      }
  },
  methods: {
      changePage(){
          this.$router.push('/game')
      }
  }
}
</script>
<template>
  <div>
    <div class="container">
        <div class="countDown">
            <countDown :callback="changePage" :timeLimit="timeLimit" :soundName="soundName"/>
        </div>
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
        timeLimit: 3,
        soundName: 'start'
      }
  },
  methods: {
      changePage(){
          this.$router.push('/game')
      }
  }
}
</script>

<style scoped>
.countDown {
    display: flex;
	justify-content: center;
	align-items: center;

    min-height: 100vh;
}
</style>
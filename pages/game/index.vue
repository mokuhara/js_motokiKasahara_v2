<template>
  <div>
    <div class="container">
        <div class="betweenGame">
            <BetweenGame />
        </div>
    </div>
  </div>
</template>

<script>
import BetweenGame from '@/components/organisms/betweenGame'

export default {
  components: {
      BetweenGame
  }
}
</script>

<style scoped>
.betweenGame {
    width: 800px;
    margin: 0 auto;
}
</style>
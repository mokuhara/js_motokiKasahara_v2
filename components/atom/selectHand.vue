<template>
  <div>
      <div class="container">
        <div class="hand" @click="selectHand(0)">
            <img src="@/assets/img/_gu.jpg" alt="">
        </div>
        <div class="hand" @click="selectHand(1)">
            <img src="@/assets/img/_choki.jpg" alt="">
        </div>
        <div class="hand" @click="selectHand(2)">
            <img src="@/assets/img/_pa.jpg" alt="">
        </div>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        selectHand(hand){
            this.$store.dispatch('clacJankenResult', hand)
        }
    }
}
</script>

<style lang="scss" scopecd>
.hand {
    margin: 20px;
}
.hand img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgb(153, 152, 152);
}
</style>
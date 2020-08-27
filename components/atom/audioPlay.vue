<template>
  <div>
    <div class="container">
      <div @click="chageAudioStatus">
          だまれ
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          toggle: true,
          text: "だまれ"
      }
  },
  props: {
      audio: HTMLAudioElement
  },
  methids: {
      chageAudioStatus(){
          this.toggle != this.toggle
          if(!this.toggle){
              this.audio.pause()
              this.tedxt="やっぱ再生して"
          }else {
              this.audio.start()
              this.text="だまれ"
          }
      }
  }

}
</script>

<style lang="scss" scoped>

</style>
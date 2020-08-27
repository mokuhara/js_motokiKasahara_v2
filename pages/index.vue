<template>
  <div>
    <div class="container">
      <header >
        <Myheader />
      </header>
      <main class="main">
        <div class="startGame">
            <StartGame />
        </div>
        <div class="loginData">
            <p>(参考)ログインデータ</p>
            <p>{{ user }}</p>
        </div>
      </main>
      <div class="cntAudio" @click="chageAudioStatus">
          {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
import Myheader from '@/components/organisms/header'
import StartGame from '@/components/organisms/startGame'

import sazae from '~/assets/sound/sazae.mp3'

import { mapGetters } from 'vuex'

export default {
  data(){
    return {
      toggle: true,
      audio: null,
      text: "だまれ"
    }
  },
  mounted() {
    setTimeout(() => {this.$store.dispatch('AuthStateChanged') }, 0)
    const audio = new Audio(sazae)
    this.audio = audio
    audio.loop = true;
    audio.play()
  },
  computed: {
    ...mapGetters(["user"])
  },
  components: {
    Myheader,
    StartGame
  },
  methods: {
    chageAudioStatus(){
          this.toggle = !this.toggle
          if(!this.toggle){
              this.audio.pause()
              this.text="再生"
          }else {
              this.audio.play()
              this.text="だまれ"
          }
      }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  position: relative;
}

.main {
  width: 800px;
  margin: 0 auto;
}

.loginData {
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
}

.loginData p{
  margin: 10px 0;
}

.cntAudio {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #000;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 100px;
  right: 10px;
  bottom:10px;
  position: fixed;
}
</style>

<template>
  <div id="timer">
    <div class="timer">
      <div class="time">
        {{ formatTime }}
      </div>
    </div>
  </div>
</template>

<script>
import startSound from '~/assets/sound/start.mp3'
import finishSound from '~/assets/sound/finish.mp3'

export default {
  data() {
    return {
      sec: this.timeLimit,
      timerObj: null,
    }
  },
  props: {
      callback: Function,
      timeLimit: Number,
      soundName: String,
  },
  methods: {
    count(){
      if (this.sec > 0) {
        this.sec --;
      } else {
          this.complete();
          if(this.soundName){
              if(this.soundName === 'start'){
                  this.playSount(startSound)
              } else if (this.soundName === 'finish') {
                  this.playSount(finishSound)
              }
          }
          if(this.callback){this.callback()};
      }
    },
    playSount(soundName){
        const audio = new Audio(soundName)
        audio.play()
    },

    start() {
      let self = this;
      this.timerObj = setInterval(function() {self.count()}, 1000)
    },

    complete() {
      clearInterval(this.timerObj)
    }
  },
  computed: {
    formatTime() {
      let timeStrings = [
        this.sec.toString()
      ].map(function(str) {
        if (str.length < 2) {
          return "0" + str
        } else {
          return str
        }
      })
      return timeStrings[0]
    }
  },
  mounted(){
      this.start()
  }
}
</script>

<style scoped>
#timer {
  display: flex;
  align-items: center;
  justify-content: center;
}
.time {
  font-size: 100px;
}
</style>
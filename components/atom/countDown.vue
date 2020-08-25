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
export default {
  data() {
    return {
      sec: 1,
      timerObj: null,
    }
  },
  props: {
      callback: Function
  },
  methods: {
    count(){
      if (this.sec > 0) {
        this.sec --;
      } else {
          this.complete();
          if(this.callback){this.callback()};
      }
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
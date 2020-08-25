<template>
  <div>
      <div class="container">
          <p>ランキング</p>
          <div v-for="(score, index) in getAllScores" :key="index">
              <div>
                  <img :src="require(score.photoURL)" alt="">
                  <p>{{ score.name }}</p>
              </div>
          </div>
          {{ getAllScores }}
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
    computed: {
        ...mapGetters(["getAllScores"])
    },
    mounted(){
        this.$store.dispatch("getAllScores")
    }
}
</script>

<style scoped>
</style>
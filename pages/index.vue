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
            <p>ログインデータ</p>
            <p>{{ user }}</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Myheader from '@/components/organisms/header'
import StartGame from '@/components/organisms/startGame'

import { mapGetters } from 'vuex'

export default {
  mounted() {
    setTimeout(() => {this.$store.dispatch('AuthStateChanged') }, 0)
  },
  computed: {
    ...mapGetters(["user"])
  },
  components: {
    Myheader,
    StartGame
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
}

.main {
  width: 800px;
}

.loginData {
  margin: 0 auto;
  text-align: center;
}
</style>

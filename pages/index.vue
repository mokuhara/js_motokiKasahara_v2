<template>
  <div class="container">
    <div>
      <Myheader />
      <Logo />
      <h1 class="title">
        sample_janken
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <div>
          <p>fugafuga</p>
          <p>{{ user }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Myheader from '@/components/organisms/header'

import { mapGetters } from 'vuex'

export default {
  mounted() {
    setTimeout(() => {this.$store.dispatch('AuthStateChanged') }, 0)
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    signIn () {
      this.$store.dispatch('signIn')
    },
    signOut () {
      this.$store.dispatch('singOut')
    }
  },
  components: {
    Myheader
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

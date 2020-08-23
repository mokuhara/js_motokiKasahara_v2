<template>
  <div>
      <div class="container">
        <div v-if="isLogin">
            <buttonSignOut />
        </div>
        <div v-else>
            <buttonSignIn />
        </div>
    </div>
  </div>
</template>

<script>
import buttonSignIn from '../atom/buttonSignIn'
import buttonSignOut from '../atom/buttonSignOut'

export default {
    components: {
        buttonSignIn,
        buttonSignOut
    },
    computed: {
        isLogin(){
            if(!this.$store.state.user) return
            return this.$store.state.user.isLogin
        }
    }
}
</script>

<style scopecd>
</style>
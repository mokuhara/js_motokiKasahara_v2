<template>
  <div>
      <div class="container">
        <div class="loginedContainer" v-if="isLogin">
            <div class="loginedContainer__signOut">
                <buttonSignOut />
            </div>
            <div class="loginedContainer__text">
                 ログイン中
            </div>
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

<style lang="scss" scopecd>
.loginedContainer {
    display:flex;
    justify-content: flex-end;

    &__signOut {
        margin: 10px 20px;
    }

    &__text {
        margin: 10px 20px;
    }
}
</style>
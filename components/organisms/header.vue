<template>
  <div>
      <div class="container">
        <div class="loginedContainer" v-if="isLogin">
            <div class="loginedContainer__text">
                 ログイン中
            </div>
            <div class="loginedContainer__signOut">
                <buttonSignOut />
            </div>
        </div>
        <div class="loginedContainer" v-else>
            <div class="loginedContainer__signIn">
                <buttonSignIn />
            </div>
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
        display: flex;
        align-items: center;
        margin-right: 20px;
    }

    &__text {
        margin: 10px 20px;
        display: flex;
        align-items: center;
    }

    &__signIn {
        display: flex;
        align-items: center;
        margin-right: 20px;
    }
}
</style>
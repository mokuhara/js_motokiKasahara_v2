<template>
  <div>
    <div class="container">
        <div class="image">
            <p>player</p>
            <img class="image__player" src="@/assets/img/yaruo.png" />
        </div>
        <div class="image">
            <p>cp</p>
            <img class="image__cp" src="@/assets/img/danbo.jpg" />
        </div>
    </div>
  </div>
</template>

<script>
import  { mapGetters } from 'vuex'

import winSound from '~/assets/sound/win.mp3'
import loseSound from '~/assets/sound/lose.mp3'


export default {
    computed: {
        ...mapGetters(["getJankenResult"])
    },
    watch: {
      getJankenResult (val, old) {
        document.querySelector('.image__player').src = val.jankenHand.playerImgURL
        document.querySelector('.image__cp').src = val.jankenHand.cpImgURL
        if(val.jugement==="勝ち"){
            const audio = new Audio(winSound)
            audio.play()
        } else if (val.jugement==="負け"){
            const audio = new Audio(loseSound)
            audio.play()
        }
      }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
}

.image {
    margin: 0 50px;
    text-align: center;
}

.image p{
    padding: 10px;
    font-weight: bold;
}

.image img{
    width: 200px;
    height: 200px;
    object-fit: cover;
}
</style>
<template>
  <div>
      <div class="container">
        <div class="mv">
            <mainImage />
        </div>
        <div class="textContent">
            <textContent
                :title="textProps.title"
                :description="textProps.description"
            />
        </div>
        <div class="mode">
            <Mode />
        </div>
        <div class="moveBtn">
            <MoveBtn
                :pageURL="btnProps.pageURL"
                :btnText="btnProps.btnText"
                :btnColor="btnProps.btnColor"
                :btnTextColor="btnProps.btnTextColor"
            />
        </div>
        <div class="ranking">
            <Ranking />
        </div>
    </div>
  </div>
</template>

<script>
import Mode from '@/components/atom/modeSelect'
import MoveBtn from '@/components/atom/buttonMovePage'
import textContent from '@/components/atom/textContent'
import Ranking from '@/components/molecules/ranking'
import mainImage from '@/components/atom/mainImage'

export default {
    data(){
        return {
            btnProps:{
                pageURL: '/game/start',
                btnText: '遊ぶ',
                btnColor: 'rgba(227,43,43,0.8)',
                btnTextColor: '#fff',
            },
            textProps:{
                title: 'ゲームルール',
                description: '難易度を選択して「遊ぶをクリック」しよう！ログインするとランキングが表示されるよ！'
            }
        }
    },
    components: {
    Mode,
    MoveBtn,
    textContent,
    Ranking,
    mainImage
  }
}
</script>

<style lang="scss" scopecd>
.container {
    width: 100%;
}

.mv {
    width: 100%;
}

.textContent {
    margin: 40px auto;
}

.mode {
    margin: 20px auto;
}

.moveBtn {
    margin: 20px auto;
}
</style>
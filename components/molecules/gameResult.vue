<template>
  <div>
      <div class="container">
          <div class="point">
              <h2>ポイント</h2>
              <p>{{ getJankenResult.point }}</p>
          </div>
          <div class="result">
              <span>勝ち： {{ getJankenResult.judgeCnt.win }}</span>
              <span>負け： {{ getJankenResult.judgeCnt.lose }}</span>
          </div>
          <div class="moveBtnContainer">
              <div class="moveBtn">
                  <MoveBtn
                        :pageURL="retryBtnProps.pageURL"
                        :btnText="retryBtnProps.btnText"
                        :btnColor="retryBtnProps.btnColor"
                        :btnTextColor="retryBtnProps.btnTextColor"
                        :callback="retryGame"
                        :skipAlert="true"
                    />
              </div>
              <div class="moveBtn">
                  <MoveBtn
                        :pageURL="exitBtnProps.pageURL"
                        :btnText="exitBtnProps.btnText"
                        :btnColor="exitBtnProps.btnColor"
                        :btnTextColor="exitBtnProps.btnTextColor"
                        :callback="exitGame"
                        :skipAlert="true"
                    />
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import textContent from '@/components/atom/textContent'
import MoveBtn from '@/components/atom/buttonMovePage'

import  { mapGetters, mapMutations } from 'vuex'

export default {
    data(){
        return {
            retryBtnProps:{
                pageURL: '/game/start',
                btnText: 'リトライ',
                btnColor: 'rgba(227,43,43,0.8)',
                btnTextColor: '#fff',
            },
            exitBtnProps:{
                pageURL: '/',
                btnText: 'やめる',
                btnColor: 'rgba(227,43,43,0.8)',
                btnTextColor: '#fff',
            }
        }
    },
    computed: {
        ...mapGetters(["getJankenResult", "janken", "isLogin"])
    },
    methods: {
        ...mapMutations(["deleteJanken","resetJankenResult", "addScore"]),
        retryGame(){
            this._addScore()
            this.resetJankenResult(this.getJankenResult.scores)
        },
        exitGame(){
            this._addScore()
            const topScore = this.janken.getTopScore()
            if(this.isLogin){
                this.$store.dispatch('createScore', topScore)
            }
            this.resetJankenResult([])
            this.deleteJanken()
        },
        _addScore(){
            const score = {
                point: this.getJankenResult.point,
                judgeCnt: {
                    win: this.getJankenResult.judgeCnt.win,
                    lose: this.getJankenResult.judgeCnt.lose,
                    drow: this.getJankenResult.judgeCnt.drow
                }
            }
            this.addScore(score)
        }
    },
    components: {
        textContent,
        MoveBtn
    }
}
</script>

<style scoped>
.point {
    text-align: center;
    margin: 50px;
}

.point h2 {
    margin-bottom: 20px;
}

.point h2 {
    font-size: 42px;
}

.point p {
    font-size: 36px;
}

.result {
    font-size: 24px;
    text-align: center;
    margin: 50px;
}

.moveBtnContainer {
    display: flex;
    justify-content: center;
}

.moveBtn {
    margin: 20px;
}
</style>

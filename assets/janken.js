export default class Janken {

    constructor(mode) {
      this.CPIMAGEARR = [
          '@/assets/img/gu.jpg',
          '@/assets/img/choki.jpg',
          '@/assets/img/ps.jpg'
      ]
      this.PLAYERIMAGEARR = [
        '@/assets/img/_gu.jpg',
        '@/assets/img/_choki.jpg',
        '@/assets/img/_pa.jpg'
      ]
      this.mode = mode
      this.judgeCnt = {
        'win': 0,
        'lose': 0,
        'drow': 0
      }
    }

    mode(){
        return this.mode
    }
    //じゃんけんの結果表示する関数
    result(janken) {

      //対戦相手(opponent)の手を取得
      const opponent = Math.floor(this._createRandomNumber() * 3)
      //じゃんけんの結果を格納
      const result = (janken - opponent + 3) % 3

        // retrunするオブジェクトを初期化
        let repJankenResult = {
            jugement: '',
            judgeCnt: {
                win: this.judgeCnt.win,
                lose: this.judgeCnt.lose,
                drow: this.judgeCnt.drow
            },
            jankenHand: {
                playerNum: janken,
                playerImgURL: this.PLAYERIMAGEARR[janken],
                cpNum: opponent,
                cpImgURL: this.CPIMAGEARR[opponent]
            }
        }

      if(result === 0){
        this.judgeCnt.drow += 1
        repJankenResult.jugement = '引き分け'
        repJankenResult.judgeCnt.drow += 1
        return repJankenResult
      }else if ( result === 2){
        this.judgeCnt.win += 1
        repJankenResult.jugement = '勝ち'
        repJankenResult.judgeCnt.win += 1
        return repJankenResult
      } else {
        this.judgeCnt.lose += 1
        repJankenResult.jugement = '負け'
        repJankenResult.judgeCnt.lose += 1
        return repJankenResult
      }
    }

    //modeから乱数生成選択
    _createRandomNumber() {
      //難易度の設定
      const easy = () => Math.random()**2
      const normal = () => (Math.random() + Math.random()) / 2
      const hard = () => Math.random()

      const modeObj = {
        "easy": easy(),
        "normal": normal(),
        "hard": hard()
      }
      return modeObj[this.mode]
    }
  }
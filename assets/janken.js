export default class Janken {

    constructor(mode) {
      this.CPIMAGEARR = [
          'https://img01.hamazo.tv/usr/kowaseika/d9b0d576.jpg',
          'https://image.entertainment-topics.jp/article/original/71948.jpg',
          'https://pimg.togetter.com/small_light(sx=0.0p,sy=3.1p,sw=100.0p,sh=93.3p,dw=1212.0,dh=636.3,cw=1200.0,ch=630.0,p=default,da=l,ds=s)/bf72fa7df42de4efbff9ab766e8cf53bed2e51dd/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f455a3572484b4f554d41456f6654692e6a7067'
      ]
      this.PLAYERIMAGEARR = [
        'https://www.silhouette-illust.com/wp-content/uploads/2016/11/17390-300x300.jpg',
        'https://www.silhouette-illust.com/wp-content/uploads/2016/11/17430-300x300.jpg',
        'https://www.silhouette-illust.com/wp-content/uploads/2016/11/17431-300x300.jpg'
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
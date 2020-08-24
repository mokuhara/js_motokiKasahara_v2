export default class Janken {

    constructor(mode) {
      this.mode = mode

      //mode選択
      const modeId = '#mode'
    //   this.replaceText(modeId, this.mode)

      this.judgecnt = {
        'win':0,
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
      const opponent = Math.floor(this.createRandomNumber() * 3)
      //じゃんけんの結果を格納
      const result = (janken - opponent + 3) % 3

      const imgId = '#pc_hands'
      const judgmentId = '#judgment'

      const element = document.querySelector(imgId)

      //すでにimgがあった場合opoonentImgを削除
      if(element.hasChildNodes()){
        this.removeImgTag(imgId)
      }

      //opoonentImgを表示
      this.createImgTag(imgId, opponent)

      if(result === 0){
        this.replaceText(judgmentId, '引き分け')
        this.judgecnt.drow += 1
        this.replaceText('#drow', this.judgecnt.drow)
      }else if ( result === 2){
        this.replaceText(judgmentId, '勝ち')
        this.judgecnt.win += 1
        this.replaceText('#win', this.judgecnt.win)
      } else {
        this.replaceText(judgmentId, '負け')
        this.judgecnt.lose += 1
        this.replaceText('#lose', this.judgecnt.lose)
      }
    }

    //modeから乱数生成選択
    createRandomNumber() {
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

    //imgTagを生成する関数
    createImgTag(selector, num) {
      console.log(selector, num)
      const resultImage =  ["./img/gu.jpeg", "./img/choki.jpg","./img/pa.jpeg"]
      const element = document.querySelector(selector)
      const imgTag = document.createElement('img')
      imgTag.classList.add('imgClass');
      imgTag.src = resultImage[num]
      element.appendChild(imgTag);
    }

    //imgTagを除去する関数
    removeImgTag(selector) {
      const element = document.querySelector(selector)
      while (element.firstChild) element.removeChild(element.firstChild);
    }

    // textの中身を入れ替える関数
    replaceText(selector, text) {
      const element = document.querySelector(selector)
      element.innerText = text
    }
  }
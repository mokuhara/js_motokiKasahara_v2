(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{217:function(t,n,e){var content=e(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(86).default)("673043b0",content,!0,{sourceMap:!1})},223:function(t,n,e){t.exports=e.p+"d18e4389cb8fe42a8f594d78b4cc7423.mp3"},224:function(t,n,e){t.exports=e.p+"012b7c50d07855ef32e614050be0d65c.mp3"},225:function(t,n,e){"use strict";var c=e(217);e.n(c).a},226:function(t,n,e){(n=e(85)(!1)).push([t.i,"#timer[data-v-5b52b888]{display:flex;align-items:center;justify-content:center}.time[data-v-5b52b888]{font-size:100px}",""]),t.exports=n},235:function(t,n,e){var content=e(279);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(86).default)("274e0720",content,!0,{sourceMap:!1})},245:function(t,n,e){"use strict";e(44),e(160),e(22),e(43),e(58);var c=e(223),o=e.n(c),r=e(224),l=e.n(r),m={data:function(){return{sec:this.timeLimit,timerObj:null}},props:{callback:Function,timeLimit:Number,soundName:String},methods:{count:function(){this.sec>0?this.sec--:(this.complete(),this.soundName&&("start"===this.soundName?this.playSount(o.a):"finish"===this.soundName&&this.playSount(l.a)),this.callback&&this.callback())},playSount:function(t){new Audio(t).play()},start:function(){var t=this;this.timerObj=setInterval((function(){t.count()}),1e3)},complete:function(){clearInterval(this.timerObj)}},computed:{formatTime:function(){return[this.sec.toString()].map((function(t){return t.length<2?"0"+t:t}))[0]}},mounted:function(){this.start()}},f=(e(225),e(33)),component=Object(f.a)(m,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"timer"}},[n("div",{staticClass:"timer"},[n("div",{staticClass:"time"},[this._v("\n      "+this._s(this.formatTime)+"\n    ")])])])}),[],!1,null,"5b52b888",null);n.a=component.exports},278:function(t,n,e){"use strict";var c=e(235);e.n(c).a},279:function(t,n,e){(n=e(85)(!1)).push([t.i,".countDown[data-v-04748bd6]{display:flex;justify-content:center;align-items:center;min-height:100vh}",""]),t.exports=n},301:function(t,n,e){"use strict";e.r(n);var c={components:{countDown:e(245).a},data:function(){return{timeLimit:3,soundName:"start"}},methods:{changePage:function(){this.$router.push("/game")}}},o=(e(278),e(33)),component=Object(o.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("div",{staticClass:"countDown"},[n("countDown",{attrs:{callback:this.changePage,timeLimit:this.timeLimit,soundName:this.soundName}})],1)])])}),[],!1,null,"04748bd6",null);n.default=component.exports}}]);
<template>
  <div>
      <div class="container">
        <div>
            <span>ポイント： {{ jankenResult.point }}</span>
        </div>
        <div>
            <span>勝ち： {{ jankenResult.judgeCnt.win }}</span>
        </div>
        <div>
            <span>負け： {{ jankenResult.judgeCnt.lose }}</span>
        </div>
        <div>
            <span>引き分け： {{ jankenResult.judgeCnt.drow }}</span>
        </div>
      </div>
  </div>
</template>

<script>
import  { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(["jankenResult"]),
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
}

.container div {
    padding: 10px 20px;
    font-weight: bold;
}
</style>
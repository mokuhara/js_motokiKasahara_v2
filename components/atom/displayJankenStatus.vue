<template>
  <div>
      <div class="container">
          <div class="status">
            <div>
                <span>ポイント： {{ getJankenResult.point }}</span>
            </div>
            <div>
                <span>勝ち： {{ getJankenResult.judgeCnt.win }}</span>
            </div>
            <div>
                <span>負け： {{ getJankenResult.judgeCnt.lose }}</span>
            </div>
            <div>
                <span>引き分け： {{ getJankenResult.judgeCnt.drow }}</span>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import  { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(["getJankenResult"])
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
}

.status {
    display: flex;
    justify-content: center;
}

.container div {
    padding: 10px 20px;
    font-weight: bold;
    margin: 0 auto;
}
</style>
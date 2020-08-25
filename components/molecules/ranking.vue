<template>
  <div>
        <div class="container">
            <div class="title">
                <h2>ランキング</h2>
            </div>
            <div class="ranking">
                <ul v-for="(score, index) in getAllScores" :key="index">
                    <li class="ranking__content">
                        <RankingContent :score="score" :index="index + 1"/>
                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
import RankingContent from '@/components/atom/rankingContent'

import { mapGetters } from 'vuex'


export default {
    computed: {
        ...mapGetters(["getAllScores"]),
    },
    mounted(){
        this.$store.dispatch("getAllScores")
    },
    components: {
        RankingContent
    }
}
</script>

<style lang="scss" scoped>
.container {
    background-color: rgba(242,242,242, 0.5);
    padding: 20px 0;
}

.title {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
}

.title h2{
    font-size: 24px;
}

.ranking {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__content {
        margin-top: 20px ;
    }

}

.ranking ul{
    list-style: none;
}
</style>
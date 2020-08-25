<template>
  <div>
        <div class="container">
            <div class="box">
                <div class="image">
                    <img :src="score.photoURL" alt="">
                </div>
                <div class="ranking">
                    {{ index }}
                </div>
                <div class="text">
                    <p class="name">{{ score.name }}</p>
                    <p>
                        <span>
                            ポイント: {{ score.score.point }}
                        </span>
                        <span>
                            勝ち: {{ score.score.win }}
                        </span>
                        <span>
                            負け: {{ score.score.lose }}
                        </span>
                    </p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        score: Object,
        index: Number
    }
}
</script>

<style scoped>

.box {
    display: flex;
    position: relative;
    width: 400px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 5px #ccc;
    background-color:#fff;
}

.ranking {
    position: absolute;
    top: -12px;
    left: -12px;
    width: 30px;
    height: 30px;
    background: rgb(225,225,225);
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    box-shadow: 0 2px 2px #ccc;
}

.image {
    width: 50px;
    height: 50px;
}

.image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.name {
    font-weight: bold;
    margin: 2px 10px;
}

.text span {
    margin: 5px 10px;
}
</style>
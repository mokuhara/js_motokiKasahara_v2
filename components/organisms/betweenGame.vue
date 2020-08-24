<template>
  <div>
    <div class="container">
        <div class="battleContainer">
            <selectHand />
            <div class="battleImage">
                <BattleImage />
            </div>
        </div>
        <div>
            <DisplayJankenStatus />
        </div>
    </div>
  </div>
</template>

<script>
import selectHand from '@/components/atom/selectHand'
import BattleImage from '@/components/atom/battleImage'
import DisplayJankenStatus from '@/components/atom/displayJankenStatus'

import  { mapGetters } from 'vuex'

export default {
    components: {
        selectHand,
        BattleImage,
        DisplayJankenStatus
    }
}
</script>

<style lang="scss" scopecd>
.battleContainer {
    display:flex;
}

.battleImage {
    display: flex;
    align-items: center;
}
</style>
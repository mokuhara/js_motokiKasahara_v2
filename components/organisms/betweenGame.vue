<template>
  <div>
    <div class="container">
        <div class="battleContainer">
            <selectHand />
            <div class="battleImage">
                <battleImage />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import selectHand from '@/components/atom/selectHand'
import battleImage from '@/components/atom/battleImage'

import  { mapGetters } from 'vuex'

export default {
    components: {
        selectHand,
        battleImage
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
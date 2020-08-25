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
        <div>
            <countDown :callback="openModal"/>
        </div>
    </div>
    <div v-if="modal.isOpen">
            <Modal />
    </div>
  </div>
</template>

<script>
import selectHand from '@/components/atom/selectHand'
import BattleImage from '@/components/atom/battleImage'
import DisplayJankenStatus from '@/components/atom/displayJankenStatus'
import countDown from '@/components/atom/countDown'
import Modal from '@/components/atom/modal'

import  { mapGetters, mapState, mapMutations } from 'vuex'

export default {
    components: {
        selectHand,
        BattleImage,
        DisplayJankenStatus,
        countDown,
        Modal
    },
    computed: {
        ...mapState(["modal"])
    },
    methods: {
        ...mapMutations(["changeModalStatus"]),
        openModal(){
            return this.changeModalStatus(true)
        }
    },
    mounted(){
        this.changeModalStatus(false)
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
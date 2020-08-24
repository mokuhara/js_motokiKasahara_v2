<template>
  <div>
    <div class="container">
        <selectHand />
    </div>
  </div>
</template>

<script>
import selectHand from '@/components/atom/selectHand'

import  { mapGetters } from 'vuex'

export default {
    components: {
        selectHand
    }
}
</script>

<style lang="scss" scopecd>

</style>
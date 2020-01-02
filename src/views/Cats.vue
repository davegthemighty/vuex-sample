<template>
  <div>
    <PetTable :pets="allCats" />
  </div>
</template>

<script>

import PetTable from '@/components/PetTable.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'cats',
  components: {
    PetTable
  },
  computed: {
    ...mapGetters([
      'allCats'
    ])
  }
}

</script>

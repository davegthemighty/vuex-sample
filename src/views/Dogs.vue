<template>
  <div>
    <PetTable :pets="allDogs" />
  </div>
</template>

<script>

import PetTable from '@/components/PetTable.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'dogs',
  components: {
    PetTable
  },
  computed: {
    ...mapGetters([
      'allDogs'
    ])
  }
}

</script>

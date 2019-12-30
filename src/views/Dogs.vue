<template>
  <div>
    <Table :items="dogs" />
  </div>
</template>

<script>

import dogs from '@/data/dogs'
import Table from '@/components/Table.vue'

export default {
  name: 'dogs',
  components: {
    Table
  },
  data () {
    return {
      dogs
    }
  }
}

</script>

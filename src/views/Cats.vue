<template>
  <div>
    <Table :items="cats" />
  </div>
</template>

<script>

import cats from '@/data/cats'
import Table from '@/components/Table.vue'

export default {
  name: 'cats',
  components: {
    Table
  },
  data () {
    return {
      cats
    }
  }
}

</script>

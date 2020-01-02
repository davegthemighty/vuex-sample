<template>
  <div>
    <b-table striped hover :fields="fields" :items="pets">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/${data.item.id}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>

export default {
  props: {
    pets: Array
  },
  data () {
    return {
      fields: ['name', 'age']
    }
  }
}
</script>

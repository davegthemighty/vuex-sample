<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <div>
            <b-jumbotron >
              <template v-slot:header>{{selectedPet.name}}</template>

              <template v-slot:lead>
                <div>Age {{ selectedPet.age }}</div>
              </template>

            </b-jumbotron>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'pet',
  props: {
    id: [Number, String]
  },
  computed: {
    pets () {
      return this.$store.state.pets
    },
    selectedPet: function () {
      return this.pets.find(function (pet) {
        return pet.id === Number.parseInt(this.id, 10)
      }, this)
    }
  }
}

</script>

<template>
  <div class="home">
    <button class="btn btn-primary" @click="togglePetForm">Add New Pet</button>

    <div>
      <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="showPetForm">
        <b-form-group
          id="input-group-name"
          label="Name:"
          label-for="input-name"
          description="Enter the pet's name"
        >
          <b-form-input
            id="input-name"
            v-model="formData.name"
            type="text"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-age" label="Age:" label-for="input-age">
          <b-form-input
            id="input-age"
            v-model="formData.age"
            type="number"
            required
            placeholder="Enter age"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-type" label="Type:" label-for="input-type">
          <b-form-select
            id="input-type"
            v-model="formData.type"
            :options="types"
            required
          ></b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>

      </b-form>

    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex'
import cloneDeep from 'lodash.clonedeep'

export default {
  name: 'home',
  data () {
    return {
      showPetForm: false,
      formData: {
        id: 15,
        name: '',
        age: 0,
        type: null
      },
      types: [{ text: 'Select One', value: null }, 'dog', 'cat']
    }
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    onSubmit () {
      this.addPet(cloneDeep(this.formData))
      this.onReset()
    },
    onReset () {
      // Reset our form values
      this.formData.name = ''
      this.formData.age = 0
      this.formData.type = null
      this.togglePetForm()
    }
  }
}
</script>

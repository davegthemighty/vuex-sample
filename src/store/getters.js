export default {
  allCats: (state) => {
    return state.pets.filter(pet => pet.type === 'cat')
  },
  allDogs: (state) => {
    return state.pets.filter(pet => pet.type === 'dog')
  }
}

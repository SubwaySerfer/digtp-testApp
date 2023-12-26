export default {
  addField(state, payload) {
    let newArr = state.currentFields.map(el => el.id == payload)
    let index = newArr.indexOf(true)
    if (index !== -1) {
      state.currentFields.splice(index, 1)
    } else {
      state.currentFields.push({ 'id': payload, 'required': false })
    }
  },
  toggleReguired(state, payload) {
    let index = state.currentFields.map(el => el.id == payload).indexOf(true)
    state.currentFields[index].required = !state.currentFields[index].required
  }
}
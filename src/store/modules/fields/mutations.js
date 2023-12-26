export default {
  addField(state, payload) {
    let index = state.currentFields.indexOf(payload)
    if (index !== -1) {
      state.currentFields.splice(index, 1)
    } else {
      state.currentFields.push(payload)
    }
  }
}
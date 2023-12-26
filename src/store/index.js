import { createStore } from "vuex"

import fields from './modules/fields'

const store = createStore({
  modules: {
    fields
  }
})

export default store
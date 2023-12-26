import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true, state() {
    return {
      currentFields: ['Фамилия', 'Имя'
      ]
    }
  },
  mutations,
  getters
}

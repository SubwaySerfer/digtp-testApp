import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true, state() {
    return {
      currentFields: [
        {
          'id': 'Фамилия', required: false
          ,
        }, {
          'id': 'Имя', required: false
        }

      ]
    }
  },
  mutations,
  getters
}

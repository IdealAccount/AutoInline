/*export default {
  addEmployee({commit}, obj) {
    commit('ADD_EMPLOYEE', obj)
  },
  saveEmployee({commit}, payload) {
    commit('SAVE_EMPLOYEE', payload)
  },
  cancelEdit({commit}) {
    commit('CANCEL_EDIT')
  }
}*/
export function addEmployee({commit}, obj) {
  commit('ADD_EMPLOYEE', obj)
}
export function saveEmployee({commit}, payload) {
  commit('SAVE_EMPLOYEE', payload)
}
export function cancelEdit({commit}) {
  commit('CANCEL_EDIT')
}
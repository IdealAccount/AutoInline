// export default {
//   removeEmployee({commit}, obj) {
//     commit('REMOVE_EMPLOYEE', obj);
//   },
//   sortEmployees({commit}, payload) {
//     commit('SORT_EMPLOYEES', payload)
//   },
//   editEmployee({commit}, obj) {
//     commit('EDIT_EMPLOYEE', obj)
//   }
// }
export function removeEmployee({commit}, obj) {
  commit('REMOVE_EMPLOYEE', obj);
}
export function sortEmployees({commit}, payload) {
  commit('SORT_EMPLOYEES', payload)
}
export function editEmployee({commit}, obj) {
  commit('EDIT_EMPLOYEE', obj)
}
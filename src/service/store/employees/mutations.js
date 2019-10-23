/*export default {
  ADD_EMPLOYEE(state, obj) {
    state.employees.push(obj)
    if (!state.employees.length) obj.id = 1;
    else obj.id = state.employees.length + 1;
  },
  SAVE_EMPLOYEE(state, obj) {
    state.employees.forEach(employee => {
      if (employee.id === obj.id) {
        Object.assign(employee, obj);
      }
    });
    state.edit.isActive = false;
  },
  CANCEL_EDIT(state) {
    state.edit.isActive = false;
  }
}*/
export function ADD_EMPLOYEE(state, obj) {
  state.employees.push(obj)
  if (!state.employees.length) obj.id = 1;
  else obj.id = state.employees.length + 1;
}
export function SAVE_EMPLOYEE(state, obj) {
  state.employees.forEach(employee => {
    if (employee.id === obj.id) {
      Object.assign(employee, obj);
    }
  });
  state.edit.isActive = false;
}
export function CANCEL_EDIT(state) {
  state.edit.isActive = false;
}
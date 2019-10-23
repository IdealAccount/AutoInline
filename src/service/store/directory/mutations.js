/*export default {
  REMOVE_EMPLOYEE(state, obj) {
    if (obj.position === 'Директор') {
      alert('не ох@Eешь директора удалять?');
      if (!confirm('ох@Eю')) {
        alert('Прошу прощения, генерал-адмирал Алладин, не признал вас сразу');
        return state.employees.splice(state.employees.indexOf(obj), 1)
      } else return
    }
    (confirm('Вы уверены, что хотите ликвидировать сотрудника?')) ?
      state.employees.splice(state.employees.indexOf(obj), 1) : false;
    state.employees.forEach((item, i) => item.id = i + 1)
  },
  SORT_EMPLOYEES(state, {type, sorted}) {
    state.employees.sort((a, b) => {
      let typeA = a[type].toLowerCase(),
        typeB = b[type].toLowerCase();
      if (sorted === 'ascending') {
        if (typeA > typeB) return -1;
        if (typeA < typeB) return 1;
      }
      if (sorted === 'descending') {
        if (typeA < typeB) return -1;
        if (typeA > typeB) return 1;
      }
      return 0
    })
  },
  EDIT_EMPLOYEE(state, obj) {
    state.edit.isActive = true;
    state.employees.forEach(item => {
      if (item === obj) {
        state.edit.obj = {...item};
      }
    })
  }
}*/
export function REMOVE_EMPLOYEE(state, obj) {
  if (obj.position === 'Директор') {
    alert('не ох@Eешь директора удалять?');
    if (!confirm('ох@Eю')) {
      alert('Прошу прощения, генерал-адмирал Алладин, не признал вас сразу');
      return state.employees.splice(state.employees.indexOf(obj), 1)
    } else return
  }
  (confirm('Вы уверены, что хотите ликвидировать сотрудника?')) ?
    state.employees.splice(state.employees.indexOf(obj), 1) : false;
  state.employees.forEach((item, i) => item.id = i + 1)
}
export function SORT_EMPLOYEES(state, {type, sorted}) {
  state.employees.sort((a, b) => {
    let typeA = a[type].toLowerCase(),
      typeB = b[type].toLowerCase();
    if (sorted === 'ascending') {
      if (typeA > typeB) return -1;
      if (typeA < typeB) return 1;
    }
    if (sorted === 'descending') {
      if (typeA < typeB) return -1;
      if (typeA > typeB) return 1;
    }
    return 0
  })
}
export function EDIT_EMPLOYEE(state, obj) {
  state.edit.isActive = true;
  state.employees.forEach(item => {
    if (item === obj) {
      state.edit.obj = {...item};
    }
  })
}

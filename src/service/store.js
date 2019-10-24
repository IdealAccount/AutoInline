import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    edit: {
      isActive: false,
      obj: {}
    },
    employees: [
      {id: 1, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 2, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 3, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
      {id: 4, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 5, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 6, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},{id: 1, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 2, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 3, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
      {id: 4, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 5, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 6, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},{id: 1, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 2, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 3, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
      {id: 4, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 5, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 6, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},{id: 1, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 2, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 3, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
      {id: 4, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 5, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 6, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},{id: 1, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 2, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 3, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
      {id: 4, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 5, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 6, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},{id: 1, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 2, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 3, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
      {id: 4, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 5, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 6, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},{id: 1, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 2, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 3, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
      {id: 4, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 5, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 6, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},{id: 1, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 2, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 3, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
      {id: 4, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 5, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 6, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},{id: 1, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 2, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 3, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
      {id: 4, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 5, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 6, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},{id: 1, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 2, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 3, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
      {id: 4, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 5, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 6, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},{id: 1, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 2, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 3, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
      {id: 4, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 5, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 6, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},{id: 1, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 2, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 3, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
      {id: 4, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 5, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 6, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},{id: 1, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 2, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 3, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
      {id: 4, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 5, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 6, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},{id: 1, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 2, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 3, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
      {id: 4, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 5, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 6, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},{id: 1, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 2, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 3, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
      {id: 4, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 5, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 6, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},{id: 1, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 2, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 3, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
      {id: 4, name: 'Руслан', surname: 'Шхалиев', patronymic: 'Мушвиг оглы', position: 'Директор'},
      {id: 5, name: 'Антон', surname: 'Богданов', patronymic: 'Васильевич', position: 'Монтажер'},
      {id: 6, name: 'Собака', surname: 'Сутулая', patronymic: 'Облезлович', position: 'Пес'},
    ],
  },
  mutations: {
    // Открыть меню
    TOGGLE_MENU(state) {
      state.drawer = !state.drawer;
    },
    // Отсортировать таблицу
    SORT_EMPLOYEES(state, {type, sorted}) {
      state.employees.sort((a, b) => {
        let typeA = a[type].toLowerCase(),
          typeB = b[type].toLowerCase();
        if (sorted === 'ascending') {
          return (typeA > typeB) ? -1 : 1;
        }
        if (sorted === 'descending') {
          return (typeA < typeB) ? -1 : 1;
        }
        return 0
      })
    },
    // Добавить сотрудника
    ADD_EMPLOYEE(state, obj) {
      state.employees.push(obj);
      if (!state.employees.length) obj.id = 1;
      else obj.id = state.employees.length + 1;
    },
    // Сохранить изменения при редактировании
    SAVE_EMPLOYEE(state, obj) {
      state.employees.forEach(employee => {
        if (employee.id === obj.id) {
          Object.assign(employee, obj);
        }
      });
      state.edit.isActive = false;
    },
    // Отмена редактирования
    CANCEL_EDIT(state) {
      state.edit.isActive = false;
    },
    // редактировать данные сотрудника
    EDIT_EMPLOYEE(state, obj) {
      state.edit.isActive = true;
      state.employees.forEach(item => {
        if (item === obj) {
          state.edit.obj = {...item};
        }
      })
    },
    // Удалить сотрудника из таблицы
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
    }

  },
  actions: {
    // открыть меню
    toggleMenu({commit}) {
      commit('TOGGLE_MENU')
    },
    // добавить сотрудника
    addEmployee({commit, dispatch}, obj) {
      commit('ADD_EMPLOYEE', obj)
    },
    // сохранить сотрудника
    saveEmployee({commit}, payload) {
      commit('SAVE_EMPLOYEE', payload)
    },
    // отменить редактирование
    cancelEdit({commit}) {
      commit('CANCEL_EDIT')
    },
    // удалить сотрудника
    removeEmployee({commit}, obj) {
      commit('REMOVE_EMPLOYEE', obj);
    },
    // сортировать таблицу
    sortEmployees({commit}, payload) {
      commit('SORT_EMPLOYEES', payload)
    },
    // редактировать сотрудника
    editEmployee({commit}, obj) {
      commit('EDIT_EMPLOYEE', obj)
    }
  },
  getters: {
    editIsActive(state) {
      return state.edit.isActive
    },
    reverseEmployees(state) {
      return state.employees.reverse();
    }
  },
  plugins: [createPersistedState()]
});
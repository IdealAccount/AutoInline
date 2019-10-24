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
      {
        id: 1,
        name: 'Руслан',
        surname: 'Шхалиев',
        patronymic: 'Мушвиг оглы',
        position: 'Директор',
        created: {date: '24.10.19', time: '15:43'}
      },
      {
        id: 2,
        name: 'Алексей',
        surname: 'Хмельницких',
        patronymic: 'Иннокентьевич',
        position: 'Фантазер',
        created: {date: '24.10.19', time: '15:44'}
      },
      {
        id: 3,
        name: 'Собака',
        surname: 'Сутулая',
        patronymic: 'Волковна',
        position: 'Сторожевой пёс',
        created: {date: '24.10.19', time: '15:45'}
      },
      {
        id: 4,
        name: 'Полина',
        surname: 'Кухарская',
        patronymic: 'Владимировна',
        position: 'Копирайтер',
        created: {date: '24.10.19', time: '15:46'}
      },
      {
        id: 5,
        name: 'Антон',
        surname: 'Богданов',
        patronymic: 'Васильевич',
        position: 'Монтажер',
        created: {date: '24.10.19', time: '15:46'}
      },
      {
        id: 6,
        name: 'Сова',
        surname: 'Мудреева',
        patronymic: 'Филиновна',
        position: 'Мудрец',
        created: {date: '24.10.19', time: '15:47'}
      },
      {
        id: 7,
        name: 'Олень',
        surname: 'Благородный',
        patronymic: 'Оленевич',
        position: 'Чучело',
        created: {date: '25.10.19', time: '15:48'}
      },
    ],
    headers: [
      {id: 1, text: 'Имя', type: 'name', sorting: false, counter: 0},
      {id: 2, text: 'Фамилия', type: 'surname', sorting: false, counter: 0},
      {id: 3, text: 'Отчество', type: 'patronymic', sorting: false, counter: 0},
      {id: 4, text: 'Должность', type: 'position', sorting: false, counter: 0},
      {id: 5, text: 'Дата', type: 'created', sorting: false, counter: 0},
    ],
    sortCache: {
      type: '',
      sorting: false,
    }
  },
  mutations: {
    // Открыть меню
    TOGGLE_MENU(state) {
      state.drawer = !state.drawer;
    },
    // Добавить сотрудника
    ADD_EMPLOYEE(state, obj) {
      state.employees.push(obj);
      if (!state.employees.length) obj.id = 1;
      else {
        obj.id = state.employees.length + 1;
      }
    },
    // Сохранить изменения при редактировании
    SAVE_EMPLOYEE(state, obj) {
      state.employees.forEach(employee => {
        if (employee.id === obj.id) {
          Object.assign(employee, obj);
        }
      });
      // режим редактирования ОТКЛ
      state.edit.isActive = false;
    },
    // Отмена редактирования
    CANCEL_EDIT(state) {
      state.edit.isActive = false;
    },
    // редактировать данные сотрудника
    EDIT_EMPLOYEE(state, obj) {
      // режим редактирования ВКЛ
      state.edit.isActive = true;
      /*Передача выбранной строки таблицы
      * в форму добавления сотрудника
      * */
      state.employees.forEach(item => {
        if (item === obj) {
          state.edit.obj = item;
        }
      })
    },
    // Удалить сотрудника из таблицы
    REMOVE_EMPLOYEE(state, obj) {
      (confirm('Вы уверены, что хотите ликвидировать сотрудника?')) ?
        state.employees.splice(state.employees.indexOf(obj), 1) : false;
    },
    // Отсортировать таблицу
    SORT_EMPLOYEES(state, {type, sorting}) {
      // сохранить данные в кэше
      state.sortCache = {
        type,
        sorting
      };
      /*
        * Sorting:
        * ASCENDING - по возрастанию
        * DESCENDING - по убыванию
        * False - сортировка по дате
        *
        * Если type не передан,
        * то сортируется по дате создания
        * в противном случае -
        * по выбранному заголовку таблицы
      */
      state.employees.sort((a, b) => {
        // сортировка по умолчанию (по дате)
        if (!state.sortCache.type || !state.sortCache.sorting) {
          return (+a.id > +b.id) ? 1 : -1;
        }
        // сортировка по дате
        if (state.sortCache.type === 'created') {
          if (state.sortCache.sorting === 'ascending') return (+a.id > +b.id) ? 1 : -1;
          if (state.sortCache.sorting === 'descending') return (+a.id < +b.id) ? 1 : -1;
        }
        // сортировка по ФИО
        let typeA = a[state.sortCache.type].toLowerCase(),
          typeB = b[state.sortCache.type].toLowerCase();
        if (state.sortCache.sorting === 'ascending') {
          return (typeA > typeB) ? -1 : 1;
        }
        if (state.sortCache.sorting === 'descending') {
          return (typeA < typeB) ? -1 : 1;
        }
      });
    },
    // Выбрать направление сортировки
    RESET_SORT_DIRECTION(state, obj) {
      /*Сброс значений всех
      * переключателей режима сортировки(объектов в массиве headers)
      * кроме активного
      */
      state.headers.forEach(item => {
        if (item.type !== obj.type) {
          item.counter = 0;
          item.sorting = false;
        }
      });
    },
  },
  actions: {
    // открыть меню
    toggleMenu({commit}) {
      commit('TOGGLE_MENU')
    },
    // добавить сотрудника
    addEmployee({commit, dispatch, state}, obj) {
      commit('ADD_EMPLOYEE', obj);
      dispatch('sortEmployees', state.sortCache)
    },
    // сохранить сотрудника
    saveEmployee({commit, dispatch, state}, payload) {
      commit('SAVE_EMPLOYEE', payload);
      dispatch('sortEmployees', state.sortCache)
    },
    // отменить редактирование
    cancelEdit({commit}) {
      commit('CANCEL_EDIT')
    },
    // удалить сотрудника
    removeEmployee({commit, dispatch, state}, obj) {
      commit('REMOVE_EMPLOYEE', obj);
      dispatch('sortEmployees', state.sortCache)
    },
    // редактировать сотрудника
    editEmployee({commit}, obj) {
      commit('EDIT_EMPLOYEE', obj)
    },
    // сортировать таблицу
    sortEmployees({commit}, payload) {
      commit('SORT_EMPLOYEES', payload)
    },
    // изменить направление сортировки таблицы
    resetSortDirection({commit, dispatch, state}, obj) {
      commit('RESET_SORT_DIRECTION', obj);
      dispatch('sortEmployees', obj)
    }
  },
  getters: {
    editIsActive(state) {
      return state.edit.isActive
    },
    employeesList(state) {
      return state.employees.reverse();
    }
  },
  plugins: [createPersistedState()]
});
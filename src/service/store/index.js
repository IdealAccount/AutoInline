import Vue from "vue";
import Vuex from "vuex";
import globalModule from './globalModule'
import directoryModule from './directory'
import employeesModule from './employees'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    directoryModule,
    employeesModule,
    globalModule,
  }
});

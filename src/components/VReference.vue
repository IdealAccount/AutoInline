<template>
    <v-card class="pb-8">
      <v-card-title>
        Сотрудники
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <div class="ml-10">
          <div><input
            id="name"
            type="radio"
            v-model="searchFilter"
            value="name"
          >
            <label for="name"> по Имени</label>
          </div>
          <div><input
            id="surname"
            type="radio"
            v-model="searchFilter"
            value="surname"
          >
            <label for="surname"> по Фамилии</label>
          </div>
          <div><input
            id="patronymic"
            type="radio"
            v-model="searchFilter"
            value="patronymic"
          >
            <label for="patronymic"> по Отчеству</label>
          </div>
        </div>
      </v-card-title>
      <v-table :filteredEmployees="filteredEmployees"></v-table>
    </v-card>
</template>
<script>
  import VTable from './VTable'
  import {mapState} from 'vuex'

  export default {
    components: {VTable},
    data() {
      return {
        search: '',
        searchFilter: 'name',
      }
    },
    computed: {
      ...mapState(['employees']),
      filteredEmployees() {
        if (!this.search.length) return null;
        let str = this.search.toLowerCase();
         return this.employees.filter((employee) => {
            if (employee[this.searchFilter].toLowerCase().match(str)) {
              return employee
            }
        });
      },
    },
  }
</script>

<style>
  .v-card {
    flex: 0 1 45%;
  }
</style>
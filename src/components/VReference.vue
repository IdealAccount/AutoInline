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
      <div>
        <div><input
          id="name"
          type="checkbox"
          v-model="searchFilter"
          value="name"
        >
          <label for="name"> по имени</label>
        </div>
        <div><input
          id="surname"
          type="checkbox"
          v-model="searchFilter"
          value="surname"
        >
          <label for="surname"> по Фамилии</label>
        </div>
        <div><input
          id="patronymic"
          type="checkbox"
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
  import { mapState } from 'vuex'
  export default {
    components: { VTable },
    data() {
      return {
        search: '',
        searchFilter: ['name'],
        result: [],
      }
    },
    computed: {
      ...mapState(['employees']),
      filteredEmployees() {
        let result = [];
        if (!this.search.length) return null;
        this.filtration(result);
        this.sortFilter(result);
        return result
        // return filteredArr.reverse();
      }
    },
    methods: {
      filtration(arr) {
        let str = this.search.toLowerCase();
        let result = [];
          this.searchFilter.forEach(tag => {
            result = this.employees.filter((employee) => {
              if (employee[tag].toLowerCase().match(str)) {
                return employee
              }
            });
            arr.push(...result);
          });
          return arr
      },
      sortFilter(arr) {
        let tag = this.searchFilter[0];
        arr.sort((a,b) => {
           let compareA = a[tag].toLowerCase(),
               compareB = b[tag].toLowerCase();
           return (compareA > compareB) ? -1 : 1;
        });
        return arr
      }
    }
  }
</script>

<style scoped>
  .v-card {
    flex: 0 1 45%;
  }
</style>
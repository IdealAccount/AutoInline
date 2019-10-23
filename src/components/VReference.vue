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
      }
    },
    computed: {
      ...mapState(['employees']),
      filteredEmployees() {
        return this.employees.filter(employee => {
          for (let prop in employee) {
            if (prop === 'id') continue;
            if (employee[prop].match(this.search)) {
              return [].push(employee);
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
  .v-card {
    flex: 0 1 45%;
  }
</style>